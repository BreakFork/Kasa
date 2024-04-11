import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='main-wrapper'>
            <header className="header">
                <Navbar />
                <Banner />
            </header>
            <Gallery />
            <Footer />
        </div>
    );
};

export default Home;