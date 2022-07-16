import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Home.module.scss";
import { useRouter } from "next/router";
import axios from 'axios';
//Form Mode Prop - 0 Means SignUp, 1 Means SignIn

const AuthForm = ({ formMode }: { formMode: Number }) => {

  //State hook variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState(0);
  const [country, setCountry] = useState(0);
  const [city, setCity] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [message, setMessage] = useState('');

  //Other variables
  const signUpLink = <a>Dont have an account? SignUp Here</a>;
  const signInLink = <a>Already have an account? SignIn Here</a>;

  const router = useRouter();

  //FUNCTIONS

  //Submit Form Parent Function
  const submitForm = (e: any) => {
    e.preventDefault();
    return formMode === 0 ? signUpUser() : signInUser();
  }

  //Login function
  const signInUser = async () => {
    try {

      setMessage('');

      const requestBody = {
        email,
        password
      };

      const response = await axios.post('/api/auth/login', requestBody);

      console.info('Response: ', response.data);
      
      if(response) {
        if(response.data) {
          const user = response.data;
          const token = user.token;

          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', token);

          return router.push('/dashboard');
        }
      }
    
      return setMessage('Something went wrong while signing in');
    } catch (error:any) {
      if(error.response) return setMessage(error.response.data);
      return console.error(`Error caught while signin in: ${error}`);
    }
  }

  //Signup function
  const signUpUser = async () => {
    try {
      setMessage('');
      if(password !== confirmPassword) return setMessage('Passwords donot match');

      const request = {
        firstName,
        lastName,
        email,
        gender,
        country,
        city,
        password
      };

      console.info('Request: ', request);
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(request)
      });

      const {status} = response;
      const {message} = await response.json();
      if(status != 200) return setMessage(message);

      return alert('Successfully created account!');
    } catch(error) {
      console.error('Error caugh while signing up user: ', error);
    }
  }

  return (
    <>
      <form onSubmit={(e) => submitForm(e)}>
        {/* First & Last Name - Only if its signUp Page*/}
        {formMode === 0 && (
          <div className="container mb-2">
            <div className="row">
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                  <label htmlFor="firstName">First Name</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Email & Gender */}
        <div className="container mb-2">
          <div className="row">
            <div className="col">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>

            {/* Gender visible if only form mode is signup */}
            {formMode === 0 && (
              <div className="col">
                <div className="form-floating">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="gender"
                    value={gender}
                    onChange={e => setGender(+e.target.value)}
                  >
                    <option selected>Select Gender</option>
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                    <option value="2">Not to be disclosed</option>
                  </select>
                  <label htmlFor="gender">Gender</label>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Country & City - Only if the page is signup */}
        {formMode === 0 && (
          <div className="container mb-2">
            <div className="row">
              <div className="col">
                <div className="form-floating">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="gender"
                    value={country}
                    onChange={e => setCountry(+e.target.value)}
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label htmlFor="country">Country</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="City"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                  />
                  <label htmlFor="city">City</label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Password & Confirm Password */}
        <div className="container mb-2">
          <div className="row">
            <div className="col">
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>

            {/* Confirm Password only if the page is signup */}
            {formMode === 0 && (
              <div className="col">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                  />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <button
                type="submit"
                className="btn btn-primary"
                id={styles.signIn}
              >
                {formMode === 0? 'SignUp' : 'SignIn'}
              </button>

              <Link href="/">
                <a>
                  <button type="button" className="btn btn-danger">
                    Go Back!
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </form>

      {/* Error message area */}
      { message != '' &&
        
        <div className="container">
        <div className="row">
          <div className="col">
              {message}
          </div>
        </div>
      </div>
      }

      <div className="container">
        <div className="row">
          <div className="col">
              <Link href={`/${formMode === 0 ? 'sign-in' : 'sign-up'}`}>
                {formMode === 0 ? signInLink : signUpLink}
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;