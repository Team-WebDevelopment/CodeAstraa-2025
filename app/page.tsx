import Rewards from "./components/Rewards";
import About from "./pages/About";
import Landing from "./pages/Landing";
import ThemePage from "./pages/ThemePage";
import Timeline from "./pages/Timeline";
export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Timeline />
      <ThemePage />
      <Rewards />
    </>
  );
}
