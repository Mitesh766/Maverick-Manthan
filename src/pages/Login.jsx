/* eslint-disable no-unused-vars */
import { useState } from "react"
import Title from "../components/Title"

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-orange-200 via-yellow-100 to-red-100 min-h-screen">
      <form className="flex flex-col items-center w-[90%] sm:max-w-md m-auto mt-14 gap-6 p-8 bg-white shadow-lg rounded-xl border border-gray-300" onSubmit={onSubmitHandler}>
        <div className="inline-flex items-center gap-3 mb-6 mt-8">
          <p className="font-serif text-4xl text-teal-600">{currentState}</p>
          <hr className="border-none h-[1px] w-16 bg-teal-600" />
        </div>

        {currentState === 'Login' ? "" : <input type="text" className='w-full px-4 py-3 border-2 border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400' placeholder="Name" required />}
        <input type="email" className="w-full px-4 py-3 border-2 border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="Email" required />
        <input type="password" className="w-full px-4 py-3 border-2 border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="Password" required />

        <div className="w-full flex justify-between text-sm mt-[-8px]">
          {currentState === 'Login' 
            ? <p className="text-teal-600 cursor-pointer" onClick={() => setCurrentState('Sign Up')}>Create account</p>
            : <p className="text-teal-600 cursor-pointer" onClick={() => setCurrentState('Login')}>Login Here</p>}
            {currentState === 'Sign Up' ? "": <p className="text-teal-600 cursor-pointer">Forgot your password?</p>}
        </div>

        <button className="bg-teal-600 text-white font-medium px-8 py-3 mt-6 rounded-lg hover:bg-teal-700 transition duration-300">{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
      </form>
    </div>
  )
}

export default Login
