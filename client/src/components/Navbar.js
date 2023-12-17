import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../redux/actions/authAction'

const Navbar = () => {
    const isUserLogin = localStorage.getItem('token')
    const navigate = useNavigate()

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logoutUser(navigate));
    }
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-2 border-b-2 border-gray-100" style={{ background: 'red' }}>
                <div className="container-fluid flex  justify-between border-b-gray-400">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <form className="d-flex ">
                        {
                            isUserLogin
                                ?
                                (
                                    <>
                                        <button className="btn btn-outline-success mr-2 p-2 w-32 mt-2 mb-2" type="submit">
                                            <Link to='/addtask'>
                                                Add Task
                                            </Link >
                                        </button >
                                        <button className="btn btn-outline-danger mr-2 p-2 w-32 mt-2 mb-2" type="submit"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </button>
                                    </>
                                )
                                :
                                (
                                    <>
                                        <button className="btn btn-outline-success mr-3 p-2 w-32 mt-2 mb-2" type="submit">
                                            <Link to='/login'>
                                                Login
                                            </Link>
                                        </button>
                                        <button className="btn btn-outline-primary mr-3 p-2 w-32 mt-2 mb-2" type="submit">
                                            <Link to='/register'>
                                                Register
                                            </Link>
                                        </button>
                                    </>
                                )
                        }

                    </form >
                </div >
            </nav >
        </div >
    )
}

export default Navbar