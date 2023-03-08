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


    function previewFile(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
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

            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card-body  text-center ">
                        {props.props.user.avatar == 'avatar.png'
                            ? <img src='assets/img/avatar.png' alt=" xd" class="rounded" height='50px' /> :
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

    );
}

export default Avatar;

