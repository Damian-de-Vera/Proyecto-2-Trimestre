import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Buscar from '@/components/Buscar';
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