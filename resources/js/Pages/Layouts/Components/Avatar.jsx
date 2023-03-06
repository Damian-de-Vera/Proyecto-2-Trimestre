import React from 'react';
import { useForm } from '@inertiajs/react'
import { router, usePage } from '@inertiajs/react'

function Avatar(props) {
    const { errors } = usePage().props
    const { flash } = usePage().props


    const { data, setData } = useForm({

        avatar: null,

    })
    const src = 'storage/assets/img/';

    console.log(props.props.user);

    function previewFile(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        console.log(file.name)
        reader.readAsText(file);

        setData({ avatar: file });

        reader.onerror = () => {
            console.log('fileerror');
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/cambiarAvatar', data)
    }
    return (

        <div class="container">
            {flash.errormessage && (
                <div class="alert alert-danger py-3" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                    </svg>
                    <div>
                        {flash.errormessage}

                    </div>
                </div>
            )}
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Cambiar Avatar</div>
                        <div class="card-body  text-center ">
                             {props.props.user.avatar == 'avatar.png'
                                            ?<img src= 'assets/img/avatar.png' alt=" xd" class="rounded" height='50px' />:
                                            <img src={src + props.props.user.avatar} alt=" Avatar" class="rounded" height='50px' />

                                        }
                            <form method="POST" onSubmit={handleSubmit} class="my-4">
                                <div class="row mb-3">
                                    <label for="avatar" class="col-md-4 col-form-label text-md-end">Cambiar imagen de perfil</label>
                                    <div class="col-md-6">
                                        <input id="avatar" type="file" enctype="multipart/form-data" class="form-control" onChange={previewFile} required />
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

