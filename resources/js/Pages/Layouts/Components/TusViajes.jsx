import React from 'react';
import { usePage } from '@inertiajs/react'

import CancelarReserva from '@/Pages/Layouts/Components/CancelarReserva';
import NoViajes from '@/Pages/Layouts/Components/NoViajes';


export default function TusViajes(props) {

    const { flash } = usePage().props

    let bookings = props.bookings;
    console.log(bookings[0].travel);
    return (

        <div>
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


                                    return (

                                        <div class="col-3  my-3" key={indice}>
                                            <div class="card " >
                                                <div class="card-body">
                                                    <h3 class="card-title" >Origen:{viaje.origin}</h3>
                                                    <p class="card-text" >Destino:{viaje.destination}</p>
                                                    <p class="card-text">Fecha:{viaje.date} </p>
                                                    <p class="card-text">Hora: {viaje.hour} </p>
                                                    <p class="card-text">Asientos: {viaje.seats} </p>
                                                    <p class="card-text">Precio: {viaje.price}€</p>
                                                    <p class="card-text">Conductor: {viaje.user_id}</p>

                                                    {/* <p class="card-text">Conductor: {booking.user.name}</p> */}
                                                    <CancelarReserva props={props.reserva[indice]} />


                                                </div>
                                            </div>

                                        </div>
                                    );
                                })}  </div></div>

                    </div>
                );
            })}
        </div>
    );
}

