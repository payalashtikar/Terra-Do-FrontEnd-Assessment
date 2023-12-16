import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
    const [user, setUser] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = () => {
        axios.get("http://localhost:8888/signup")
            .then((res) => {
                console.log('inside register res.data', res.data)
            })
    }

    const handleRegister = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8888/signup', { username, email, password })
            .then(() => {
                alert("Registration Successful ! ")
                setEmail('')
                setUsername('')
                setPassword('')
                fetchUser()
                navigate('/login')
            })
            .catch((error) => {
                setError('')
                console.log('unable to register')
            })
    };
    return (
        <div className='w-[100%]  flex flex-col justify-center items-center'>
            <form className='w-[500px] flex flex-col  justify-start items-start p-4 border rounded-md mt-20'
                onSubmit={handleRegister}
            >
                <div className="mb-3 row flex flex-col ">
                    <label for="inputUsername" className="col-sm-2 col-form-label flex justify-start">Username</label>
                    <div className="col-sm-10 ">
                        <input type="username" className="form-control w-[450px]" id="inputUsername"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-3 row flex flex-col">
                    <label for="inputEmail" className="col-sm-2 col-form-label flex justify-start">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control  w-[450px]" id="inputEmail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-3 row flex flex-col">
                    <label for="inputPassword" className="col-sm-2 col-form-label flex justify-start">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control  w-[450px]" id="inputPassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className=" row flex flex-col">
                    <button className="btn btn-outline-success m-3 p-2 w-32" type="submit">Register</button>
                </div>
            </form>
        </div>

    )
}

export default Register