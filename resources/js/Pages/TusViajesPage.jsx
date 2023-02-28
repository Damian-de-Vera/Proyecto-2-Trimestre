import Nav from '@/components/Nav'
import TusViajes from '@/components/TusViajes'
import Footer from '@/components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function TusViajesPage(props) {

    return (
        <div>
            <Nav user={props.user} />
            <TusViajes user={props.user} bookings={props.bookings}  />
            <Footer />
        </div>


    )

}