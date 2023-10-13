import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login as authLogin } from '../store/authSlice'
import {BUtton, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import Button from './Button'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async () => {
        setError("");
        try {
            const session = await authService.login(data);

            if (session) {
                const userData = await authService.getCurrentUser();
                if(userData) dispatch(authLogin(userData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    }

  return (
    <div className='w-full flex items-center justify-center'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width='100%'/>
                </span>
            </div>
            <h2 className='text-center text-xl font-bold leading-tight'>
                Sign in to your account
            </h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Don't have an account? <Link to='/signup' className='font-medium text-primary transition-all duration-200 hover:underline'>Sign up</Link>
            </p>
            {error && <p className='text-center text-red-500 mt-8'>{error}</p>}

            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-5'>
                    <Input 
                        label='Email' 
                        type='email' 
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || "Email Address must be a valid address"
                            }
                        })}
                    />

                    <Input 
                        label='Password' 
                        type='password' 
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,
                            minLength: 6
                        })}
                    />
                    <Button 
                        type='submit'
                        className='w-full'
                    >Sign In</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login