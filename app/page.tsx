import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Rewards from "./components/Rewards";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Timeline from "./pages/Timeline";
export default function Home() {
    return (
        <>
            <Navbar />
            <Landing />
            <About />
            <Timeline />
            <Rewards />
            <Footer />
        </>
    );
}
