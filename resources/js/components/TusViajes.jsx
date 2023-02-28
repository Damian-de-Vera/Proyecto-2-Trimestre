import React from 'react';


export default function TusViajes(props) {



    let bookings = props.bookings;
    console.log(props.bookings);
    return (

        <div>
            {bookings.map((booking, index) => {
                return (
                    <div key={index}>
                        <div class="card" style="width:400px" >
                            <img class="card-img-top" src="img_avatar1.png" alt="Card image" />
                            <div class="card-body">
                                <h3 class="card-title" >Origen: {booking.origin}</h3>
                                <p class="card-text" >Destino: {booking.destination}</p>
                                <p class="card-text">Fecha: {booking.date}</p>
                                <p class="card-text">Hora: {booking.hour}</p>
                                <p class="card-text">Asientos: {booking.seats}</p>
                                {/* <p class="card-text">Conductor: {booking.user.name}</p> */}
                                <hr />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

