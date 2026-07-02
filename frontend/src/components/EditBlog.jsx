import { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

function EditBlog({ id, setIsEdit}) {
    const [input, setInput] = useState({
        title: "",
        description: ""
    })

    // form handlers
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:4000/edit/${id}`, input)

            toast.success("Updated successfully!")

        } catch (error) {
            toast.error("Not able to update!")

        }
    }

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value

        setInput((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })

    }

    // close button
    function handleClose() {
        setIsEdit(false)
    }

    // data fetch
    useEffect(() => {
        async function getBlog() {
            // const _id = parseInt(id)

            const { data: { data } } = await axios.get(`http://localhost:4000/blog/${id}`)
            const currentTitle = data[0].title
            const currentDescription = data[0].description

            setInput({
                title: currentTitle,
                description: currentDescription
            })
        }

        getBlog()
    }, [])

    return (
        <div className='z-20 backdrop-blur-lg w-screen h-screen flex justify-center items-center fixed top-0 left-0'>
            <div className='bg-cyan-200 w-300 h-150 p-15 rounded-xl  fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500/50 relative'>
                <form className='flex flex-col gap-3 ' onSubmit={handleSubmit}>
                    <p className='absolute top-3 right-7 text-4xl text-black/50 hover:text-black/80 cursor-pointer smooth-transition' onClick={handleClose}>x</p>
                    <h1 className='text-6xl text-blue-500 mb-3'>Edit Blog</h1>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" name='title' value={input.title} onChange={handleChange} className='h-10' />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" value={input.description} onChange={handleChange} placeholder='Write your blog....' rows='8' className='resize-none'></textarea>
                    </div>
                    <button className='bg-blue-300 hover:text-white hover:bg-blue-500 shadow-sm hover:shadow-white h-10 rounded-[8px] transition-all duration-300 delay-50 cursor-pointer'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EditBlog
