import { useState } from 'react';
import axios from 'axios';


import { useNavigate, Link } from 'react-router-dom';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(false);
    const [confirm, setConfirm] = useState('');
    const [waiting, setWaiting] = useState(false);
    const [count, setCount] = useState();
    const route = useNavigate();

    const handle = async (e) => {
        e.preventDefault();
        // axios.post('http://localhost:8000/api/register', {'email': email})
        axios.post('http://16.171.152.69:8000/api/register', {'email': email})
        .then(function (response) {
            const {log, user} = response.data;
            setCount(user);
            console.log(log, user);
            if(log){
                setWaiting(true);
            } else {
              setError(true);
            }
        })
        .catch(function (err) {
            console.log(err)
            setError(true);
        })
    }
    const handle2 = async (e) => {
        e.preventDefault();
        axios.post('http://13.53.200.204:8000/api/confirm', {
            'email': email, 
            'password': password, 
            'code': confirm, 
            'user': count, 
            'username': username
        })
        .then(function (response) {
            const {log} = response.data;
            console.log(log);
            if(log){
                route('/');
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
        <h1 className="text-black text-3xl font-bold mb-8">Register</h1>
        <form onSubmit={waiting ? handle2 : handle}>
          <label className="block mb-6">
            <p className='text-black'>Email</p>
            <input
              type="tel"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black w-full border p-3 rounded mt-1"
              required
            />
          </label>
          {waiting && <> 
            <label className='mb-6 block]'>
                <p className='text-black'>Username</p>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-black w-full border p-3 rounded mt-1"
                required
                />
            </label>
            <label className='mb-6 block]'>
                <p className='mb-3 font-bold text-black'>We sent confirmation code to your email</p>
                <p className='text-black'>Password</p>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-black w-full border p-3 rounded mt-1"
                required
                />
            </label>
            <label className='text-black mb-6 block]'>
                <p>Confirmation code</p>
            <input
                type="text"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="text-black w-full border p-3 rounded mt-1"
                required
                />
            </label>
          </>}
          <div><Link to={'/'} className='text-blue-500'>Already have an account</Link></div>
          {error && <div className='text-red-600'>
            Email or password or confirmation is incorrect
          </div>}
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-700"
          > Register
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Register;