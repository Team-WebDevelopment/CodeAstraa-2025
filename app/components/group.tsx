import Image from "next/image";
import SpellImg from "../../public/selectyourspell.png";

export default function SelectYourSpell() {
  return (
    <Image src={SpellImg} alt="select your spell" width={734} height={260} />
  );
}
