import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function TusViajesPage(props) {

    return (
        <div>
            <Nav user={props.user} />
            <TusViajesPage   />
            <Footer />
        </div>


    )

}