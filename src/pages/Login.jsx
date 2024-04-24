import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {
    const navigate =  useNavigate()
    const initialValue = {
        email: '',
        password: ''
    }
    const [formData, setFormData] = useState(initialValue)

    const onChangeHandle = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (formData.email === "") {
            toast.error("Email id is required!");
            return;
        }
        if (formData.password === "") {
            toast.error("Password is required!");
            return;
        }

        const usersList = JSON.parse(localStorage.getItem('userslist')) || [];
        const user = usersList.find(user => user.email === formData.email && user.password === formData.password);
        if (user) {
            toast.success("Login successful!");
            localStorage.setItem('loginUser', JSON.stringify(user))
            navigate('/dashboard');
        } else {
            toast.error("Invalid email or password. Please try again.");
        }
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='my-5 mx-auto col-lg-6 col-10 offset-lg-3 offset-1 border p-3 rounded'>
                        <form onSubmit={onHandleSubmit}>
                            <div className='mb-3 fs-3 fw-bold'>Login</div>
                            <div className="mb-3">
                                <label className="form-label">Email ID</label>
                                <input type="email" onChange={onChangeHandle}
                                    className="form-control" name='email' value={formData.email} placeholder="Email ID" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" onChange={onChangeHandle}
                                    className="form-control" name='password' value={formData.password} placeholder="Password" />
                            </div>
                            <div className="mb-3">
                                <button type='submit' className='btn btn-primary'>Login</button>
                            </div>

                            <div className='text-primary ' >
                                <Link to={'/registration'}>Create a new account!</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login