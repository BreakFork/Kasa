import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import Housing from '../pages/housing/Housing';
import About from '../pages/about/About';
import Error from '../pages/error/Error';

const Router = () => {
    return (
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/housing/:housingId" element={<Housing />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            </BrowserRouter>
    );
};

export default Router;