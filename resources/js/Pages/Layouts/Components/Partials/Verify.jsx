
import React from 'react';
import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'

function Login() {

    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const { errors } = usePage().props


    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/login', values)
    }
    return (

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Verify Your Email Address</div>

                        <div class="card-body">
                            @if (session('resent'))
                            <div class="alert alert-success" role="alert">
                                A fresh verification link has been sent to your email address.
                            </div>
                            @endif

                            Before proceeding, please check your email for a verification link.
                            If you did not receive the email
                            <form class="d-inline" method="POST" action="/verification.resend">
                                @csrf
                                <button type="submit" class="btn btn-link p-0 m-0 align-baseline">click here to request another</button>.
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

