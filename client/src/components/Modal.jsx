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
        <button onClick={handleCancelClick} className='bg-green-500 p-2'>X</button>
        <TaskForm/>
    </div>
  );
}

export default Modal;
