import React from 'react';
import { Inertia } from '@inertiajs/inertia'

import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'


function Register() {
    const { errors } = usePage().props

    const [values, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setForm(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/register', values)
    }



    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Register</div>

                        <div class="card-body">

                            <form method="POST" onSubmit={handleSubmit}>
                                <div class="row mb-3">
                                    <label for="name" class="col-md-4 col-form-label text-md-end">Name</label>

                                    <div class="col-md-6">
                                        <input id="name" type="text" class="form-control" value={values.name} onChange={handleChange} autocomplete="name" autofocus />
                                        {errors.name && <div><strong>{errors.name}</strong></div>}




                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="email" class="col-md-4 col-form-label text-md-end">Email Address</label>

                                    <div class="col-md-6">
                                        <input id="email" type="email" class="form-control " name="email" value={values.email} onChange={handleChange} autocomplete="email" />
                                        {errors.email && <div><strong>{errors.email}</strong></div>}




                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>

                                    <div class="col-md-6">

                                        <input id="password" value={values.password} onChange={handleChange} type="password" name="password" class="form-control" autocomplete="new-password" />
                                        {errors.password && <div><strong>{errors.password}</strong></div>}



                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="password_confirmation" class="col-md-4 col-form-label text-md-end">Confirm Password</label>

                                    <div class="col-md-6">
                                        <input id="password_confirmation" value={values.password_confirmation} onChange={handleChange} type="password" class="form-control" name="password_confirmation" autocomplete="new-password" />
                                        {errors.password_confirmation && <div><strong>{errors.password_confirmation}</strong></div>}

                                    </div>
                                </div>

                                <div class="row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Register;

