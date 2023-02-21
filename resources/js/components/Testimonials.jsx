import React from 'react';
import ReactDOM from 'react-dom/client';

function Testimonials() {
    const submit = (e) => {
        e.preventDefault()
        //console.log(data)
        post(route('posts.store'))
    }
    return (
        <section class="testimonials text-center bg-light">
            <div class="container">
                <h2 class="mb-5">What people are saying...</h2>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img class="img-fluid rounded-circle mb-3" src="assets/img/testimonials-1.jpg" alt="..." />
                            <h5>Margarita E.</h5>
                            <p class="font-weight-light mb-0">This is fantastic! Thanks so much guys!</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img class="img-fluid rounded-circle mb-3" src="assets/img/testimonials-2.jpg" alt="..." />
                            <h5>Alfredo S.</h5>
                            <p class="font-weight-light mb-0">
                                MoviFP is amazing. I\'ve been using it to share my car and it works really well.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img class="img-fluid rounded-circle mb-3" src="assets/img/testimonials-3.jpg" alt="..." />
                            <h5>Sara W.</h5>
                            <p class="font-weight-light mb-0">
                                Thanks so much for making these free resources available to us and for taking care of the environment!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;

