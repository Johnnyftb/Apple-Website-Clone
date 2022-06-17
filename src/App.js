import { Navbar, Hero, Showcase, Footer } from "./components/index";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/utilities.css';
import './css/app.css';

const App = () => {

    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Showcase />
            <Footer />
        </div>
    )
}

export default App;