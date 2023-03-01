import React from 'react';

import CancelarReserva from '@/Pages/Layouts/CancelarReserva';


export default function TusViajes(props) {


    let bookings = props.bookings;
    console.log(bookings);
    return (

        <div>
            {bookings.map((booking, index) => {
                return (
                    <div key={index}>
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
                                                    <p class="card-text">Conductor: {viaje.user_id}</p>

                                                    {/* <p class="card-text">Conductor: {booking.user.name}</p> */}
                                                    <CancelarReserva id={props.reserva[indice].id
                                                    } />


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

