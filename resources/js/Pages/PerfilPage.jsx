import Nav from '@/Pages/Layouts/Components/Partials/Nav'
import Footer from '@/Pages/Layouts/Components/Partials/Footer'
import Perfil from '@/Pages/Layouts/Components/Perfil'
//import Avatar from '@/Pages/Layouts/Components/Avatar'             <Avatar user={props.user} />


import 'bootstrap/dist/css/bootstrap.min.css';

export default function PerfilPage(props) {

    return (
        <div>
            <Nav user={props.user} />
            <Perfil user={props.user} userPerfil={props.userPerfil} userDiferente={props.userDiferente} ratings={props.ratings} />
            <Footer />
        </div>


    )

}