import Nav from '@/components/Nav'
import Header from '@/components/Header'
import IconsGrid from '@/components/IconsGrid'
import Showcase from '@/components/Showcase'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'



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