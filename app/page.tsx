import Navbar from "./components/Navbar";
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
    </>
  );
}
