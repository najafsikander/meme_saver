// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt';
import UserModel, { IUser } from '../../../models/user';
import connectDb from '../../../lib/db';
type Data = {
  message: string
}

//Api function to signup user

/**
 * We validate endpoint first and then the request object
 * First we find if user already exists in our db or not
 * Then we generate salt & hash for password security and encrypt it
 * then we save user in our db
 * **/
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {

    connectDb();
    if (req.method !== 'POST') return res.status(401).send({
      'message': 'Inappropriate request type'
    });

    const data = req.body;

    if (Object.entries(data).length === 0) throw new Error('Please fill form properly!');

    const { email, password }: { email: String, password: string } = data;

    const userFetched: IUser | null = await UserModel.findOne({ email: email });

    if (userFetched) return res.status(501).json({ message: 'Account with provided email already exists' });

    const saltRound = 10;

    const generatedSalt = await bcrypt.genSalt(saltRound);
    const passwordHash = await bcrypt.hash(password, generatedSalt);
    const user = new UserModel(data);

    user.password = passwordHash;

    const savedUser = await user.save();

    console.info('Saved User: ', savedUser);

    if (savedUser) return res.status(200).json({ message: 'User saved successfully' });


    throw new Error('Something went wrong while signin up!');
  } catch (error: any | string) {
    console.error('Error caught in registration api: ', error);

    return res.status(500).json({ message: error.toString() });
  }
}
