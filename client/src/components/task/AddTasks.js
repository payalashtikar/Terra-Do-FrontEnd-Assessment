import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../../redux/actions/taskActions';

export const AddTask = () => {
    const navigate = useNavigate();
    const [task, setTask] = useState('');

    const dispatch = useDispatch()


    const addTaskFunction = async () => {
        try {
            dispatch(addTask(task));
            setTask('')
            navigate('/homepage')
        }
        catch (error) {
            console.error('Error posting task:', error);
        }

    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addTaskFunction();
    };

    const goToHomePage = () => {
        navigate('/homepage')
    }

    return (
        <>
            <div className='w-[100%]  flex flex-col justify-center items-center mt-20 '>
                <form className='w-[500px] flex flex-col items-center justify-center p-4   border rounded-md'
                    onSubmit={handleSubmit}
                >
                    <div className="mb-3 row flex flex-col items-center justify-center">
                        <div className="col-sm-12 ">
                            <input
                                type="text"
                                className="form-control w-[400px] p-2 font-serif"
                                id="inputUsername"
                                name='taskname'
                                placeholder='add your task here'
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className=" row flex justify-center items-center ">
                        <button className="btn btn-outline-success m-2 p-2 w-32 font-serif" type="submit">Add</button>
                        <button className="btn btn-outline-danger m-2 p-2 w-32 font-serif" type="submit" onClick={goToHomePage}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
};
