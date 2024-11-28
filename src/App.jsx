import Header from "./navigation/Header.jsx";
import Mission from "./components/Mission.jsx";
import FeaturedTea from "./components/FeaturedTea.jsx";
import Locations from "./components/Location.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./navigation/Footer.jsx";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Mission />
                <FeaturedTea />
                <Locations />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
