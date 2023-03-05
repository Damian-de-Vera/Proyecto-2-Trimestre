import React from 'react';
import ReactDOM from 'react-dom/client';

function IconsGrid() {

    const submit = (e) => {
        e.preventDefault()
        //console.log(data)
        post(route('posts.store'))
    }
    return (

        <section class="features-icons bg-light text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi bi-search m-auto text-primary"></i></div>
                            <h3>Busca un viaje</h3>
                            <p class="lead mb-0">Elija su viaje simplemente diciendo su rumbo y dejando puntos con el tiempo deseado</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi bi-calendar2-check m-auto text-primary"></i></div>
                            <h3>Reserve su viaje</h3>
                            <p class="lead mb-0">Reserve su viaje con un solo toque y podrá comunicarse con los conductores para obtener información detallada</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi bi-car-front m-auto text-primary"></i></div>
                            <h3>Viajar juntos</h3>
                            <p class="lead mb-0">Disfrute de su viaje y revise su experiencia de viaje</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IconsGrid;

