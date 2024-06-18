import Image from "next/image";
import image from "../public/images/image.jpg";
import Link from "next/link";

function Introduction() {
  return (
    <div className="relative w-full h-200">
      <Image src={image} className="w-full h-full" alt="Image1" />
      <div className="w-128 h-full absolute top-0 left-0 justify-left mt-52 ml-32">
        <h1 className="text-5xl font-black text-black justify-left">
          Welcome, <h2 className="pl-32 pt-2">NerTURS</h2>
        </h1>
        <h3 className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h3>
        <Link href="/about">
          <button className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            About Us
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Introduction;
