import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/authAction';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const handleLogin = async (event) => {
        event.preventDefault();


        const userData = { email, password };
        dispatch(loginUser(userData, navigate));
    };

    return (
        <div className='w-[100%]  flex flex-col justify-center items-center'>
            <form className='w-[500px] flex flex-col items-start justify-start  p-4 border rounded-md mt-20'
                onSubmit={handleLogin}
            >
                <div className="mb-3 row flex flex-col">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label flex justify-start font-serif">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control font-serif  w-[450px]" id="inputEmail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete='off'
                        />
                    </div>
                </div>
                <div className="mb-3 row flex flex-col">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label flex justify-start font-serif">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control  w-[450px] font-serif" id="inputPassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete='off'
                        />
                    </div>
                </div>
                <div className="mb-3 row flex flex-col">
                    <button className="btn btn-outline-success m-3 p-2 w-32 font-serif" type="submit">Login</button>
                </div>
            </form>
        </div>

    )
}

export default Login;