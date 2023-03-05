import React from 'react';
import { Link } from '@inertiajs/react'
import Card from 'react-bootstrap/Card';

function NoViajes() {

    return (

        <div class="container d-flex align-items-center justify-content-center">
            <div class="row  ">
                <div class="col ">

                    <Card.Img />
                    <Card.Body class="text-center ">
                        <Card.Title>  <Link href="/buscar" class='h3 fw-bold text-decoration-none text-black '>¡Reserva un viaje!</Link></Card.Title>
                        <Card.Text>
                            <img class="img-fluid rounded-circle mb-3" src="assets/img/ruta.png" alt="..." />
                        </Card.Text>

                    </Card.Body>






                </div>
            </div>
        </div>

    )
}
export default NoViajes