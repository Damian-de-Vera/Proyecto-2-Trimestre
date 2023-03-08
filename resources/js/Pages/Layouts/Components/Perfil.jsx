import React from 'react';
import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'
import CardUser from '@/Pages/Layouts/Components/CardUser';
import Avatar from '@/Pages/Layouts/Components/Avatar';


function Perfil(props) {
    const { errors } = usePage().props
    const { flash } = usePage().props

    console.log(props)
    const [values, setForm] = useState({
        name: props.user.name,
        email: props.user.email,
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
        router.post('/updateUser', values)
    }
    return (

        <div class="container min-vh-100">
            {flash.message && (
                <div class="alert alert-success d-flex align-items-center py-3" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <div>
                        {flash.message}
                    </div>
                </div>
            )}

            {props.userDiferente == null &&
                <div class="row ">
                    <div class="col ">
                        <div class="card my-4">
                            <div class="card-header">Actualizar datos</div>
                            <div class="card-body">
                                <form method="POST" onSubmit={handleSubmit}>
                                    <div class="row mb-3">
                                        <label for="name" class="col-md-4 col-form-label text-md-end">Nombre</label>
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
                                        <label for="password" class="col-md-4 col-form-label text-md-end">Contraseña</label>
                                        <div class="col-md-6">
                                            <input id="password" value={values.password} onChange={handleChange} type="password" name="password" class="form-control" required autocomplete="new-password" />
                                            {errors.password && <div><strong>{errors.password}</strong></div>}
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="password_confirmation" class="col-md-4 col-form-label text-md-end">Confirmar Contraseña</label>
                                        <div class="col-md-6">
                                            <input id="password_confirmation" value={values.password_confirmation} onChange={handleChange} type="password" class="form-control" name="password_confirmation" required autocomplete="new-password" />
                                            {errors.password_confirmation && <div><strong>{errors.password_confirmation}</strong></div>}
                                        </div>
                                    </div>

                                    <div class="row mb-0">
                                        <div class="col-md-6 offset-md-4">
                                            <button type="submit" class="btn btn-primary">
                                                Actualizar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <Avatar props={props} />
                            </div>
                        </div>
                    </div>
                </div>}
            {props.userDiferente == true &&
                <CardUser props={props} />
            }
        </div>
    );
}

export default Perfil;

