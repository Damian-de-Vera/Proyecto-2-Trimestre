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
                            <h3>Search a ride</h3>
                            <p class="lead mb-0">Pick your ride simply saying your heading and leaving points with desired time</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi bi-calendar2-check m-auto text-primary"></i></div>
                            <h3>Book your ride</h3>
                            <p class="lead mb-0">Book your ride at one tap and you can communicate with drivers for detailed info</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi bi-car-front m-auto text-primary"></i></div>
                            <h3>Travel together</h3>
                            <p class="lead mb-0">Enjoy your ride and review for your ride experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IconsGrid;

