import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Perfil from '@/components/Perfil'
import Avatar from '@/components/Avatar'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function PerfilPage(props) {

    return (
        <div>
            <Nav user={props.user} />
            <Avatar user={props.user} />
            <Perfil user={props.user} />
            <Footer />
        </div>


    )

}