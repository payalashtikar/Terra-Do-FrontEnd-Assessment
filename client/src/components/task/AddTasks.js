import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddTask = () => {
    const navigate = useNavigate();
    const [task, setTask] = useState('');

    const addTaskFunction = async () => {
        try {
            const response = await fetch('http://localhost:8888/task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ taskname: task }),
            });
            const data = await response.json();
            console.log(data);
            setTask('');
            if (response.ok) {
                navigate('/homepage');
            } else {
                console.log(data.error);
            }
        } catch (error) {
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
                                className="form-control w-[400px] p-2"
                                id="inputUsername"
                                name='taskname'
                                placeholder='add your task here'
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className=" row flex justify-center items-center ">
                        <button className="btn btn-outline-success m-2 p-2 w-32" type="submit">Add</button>
                        <button className="btn btn-outline-danger m-2 p-2 w-32" type="submit" onClick={goToHomePage}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
};
