import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, getAllTasks } from '../../redux/actions/taskActions';
const itemPerPage = 10;

const GetAllTask = () => {
    // const [tasks, setTasks] = useState([]);
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.task.tasks);

    const [currentPage, setCurrentPage] = useState(1)
    const startIndex = (currentPage - 1) * itemPerPage
    const endIndex = (startIndex + itemPerPage)

    const currentData = tasks.slice(startIndex, endIndex)

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }


    useEffect(() => {
        dispatch(getAllTasks());
    }, [dispatch]);

    const deleteTaskFunction = (id) => {

        dispatch(deleteTask(id))

    };


    return (
        <div className='flex flex-col items-center  p-10'>
            <h1 className='text-4xl p-4 text-gray-800'>All task list</h1>

            <div className='w-[800px]'>
                {currentData.length
                    > 0 ? (
                    <ul className=' w-[100%] flex flex-col justify-center items-center'>
                        {currentData.map((item, id) => (
                            <div className=' w-[100%] card flex flex-col m-2 p-2 justify-center items-center'
                                key={id}
                            >
                                <div className="card-body flex justify-between items-center  w-[100%]">
                                    <h5 className="card-title text-2xl">{item.taskname}</h5>
                                    <div>
                                        <Link to={"/task/" + item._id} className="card-link">
                                            <i className="ri-edit-line m-2 text-2xl"></i>
                                        </Link>
                                        <i className="ri-delete-bin-5-line m-2 text-2xl cursor-pointer" onClick={() => deleteTaskFunction(item._id)}></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                ) : (
                    <p className='text-6xl'>No tasks available ! add tasks to see task list in your bucket ..!</p>
                )}
            </div>
            <div className='w-[100%]  mb-0 p-8 m-4 flex justify-between items-center'
            >

                <i
                    className="ri-arrow-left-line text-3xl text-gray-500"
                    // onClick={() => handlePageChange(currentPage - 1)}
                    // disabled={currentPage === 1}
                    onClick={() => {
                        if (currentPage > 1) {
                            handlePageChange(currentPage - 1);
                        }
                    }}
                    style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                ></i>
                <span className='text-gray-500'> {currentPage}</span>
                <i
                    className="ri-arrow-right-line text-3xl text-gray-500"
                    // onClick={() => handlePageChange(currentPage + 1)}
                    // disabled={endIndex >= currentData.length}
                    onClick={() => {
                        if (endIndex < tasks.length) {
                            handlePageChange(currentPage + 1);
                        }
                    }}
                    style={{ cursor: endIndex >= tasks.length ? 'not-allowed' : 'pointer' }}
                ></i>

            </div>
        </div>


    )
}

export default GetAllTask