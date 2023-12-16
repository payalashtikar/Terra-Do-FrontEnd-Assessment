import React, { useState } from 'react';
// import './addtask.css';
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateTask = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [editedTask, setEditedTask] = useState('');
    // const params = useParams();

    const goToHomePage = () => {
        navigate('/homepage')
    }

    const updateTaskFunction = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const taskId = params.id;
        try {
            const response = await fetch(`http://localhost:8888/task/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    taskname: editedTask,
                }),
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                navigate('/homepage');
            } else {
                console.log(data.error);
            }
        } catch (error) {
            console.error('Error editing task:', error);
        }
    };

    return (
        <>
            <div className='w-[100%]  flex flex-col justify-center items-center mt-20 '>
                <form className='w-[500px] flex flex-col items-center justify-center  p-4 border rounded-md'
                    onSubmit={updateTaskFunction}
                >
                    <div className="mb-3 row flex flex-col items-center justify-center">
                        <div className="col-sm-12 ">
                            <input
                                className="form-control w-[400px] p-2"
                                id="inputUsername"
                                type='text'
                                name='taskname'
                                placeholder='edit your task here'
                                value={editedTask}
                                onChange={(e) => setEditedTask(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className=" row flex ">
                        <button className="btn btn-outline-success m-2 p-2 w-32" type="submit">Edit</button>
                        <button className="btn btn-outline-danger m-2 p-2 w-32" type="submit" onClick={goToHomePage}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
};
