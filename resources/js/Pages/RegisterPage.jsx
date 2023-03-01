import Nav from '@/Pages/Layouts/Components/Partials/Nav'
import Footer from '@/Pages/Layouts/Components/Partials/Footer'
import Register from '@/Pages/Layouts/Components/Partials/Auth/Register'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function RegisterPage() {

    return (
        <div>
            <Nav />
            <Register />
            <Footer />
        </div>


    )

}