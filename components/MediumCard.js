import Image from "next/image";

function MediumCard({ image, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80 ">
        <Image
          className="rounded-xl"
          src={image}
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-gray-700 font-semibold">{title}</h3>
    </div>
  );
}

export default MediumCard;
