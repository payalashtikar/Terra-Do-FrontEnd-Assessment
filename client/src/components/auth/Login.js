import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = () => {
        axios.get("http://localhost:8888/signup")
            .then((res) => {
                console.log('inside Login res.data', res.data)
            })
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8888/login', { email, password })
            const token = response.data.token;
            console.log(token)
            alert("Login Successful ! ")
            setEmail('')
            setPassword('')
            fetchUser()
            navigate('/homepage')
            window.location.reload()
            localStorage.setItem('token', token)
        }
        catch (error) {
            console.log('unable to login')
        }
    };

    return (
        <div className='w-[100%]  flex flex-col justify-center items-center'>
            <form className='w-[500px] flex flex-col items-start justify-start  p-4 border rounded-md mt-20'
                onSubmit={handleLogin}
            >
                <div className="mb-3 row flex flex-col">
                    <label for="inputEmail" className="col-sm-2 col-form-label flex justify-start">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control  w-[450px]" id="inputEmail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete='off'
                        />
                    </div>
                </div>
                <div className="mb-3 row flex flex-col">
                    <label for="inputPassword" className="col-sm-2 col-form-label flex justify-start">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control  w-[450px]" id="inputPassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete='off'
                        />
                    </div>
                </div>
                <div className="mb-3 row flex flex-col">
                    <button className="btn btn-outline-success m-3 p-2 w-32" type="submit">Login</button>
                </div>
            </form>
        </div>

    )
}

export default Login;