import Image from "next/image";
import image from "../public/images/image.jpg";

function Body() {
  return (
    <div className="h-full top-0 mt-2">
      <div className="flex w-full h-132 justify-center px-2 top-0">
        <div className="flex justify-left mt-8 mr-1 w-full h-128 bg-slate-500"></div>
        <div className="flex justify-right mt-8 ml-1 w-full h-128 bg-slate-500"></div>
      </div>
      <div className="flex w-full h-132 justify-center px-2 top-0">
        <div className="flex justify-left mt-8 mr-1 w-full h-128 bg-slate-500"></div>
        <div className="flex justify-right mt-8 ml-1 w-full h-128 bg-slate-500"></div>
      </div>
    </div>
  );
}

export default Body;
