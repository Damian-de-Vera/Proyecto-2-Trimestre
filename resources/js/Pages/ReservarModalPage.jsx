import Nav from '@/Pages/Layouts/Components/Partials/Nav'
import Footer from '@/Pages/Layouts/Components/Partials/Footer'
import ReservarModal from './Layouts/Components/ReservarModal';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function ReservarModalPage(props) {

    console.log(props.user)
    return (
        <div>
            <Nav user={props.user} />
            <ReservarModal travel={props.travel} conductor={props.conductor} user={props.user} />
            <Footer />
        </div>


    )

}