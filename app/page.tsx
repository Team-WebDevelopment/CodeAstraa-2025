import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Rewards from "./components/Rewards";
import About from "./pages/About";
import Landing from "./pages/Landing";
import ThemePage from "./pages/ThemePage";
export default function Home() {
    return (
        <>
            <Navbar />
            <Landing />
            <ThemePage />
            <About />
            <Rewards />
            <Footer />
        </>
    );
}
