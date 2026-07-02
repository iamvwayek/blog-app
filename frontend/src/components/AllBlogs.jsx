import { useState } from 'react'
import Blog from './Blog'
import CreateBlog from './CreateBlog'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

function AllBlogs() {
    const [visible, setVisible] = useState(false)
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate()

    function createBlog(e) {
        e.preventDefault()

        setVisible(true)
    }

    useEffect(() => {
        async function getData() {
            try {
                const { data: { data } } = await axios.get("http://localhost:4000/blogs")
                setBlogs(data)

            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [blogs])

    return (
        <>
            <div className='w-300 min-h-screen relative top-0' style={{ display: visible ? 'none' : 'block' }}>
                <h1 className='text-6xl text-blue-500 my-5'>All Blogs</h1>
                <p className='text-xl px-2 hover:text-blue-500 smooth-transition cursor-pointer' onClick={() => navigate('/')}>🢐 Home</p>
                {
                    blogs.length ?
                        <div>
                            {blogs.map((value, index) => {
                                return <Blog key={index} data={value} />
                            })}
                        </div>
                        :
                        <div className='w-full h-[70vh] flex justify-center items-center text-4xl font-bold'>No Blog Present!</div>
                }

                <p className='bg-blue-500 text-black/80 text-2xl w-13 h-13 fixed bottom-15 right-25 rounded-full flex justify-center items-center hover:text-white hover:bg-blue-600 smooth-transition cursor-pointer select-none' onClick={createBlog}>+</p>
            </div>
            <div className='absolute'>
                {visible && <CreateBlog setVisible={setVisible} />}
            </div>
        </>
    )
}

export default AllBlogs
