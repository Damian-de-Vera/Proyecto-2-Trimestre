import React from 'react';

import { useState } from 'react'
import { router } from '@inertiajs/react'

function LinkAPerfil(props) {
    const [values] = useState({
        user_id: props.props.user_id,
    })
    console.log(props.props.user_id);
    function handleSubmit(e) {
        e.preventDefault()
        router.get('/perfilUser', values)
    }
    return (

        <form onSubmit={handleSubmit}>
            <input id="user_id" type="hidden" value={values.user_id} name="user_id" />
            <button type="submit" class="btn btn-outline-secondary bi bi-person-circle"> Conductor: {props.props.user.name}</button>
        </form>

    )
}
export default LinkAPerfil