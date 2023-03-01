import Nav from '@/Pages/Layouts/Components/Nav'
import Footer from '@/Pages/Layouts/Components/Footer'
import Perfil from '@/Pages/Layouts/Perfil'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function PerfilPage(props) {

    return (
        <div>
            <Nav user={props.user} />
            <Perfil user={props.user} />
            <Footer />
        </div>


    )

}