import React, { useState } from 'react'
import {edit, bin} from "../assets/assest.js"
import EditBlog from './EditBlog.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

function Blog({data}) {
    const {_id, title, description} = data
    const [isEdit, setIsEdit] = useState(false)

    function handleEdit(){
      setIsEdit(true)
    }
    async function handleDelete(){
      try {
            await axios.delete(`http://localhost:4000/delete/${_id}`)

            toast.success("Deleted successfully!")

        } catch (error) {
            toast.error("Not able to delete!")

        }
    }

  return (
    <>
    <div className='bg-cyan-200 fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500/50 p-6 rounded-2xl flex justify-between items-center my-5'>
      <div className='flex flex-col justify-center items-start gap-2.5'>
      <h2 className='text-3xl'>{title}</h2>
      <p className='font-[350]'>{description}</p>
      </div>
      <div className='flex flex-col justify-center items-start gap-2.5'>
        <img src={edit} alt="edit" onClick={handleEdit} className='w-8 hover:invert smooth-transition cursor-pointer' />
        <img src={bin} alt="delete" onClick={handleDelete} className='w-8 hover:invert smooth-transition cursor-pointer' />
      </div>
    </div>
    {isEdit && <EditBlog id={_id} setIsEdit={setIsEdit} />}
    </>
  )
}

export default Blog
