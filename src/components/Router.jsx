import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './pages/Home';
import Housing from './pages/Housing';
import About from './pages/About';
import Error from './pages/Error';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/housing/:housingId" element={<Housing />} />
                    <Route path="/housing/*" element={<Error />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Router;