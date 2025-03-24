import Image from "next/image";

export default function Timeline() {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: "url('/bg.png')" }}
        >
            <div className="flex items-center justify-center mt-6">
                <img
                    src="/timelinelogo.png"
                    alt="Timeline Logo"
                    className="h-30 md:h-fit"
                />
            </div>
            <div className="flex items-center min-h-screen justify-center">
                <img src="/timelinecalander.png" className="mx-18 mb-12 h-fit w-[120vh]" />
            </div>
        </section>
    );
}
