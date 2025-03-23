import Image from "next/image";
import SpellImg from '../../public/selectyourspell.png';

export default function SelectYourSpell() {
    return (
        <Image src={SpellImg} className="mt-16" alt="select your spell" width={934} height={260} />
    )
}
