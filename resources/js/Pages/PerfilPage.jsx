import Nav from '@/Pages/Layouts/Components/Partials/Nav'
import Footer from '@/Pages/Layouts/Components/Partials/Footer'
import Perfil from '@/Pages/Layouts/Components/Perfil'
//import Avatar from '@/Pages/Layouts/Components/Avatar'             <Avatar user={props.user} />


import 'bootstrap/dist/css/bootstrap.min.css';

export default function PerfilPage(props) {

    return (
        <div>
            <Nav user={props.user} />
            <Perfil user={props.user} userDiferente={props.userDiferente} />
            <Footer />
        </div>


    )

}