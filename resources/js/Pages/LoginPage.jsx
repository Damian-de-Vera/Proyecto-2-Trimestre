import Nav from '@/Pages/Layouts/Components/Partials/Nav'
import Footer from '@/Pages/Layouts/Components/Partials/Footer'
import Login from '@/Pages/Layouts/Components/Partials/Auth/Login'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginPage() {

    return (
        <div>
            <Nav />
            <Login />
            <Footer />
        </div>


    )

}