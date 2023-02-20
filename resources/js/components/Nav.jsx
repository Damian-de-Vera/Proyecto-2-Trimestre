import React from 'react';
import ReactDOM from 'react-dom/client';
import Dropdown from 'react-bootstrap/Dropdown'
import { router } from '@inertiajs/react'

class Nav extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.logout);
        console.log(props.user);
    }



    render() {


        let user = this.props.user;
        const submit = (e) => {
            e.preventDefault();
            document.getElementById('logout-form').submit()
        }
        return (
            < nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3" >
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">MoviFP Sostenible</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item">
                                <a class="nav-link mx-2 active bi bi-house" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">

                                <a class="nav-link mx-2 bi bi-search" href="#"> Buscar</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-2 bi bi-car-front" href="#">Publicar un viaje</a>
                            </li>


                            {user == null &&
                                <div><li class="nav-item">
                                    <a class="nav-link mx-2 bi bi-door-open" href="/login">Iniciar sesión</a>
                                </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-2 bi bi-check-circle" href="/register">Registrarse</a>
                                    </li></div>
                            }
                            {user != null &&
                                <div>
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <div class="bg-transparent bi bi-person-circle">{this.props.user.name}</div>

                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item  > <a href="#" class=" bi bi-car-front">Mis viajes</a></Dropdown.Item>
                                            <Dropdown.Item  > <a href="#" class="  bi bi-chat" > Mensajes</a></Dropdown.Item>
                                            <Dropdown.Item  > <a href="#" class=" bi bi-credit-card" > Pagos</a></Dropdown.Item>
                                            <Dropdown.Item  > <a href="#" class=" bi bi-person-circle" > Perfil</a></Dropdown.Item>
                                            <Dropdown.Item  > <a class=" bi bi-door-closed" onClick={submit}>                                                Cerrar sesión</a>
                                            </Dropdown.Item>
                                            <form id="logout-form" action="/logout" method="POST" class="d-none">

                                            </form>

                                        </Dropdown.Menu>
                                    </Dropdown>

                                </div>
                            }







                        </ul>
                    </div>
                </div >
            </nav >
        );
    }
}

export default Nav;

