import React from 'react';
import { useState } from 'react'
import { usePage } from '@inertiajs/react'
import Button from 'react-bootstrap/Button';

import Reservar from '@/Pages/Layouts/Components/Reservar';
import LinkAPerfil from '@/Pages/Layouts/Components/LinkAPerfil';
import Card from 'react-bootstrap/Card';
function ReservarModal(props) {

    const { flash } = usePage().props
    return (
        <div className=" min-vh-100 my-4 container" >
            <Card>
                <Card.Body>
                    <Card.Title className='bg-gray text-center'>Confirmar Reserva</Card.Title>

                </Card.Body>
            </Card>
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
            <div class="row  my-3"> <Card>
                <Card.Body>
                    <Card.Title className='bg-gray'>{props.travel.origin} -{'>'} {props.travel.destination}</Card.Title>
                    <hr className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3 border-bottom' />
                    <Card.Text className="bi bi-calendar"> Fecha: {props.travel.date}</Card.Text>
                    <Card.Text className="bi bi-clock"> Hora: {props.travel.hour}</Card.Text>
                    <Card.Text className="bi bi-people-fill"> Asientos Disponibles: {props.travel.seats}</Card.Text>
                    <Card.Text className="bi bi-currency-euro"> Precio: {props.travel.price}</Card.Text>
                    <LinkAPerfil props={props.travel} />
                    <Reservar conductor={props.conductor} travel={props.travel} user={props.user} />


                </Card.Body>
            </Card></div>
        </div>


    )
}
export default ReservarModal