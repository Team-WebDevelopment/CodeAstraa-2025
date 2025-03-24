import Image from "next/image";

export default function Timeline() {
    return (
        <div className="relative">
            <img src="/nbg2.png" className="absolute inset-0 w-screen h-screen" />
            <section
                id="about"
                className="min-h-screen h-screen flex flex-col bg-cover bg-center relative overflow-hidden"
            >
                <div className="flex items-center justify-center mt-3">
                    <img
                        src="/timelinelogo.png"
                        alt="Timeline Logo"
                        className="h-30 md:h-fit"
                    />
                </div>
                <div className="flex items-center  justify-center">
                    <img
                        src="/timelinecalander.png"
                        className="mx-18 mb-12 h-fit w-[120vh]"
                    />
                </div>
            </section>
        </div>
    );
}
