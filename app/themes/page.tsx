"use client";
import React from "react";
import ThemeCard from "../components/ThemeCard";
import { themes } from "../../public/Themes";
import SelectYourSpell from "../components/group";

export default function ThemePage() {
    return (
        <section
            id="themes"
            className="min-h-screen md:h-screen flex flex-col items-center bg-cover bg-center relative overflow-hidden p-3  justify-center"
            style={{ backgroundImage: "url('bg.png')" }}
        >
            <SelectYourSpell />
            <div className="themes grid grid-cols-2 gap-10 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {themes.map((data) => (
                    <ThemeCard
                        key={data.id}
                        title={data.title}
                        image={data.image}
                        link={data.link}
                    />
                ))}
            </div>
        </section>
    );
}
