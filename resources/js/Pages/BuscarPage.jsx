import Nav from '@/Pages/Layouts/Components/Nav';
import Footer from '@/Pages/Layouts/Components/Footer';
import Buscar from '@/Pages/Layouts/Buscar';
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