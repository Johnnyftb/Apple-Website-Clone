import { Navbar, Hero, Showcase } from "./components/index";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/utilities.css';
import './css/app.css';

const App = () => {

    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Showcase />
        </div>
    )
}

export default App;