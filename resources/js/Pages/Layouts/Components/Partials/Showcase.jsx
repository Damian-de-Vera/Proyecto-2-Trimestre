import React from 'react';
import ReactDOM from 'react-dom/client';

function Showcase() {
    const submit = (e) => {
        e.preventDefault()
        //console.log(data)
        post(route('posts.store'))
    }
    return (
        <section class="showcase">
            <div class="container-fluid p-0">
                <div class="row g-0">
                    <div class="col-lg-6 order-lg-2 text-white showcase-img showcase1"
                    ></div>
                    <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Beneficios ambientales</h2>
                        <p class="lead mb-0 bi bi-check-circle">
                        Control de emisión de gases de efecto invernadero
                        </p>
                        <p class="lead mb-0 bi bi-check-circle">
                        La mejor alternativa para el transporte público.
                        </p>
                        <p class="lead mb-0 bi bi-check-circle">
                        Evitar la congestión del tráfico
                        </p>
                    </div>
                </div>
                <div class="row g-0">
                    <div class="col-lg-6 text-white showcase-img showcase2">
                    </div>
                    <div class="col-lg-6 my-auto showcase-text">
                        <h2>Beneficios de los conductores</h2>
                        <p class="lead mb-0 bi bi-check-circle">
                        Ahorre costos
                        </p>
                        <p class="lead mb-0 bi bi-check-circle">
                        Abierto a cualquier ruta
                        </p>
                        <p class="lead mb-0 bi bi-check-circle">
                        Viajes cómodos y placenteros garantizados por el sistema de calificación
                        </p>
                    </div>
                </div>
                <div class="row g-0">
                    <div class="col-lg-6 order-lg-2 text-white showcase-img showcase3"
                    ></div>
                    <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Beneficios para pasajeros</h2>
                        <p class="lead mb-0 bi bi-check-circle">
                        Menos costo de viaje
                        </p>
                        <p class="lead mb-0 bi bi-check-circle">
                        Los pasajeros estan asegurados
                        </p>
                        <p class="lead mb-0 bi bi-check-circle">
                        Elige tus compañeros de viaje
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Showcase;

