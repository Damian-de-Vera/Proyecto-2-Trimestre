import React from 'react';
import ReactDOM from 'react-dom/client';

function CallToAction() {
    const submit = (e) => {
        e.preventDefault()
        //console.log(data)
        post(route('posts.store'))
    }
    return (
        <section class="call-to-action text-white text-center" id="signup">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <h2 class="mb-4">Ready to get started?</h2>

                        <form class="form-subscribe" id="contactFormFooter">

                            <div class="row">
                                <a href="{{ route('register') }}" class="btn btn-primary btn-lg" role="button">Sign up now!</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;

