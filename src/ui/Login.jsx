import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { useStore } from './lib/store/store';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const logIn = useStore((state) => state.logIn);
    const setUsername = useStore((state) => state.setUsername);

    //create an object that have message time userName user_name
    const route = useNavigate();



    const handle = async (e) => {
      e.preventDefault();
      // axios.post('http://localhost:8000/api/login', {'email': email, 'password': password})
      axios.post('http://16.171.152.69:8000/api/login', {'email': email, 'password': password})
      .then(function (response) {
          const {log, username} = response.data;
          console.log(log);
          if(log){
              setUsername(username);
              logIn();
              route('/chat');
          } else {
            setError(true);
          }
      })
      .catch(function (err) {
          console.log(err)
          setError(true);
      })
  }

  return (
    <div className='bg-white flex justify-center items-center h-screen w-screen'>
        <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-2xl w-96">
        <h1 className="text-3xl text-black font-bold mb-8">Login</h1>
        <form onSubmit={handle}>
          <label className="block mb-6">
            <p className='text-black'>Email</p>
            <input
              type="tel"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black w-full className='text-black' border p-3 rounded mt-1"
              required
            />
          </label>
          <label className='mb-6 block]'>
            <p className='text-black'>Password</p>
          <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-black w-full border p-3 rounded mt-1"
              required
            />
          </label>
          <div><Link to={'/register'} className='text-blue-500'>Register here</Link></div>
          {error && <div className='text-red-600'>
            Email or password is incorrect
          </div>}
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;