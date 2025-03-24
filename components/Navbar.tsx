import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white shadow-md p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-600">MyProject</h1>
                    <div className="space-x-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Home</button>
                        <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400">Sign In</button>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Sign Up</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
