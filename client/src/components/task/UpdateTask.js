import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import './addtask.css';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTask } from '../../redux/actions/taskActions';

export const UpdateTask = () => {
    const params = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const [editedTask, setEditedTask] = useState('');

    const goToHomePage = () => {
        navigate('/homepage')
    }

    const updateTaskFunction = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const taskId = params.id;

        try {
            dispatch(updateTask(taskId, editedTask))
            setEditedTask('')
            navigate('/homepage')
        }

        catch (error) {
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
                                className="form-control w-[400px] p-2 font-serif"
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
                        <button className="btn btn-outline-success m-2 p-2 w-32 font-serif" type="submit">Edit</button>
                        <button className="btn btn-outline-danger m-2 p-2 w-32 font-serif" type="submit" onClick={goToHomePage}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
};
