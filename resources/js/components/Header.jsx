import React from 'react';
import ReactDOM from 'react-dom/client';

function Header() {
    const submit = (e) => {
        e.preventDefault()
        //console.log(data)
        post(route('posts.store'))
    }
    return (
        <header class="masthead">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-10">
                        <div class=" text-center text-white">

                            <h1 class=" mb-5"> ¿Adonde quieres ir?</h1>

                            <form class="form-subscribe" id="contactForm">
                                <div class="row">

                                    <div class="col">
                                        <input class="form-control form-control-lg" id="departure" name="departure" type="text" placeholder="Leaving from" />
                                        <div class="invalid-feedback">
                                            Departure is required
                                        </div>
                                        <div class="invalid-feedback ">
                                            Departure is not valid.
                                        </div>
                                    </div>
                                    <div class="col" >
                                        <input class="form-control form-control-lg" id="destination" name="destination" type="text" placeholder="Going to" />
                                        <div class="invalid-feedback ">
                                            Destination is required.
                                        </div>
                                        <div class="invalid-feedback ">
                                            Destination is not valid.
                                        </div>
                                    </div>
                                    <div class="col" >
                                        <input class="form-control form-control-lg" id="date" name="date" type="date" />
                                        <div class="invalid-feedback">
                                            Date is required.
                                        </div>
                                        <div class="invalid-feedback ">
                                            Date is not valid.
                                        </div>
                                    </div>

                                    <div class="col-auto"><button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Enviar</button></div>

                                </div>

                                <div class="row" >
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

