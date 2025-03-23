import Image from "next/image";
import SpellImg from '../../public/prizes.png';

export default function PrizeLogo() {
    return (
        <Image src={SpellImg} alt="select your spell" width={734} height={260} />
    )
}

