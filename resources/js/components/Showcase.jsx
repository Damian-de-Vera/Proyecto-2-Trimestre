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
                        <h2>Environment Benefits</h2>
                        <p class="lead mb-0 bi bi-check-circle">
                            Control of Greenhouse gas emission
                        </p>
                        <p class="lead mb-0 bi bi-check-circle">
                            Best alternative for public transport
                        </p>
                        <p class="lead mb-0 bi bi-check-circle">
                            Prevent from traffic congestion
                        </p>
                    </div>
                </div>
                <div class="row g-0">
                    <div class="col-lg-6 text-white showcase-img showcase2">
                    </div>
                    <div class="col-lg-6 my-auto showcase-text">
                        <h2>Drivers Benefits</h2>
                        <p class="lead mb-0 bi bi-check-circle">
                            Save costs
                        </p>
                        <p class="lead mb-0 bi bi-check-circle">
                            Open to any route
                        </p>
                        <p class="lead mb-0 bi bi-check-circle">
                            Comfortable and pleasant trips guaranteed by the rating system
                        </p>
                    </div>
                </div>
                <div class="row g-0">
                    <div class="col-lg-6 order-lg-2 text-white showcase-img showcase3"
                    ></div>
                    <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Passengers Benefits</h2>
                        <p class="lead mb-0 bi bi-check-circle">
                            Less Travel cost
                        </p>
                        <p class="lead mb-0 bi bi-check-circle">
                            Passengers are insured
                        </p>
                        <p class="lead mb-0 bi bi-check-circle">
                            Choose your trip mates
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Showcase;

