import React from 'react';
import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'

function Avatar(props) {
    const { errors } = usePage().props

    const [values, setForm] = useState({
        avatar: ""
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
        router.post('/cambiarAvatar', values)
    }
    return (

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Cambiar Avatar</div>

                        <div class="card-body">

                            <form method="POST" onSubmit={handleSubmit}>
                                <div class="row mb-3">
                                    <label for="avatar" class="col-md-4 col-form-label text-md-end">Cambiar imagen de perfil</label>
                                    <img src="storage/users-avatar/ede0c52d-fbb6-414c-8467-2c9ea6a018eb.png" alt="Avatar" />
                                    <div class="col-md-6">
                                        <input id="avatar" type="file" class="form-control" value={values.avatar} onChange={handleChange} required />
                                        {errors.avatar && <div><strong>{errors.avatar}</strong></div>}

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
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Avatar;

