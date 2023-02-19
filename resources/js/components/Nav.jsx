import React from 'react';
import ReactDOM from 'react-dom/client';

function Nav() {
    const submit = (e) => {
        e.preventDefault()
        //console.log(data)
        post(route('posts.store'))
    }
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
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

                        <li class="nav-item">
                            <a class="nav-link mx-2 bi bi-door-open" href="/login">Iniciar sesión</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-2 bi bi-check-circle" href="/register">Registrarse</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link mx-2 dropdown-toggle bi bi-person-circle" href="#" id="navbarDropdownMenuLink"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">

                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item bi bi-car-front" href="#"> Mis viajes</a></li>
                                <li><a class="dropdown-item bi bi-chat" href="#"> Mensajes</a></li>
                                <li><a class="dropdown-item bi bi-credit-card" href="#"> Pagos</a></li>
                                <li><a class="dropdown-item bi bi-person-circle" href="#"> Perfil</a></li>
                                <li><a class="dropdown-item bi bi-door-closed" href="{{ route('logout') }}" onclick="event.preventDefault();
                                        document.getElementById('logout-form').submit();">
                                    Cerrar sesión
                                </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">

                                    </form>
                                </li>
                            </ul>
                        </li>



                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;

