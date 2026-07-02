import React from 'react'
import { ToastContainer } from 'react-toastify'

function Tostify() {
    return (
        <div className='select-none cursor-pointer'>
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="light"
                // transition={Bounce}
            />
        </div>
    )
}

export default Tostify
