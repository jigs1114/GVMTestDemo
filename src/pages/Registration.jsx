import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { toast } from 'react-toastify'

function Registration() {
    const initialValue = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [formData, setFormData] = useState(initialValue)

    const onChangeHandle = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, confirmPassword } = formData;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (name.trim() === "") {
            toast.error("Name is required!");
            return;
        }
        if (email.trim() === "") {
            toast.error("Email id is required!");
            return;
        }
        if (!email.match(emailRegex)) {
            toast.error("Invalid email id!");
            return;
        }
        if (password.trim() === "") {
            toast.error("Password is required!");
            return;
        }
        if (confirmPassword.trim() === "") {
            toast.error("Confirm Password is required!");
            return;
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        let usersList = JSON.parse(localStorage.getItem('userslist')) || [];
        usersList.push({ name, email, password });

        localStorage.setItem('userslist', JSON.stringify(usersList));

        setFormData({ name: "", email: "", password: "", confirmPassword: "" });

        toast.success("User registered successfully!");
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='my-5 mx-auto col-lg-6 col-10 offset-lg-3 offset-1 border p-3 rounded'>
                        <form onSubmit={onHandleSubmit}>
                            <div className='mb-3 fs-3 fw-bold'>Login</div>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" onChange={onChangeHandle}
                                    className="form-control" name='name' value={formData.name} placeholder="Name" />
                            </div>
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
                                <label className="form-label">Password</label>
                                <input type="password" onChange={onChangeHandle}
                                    className="form-control" name='confirmPassword' value={formData.confirmPassword} placeholder="Confirm Password" />
                            </div>
                            <div className="mb-3">
                                <button type='submit' className='btn btn-primary'>Registration</button>
                            </div>
                            <div className='text-primary ' >
                                <Link to={'/'}>Already have an account!</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration