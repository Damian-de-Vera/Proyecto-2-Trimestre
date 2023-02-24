import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Publicar from '@/components/Publicar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PublicarPage(props) {

    return (
        <div>
            <Nav user={props.user} />
            <Publicar user={props.user} />
            <Footer />
        </div>


    )

}