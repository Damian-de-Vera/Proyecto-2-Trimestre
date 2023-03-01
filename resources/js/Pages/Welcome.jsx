import Nav from '@/Pages/Layouts/Components/Partials/Nav'
import Header from '@/Pages/Layouts/Components/Partials/Header'
import IconsGrid from '@/Pages/Layouts/Components/Partials/IconsGrid'
import Showcase from '@/Pages/Layouts/Components/Partials/Showcase'
import Testimonials from '@/Pages/Layouts/Components/Partials/Testimonials'
import CallToAction from '@/Pages/Layouts/Components/Partials/CallToAction'
import Footer from '@/Pages/Layouts/Components/Partials/Footer'



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