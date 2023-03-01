import Nav from '@/Pages/Layouts/Components/Partials/Nav'
import TusViajes from '@/Pages/Layouts/Components/TusViajes'
import Footer from '@/Pages/Layouts/Components/Partials/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function TusViajesPage(props) {

    return (
        <div>
            <Nav user={props.user} />
            <TusViajes user={props.user} bookings={props.bookings} reserva={props.reserva} />
            <Footer />
        </div>


    )

}