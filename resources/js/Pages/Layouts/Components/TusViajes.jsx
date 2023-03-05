import React from 'react';
import { usePage } from '@inertiajs/react'

import CancelarReserva from '@/Pages/Layouts/Components/CancelarReserva';
import NoViajes from '@/Pages/Layouts/Components/NoViajes';
import Card from 'react-bootstrap/Card';

export default function TusViajes(props) {

    const { flash } = usePage().props

    let bookings = props.bookings;
    return (

        <div class="min-vh-100">
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


            {bookings.map((booking, index) => {
                return (

                    <div key={index}>
                        {
                            bookings[0].travel < 1 &&
                            <NoViajes />
                        }
                        <div class="container ">

                            <div class="row ">
                                {booking.travel.map((viaje, indice) => {

                                    console.log(viaje);
                                    return (

                                        <div class="col-3  my-3" key={indice}>
                                            <Card style={{ width: '20rem' }}>
                                                <Card.Body>
                                                    <Card.Title>Origen:{viaje.origin}</Card.Title>
                                                    <Card.Text>Destino:{viaje.destination}</Card.Text>
                                                    <Card.Text> Fecha: {viaje.date}</Card.Text>
                                                    <Card.Text> Hora: {viaje.hour}</Card.Text>
                                                    <Card.Text> Asientos Disponibles: {viaje.seats}</Card.Text>
                                                    <Card.Text> Precio: {viaje.price}€</Card.Text>
                                                    <Card.Text> Conductor: {viaje.user_id}</Card.Text>
                                                    {/* <Card.Text> Conductor: {booking.user.name}</Card.Text> */}
                                                    <CancelarReserva props={props.reserva[indice]} />
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

