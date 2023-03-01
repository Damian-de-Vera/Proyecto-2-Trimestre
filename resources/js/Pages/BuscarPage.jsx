import Nav from '@/Pages/Layouts/Components/Partials/Nav';
import Footer from '@/Pages/Layouts/Components/Partials/Footer';
import Buscar from '@/Pages/Layouts/Components/Buscar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PublicarPage(props) {

    return (
        <div>
            <Nav user={props.user} />
            <Buscar user={props.user} travel={props.travel} />
            <Footer />
        </div>
    )

}