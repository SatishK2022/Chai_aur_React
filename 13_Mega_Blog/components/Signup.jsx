import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import authService from '../appwrite/auth'
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'
import {Button, Input, Logo} from './index'

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const {register, handleSubmit} = useForm();

    const signup = async () => {
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const userData = await authService.getCurrentUser( );
                if(userData) dispatch(login(userData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='w-full flex items-center justify-center'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width='100%'/>
                </span>
            </div>
            <h2 className='text-center text-xl font-bold leading-tight'>
                Sign up to create an account
            </h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Already have an account? <Link to='/login' className='font-medium text-primary transition-all duration-200 hover:underline'>Sign in</Link>
            </p>
            {error && <p className='text-center text-red-500 mt-8'>{error}</p>}

            <form onSubmit={handleSubmit(signup)}>
                <div className='space-y-5'>
                    <Input 
                        label='Name' 
                        placeholder='Enter your name'
                        type='text' 
                        {...register("name", {
                            required: true,
                            minLength: 3,
                            maxLength: 20
                        })}
                    />
                    <Input 
                        label='Email'
                        type='email'
                        placeholder='Enter your email'
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
                    <Button type='submit' className='w-full'>Create Account</Button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Signup