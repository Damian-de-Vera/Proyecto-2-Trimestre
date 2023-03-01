import Nav from '@/Pages/Layouts/Components/Nav';
import Footer from '@/Pages/Layouts/Components/Footer';
import Publicar from '@/Pages/Layouts/Publicar';
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