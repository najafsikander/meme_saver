import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import UserModel from "../../../models/user";
import bcrypt from 'bcrypt';
import connectDb from "../../../lib/db";
import jwt from 'jsonwebtoken';
const handler: NextApiHandler = async (request: NextApiRequest, response: NextApiResponse<String>)  => {
    connectDb();
    if (request.method !== 'POST') return response.status(401).send('Inappropriate request type');
    const credentials = request.body;
    console.info('CREDS: ', credentials);
    //Get email and password from credentials variables provided by next-auth
    const email = credentials.email;
    const password = credentials.password;

    //Login helper function
    const loginResponse = await signInUser(email, password);

    //Checking if error occured we send error as feedback to user
    if(loginResponse.name) {
      const message = loginResponse.message;
      return response.status(404).send(message);
    }

    //Send user details back
    return response.status(200).send(loginResponse);
};

export default handler;


//Login Helper function

/** 
 * We are fetching user details via email.
 * If no record found we send error otherwise we compare password with bcrypt
 * Finally send back user details
 * **/
 const signInUser = async (email: string, password:string) => {
    try {
  
      if(!email) throw new Error('Enter valid email please');
      if(!password) throw new Error('Enter valid password please');
  
      const userFetched = await UserModel.findOne({email: email});
  
      if(!userFetched) throw new Error('No record found with your provided email');
  
      const passwordMatched = await bcrypt.compare(password, userFetched.password);
  
      if(!passwordMatched) throw new Error('Please enter correct password');
      
      const userId: string = userFetched._id;
      const secret: string = process.env.SECRET || '';

      const token = jwt.sign({token: userId}, secret, {expiresIn: '7d'});
      const updatedUser = await UserModel.findByIdAndUpdate(userId, {token: token}, {new: true});

      if(!updatedUser) throw new Error('Something went wrong while fetching details');

      delete updatedUser.password;
      return updatedUser;
    } catch (error) {
      console.error('Error caught while signing in: ', error);
      return error;
    }
  }