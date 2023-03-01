import Nav from '@/Pages/Layouts/Components/Nav'
import Header from '@/Pages/Layouts/Components/Header'
import IconsGrid from '@/Pages/Layouts/Components/IconsGrid'
import Showcase from '@/Pages/Layouts/Components/Showcase'
import Testimonials from '@/Pages/Layouts/Components/Testimonials'
import CallToAction from '@/Pages/Layouts/Components/CallToAction'
import Footer from '@/Pages/Layouts/Components/Footer'



import 'bootstrap/dist/css/bootstrap.min.css';

export default function Welcome(props) {

    return (
        <div>
            <Nav user={props.user} />
            <Header />
            <IconsGrid />
            <Showcase />
            <Testimonials />
            <CallToAction />
            <Footer />
        </div>


    )

}