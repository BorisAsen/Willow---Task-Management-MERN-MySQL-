import React from 'react';
import TaskForm from "../pages/TaskForm";

const Modal = ({setModalOn, setChoice}) => {
   
    const handleOKClick = () => {
        setChoice(true)
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    return (
    <div className='flex justify-center items-center ml-14 backdrop-blur-sm bg-black/[.5] fixed inset-0 z-40'>
        <TaskForm/>
        {/* <div className='flex justify-center flex-col items-center w-5/6 bg-white p-5 rounded-xl'>
            <div className='flex flex-wrap bg-blue-500 justify-between'>
                <button onClick={handleOKClick} className='rounded px-4 py-2 text-white bg-green-500'>Si</button>
                <button onClick={handleCancelClick} className='rounded px-4 py-2 text-white bg-red-500'>No</button>
            </div>
        </div> */}
    </div>
  );
}

export default Modal;
