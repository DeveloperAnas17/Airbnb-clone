import Image from "next/image";

function MediumCard({ image, title }) {
  return (
    <div className="relative h-80 w-80">
      {/* <img src={image} alt="" /> */}
      <Image src={image} layout="fill" className="rounded-lg" />

      {/* <Image src={img} layout="fll" /> */}
      <h1>{title}</h1>
      <h2>Hello</h2>
    </div>
  );
}

export default MediumCard;
