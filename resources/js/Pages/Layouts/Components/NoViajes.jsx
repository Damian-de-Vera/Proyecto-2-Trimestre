import React from 'react';
import { Link } from '@inertiajs/react'


function NoViajes() {

    return (

        <div class="container">
            <div class="row ">
                <div class="col ">
                    <h1 class="">No tienes viajes</h1>
                    <Link href="/buscar" class='h3 '>¡Reserva uno!</Link>

                </div>
            </div>
        </div>

    )
}
export default NoViajes