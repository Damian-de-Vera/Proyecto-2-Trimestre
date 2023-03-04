import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from '@inertiajs/react'

class Nav extends React.Component {

    constructor(props) {
        super(props);

    }



    render() {


        let user = this.props.user
        const src = 'storage/users-avatar/';



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
                                <Link href="/welcomereact" aria-current="page" class="nav-link mx-2 active bi bi-house"> Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/buscar" aria-current="page" class="nav-link mx-2 bi bi-search"> Buscar</Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/publicar" aria-current="page" class="nav-link mx-2 bi bi-car-front"> Publicar un viaje</Link>
                            </li>


                            {user == null &&
                                <div><li class="nav-item">
                                    <Link href="/loginReact" class='nav-link mx-2 bi bi-door-open'>Iniciar sesión</Link>

                                </li>
                                    <li class="nav-item">
                                        <Link href="/registerReact" class='nav-link mx-2 bi bi-check-circle'>Registrarse</Link>

                                    </li></div>
                            }
                            {user != null &&

                                <div>

                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <img src={src + user.avatar} alt=" Avatar" width='50px' height='50px' />
                                            <div class="bg-transparent bi bi-person-circle">{this.props.user.name}</div>

                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item  > <Link href="/misViajes" class=" bi bi-car-front">Mis viajes</Link></Dropdown.Item>
                                            <Dropdown.Item  >
                                                <Link href="/mensajes" class='bi bi-chat'>Mensajes</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item  > <a href="#" class=" bi bi-credit-card" > Pagos</a></Dropdown.Item>
                                            <Dropdown.Item  >
                                                <Link href="/perfil" class=' bi bi-person-circle'>Perfil</Link></Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link href="/logout" method="post" aria-current="page" className='bi bi-door-closed'> Log out</Link>
                                            </Dropdown.Item>
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

