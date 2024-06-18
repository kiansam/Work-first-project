// import HeaderItem from "./HeaderItem";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md h-20">
      {/* Left */}
      <Link href="/">
        <div className="flex items-center">
          <div className="flex ml-2 items-center rounded-full font-black">
            <h1 className="text-2xl text-blue-600">NerTURS</h1>
          </div>
        </div>
      </Link>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-2 md:space-x-2">
          {/* <HeaderItem Item>About Us</HeaderItem> */}
          {/* <button className="btn flex items-center cursor-pointer md:px-5 lg:px-6 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
            <h3 className="h-5 text-center text-gray-500 sm:h-7 mx-auto group-hover:text-blue-500">
              About Us
            </h3>
          </button>
          <button className="btn flex items-center cursor-pointer md:px-5 lg:px-6 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
            <h3 className="h-5 text-center text-gray-500 sm:h-7 mx-auto group-hover:text-blue-500">
              Features & Services
            </h3>
          </button>
          <button className="btn flex items-center cursor-pointer md:px-5 lg:px-6 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
            <h3 className="h-5 text-center text-gray-500 sm:h-7 mx-auto group-hover:text-blue-500">
              Our Team
            </h3>
          </button>
          <button className="btn flex items-center cursor-pointer md:px-5 lg:px-6 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
            <h3 className="h-5 text-center text-gray-500 sm:h-7 mx-auto group-hover:text-blue-500">
              Blog
            </h3>
          </button>
          <button className="btn flex items-center cursor-pointer md:px-5 lg:px-6 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
            <h3 className="h-5 text-center text-gray-500 sm:h-7 mx-auto group-hover:text-blue-500">
              Contact Us
            </h3>
          </button> */}
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end sm:text-sm align-middle">
        <div className="flex items-center lg:mr-12">
          <Link href="/about">
            <button className="btn flex items-center cursor-pointer md:px-2 lg:px-6 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
              <h3 className="h-5 text-center text-gray-600 sm:h-7 mx-auto group-hover:text-blue-500">
                About Us
              </h3>
            </button>
          </Link>
          <button className="btn flex items-center cursor-pointer md:px-2 lg:px-6 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
            <h3 className="h-5 text-center text-gray-600 sm:h-7 mx-auto group-hover:text-blue-500">
              <Link href="/featuresandservices"> Features & Services</Link>
            </h3>
          </button>
          <button className="btn flex items-center cursor-pointer md:px-2 lg:px-6 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
            <h3 className="h-5 text-center text-gray-600 sm:h-7 mx-auto group-hover:text-blue-500">
              Our Team
            </h3>
          </button>
          <button className="btn flex items-center cursor-pointer md:px-2 lg:px-6 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
            <h3 className="h-5 text-center text-gray-600 sm:h-7 mx-auto group-hover:text-blue-500">
              Blog
            </h3>
          </button>
          <button className="btn flex items-center cursor-pointer md:px-2 lg:px-6 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
            <h3 className="h-5 text-center text-gray-600 sm:h-7 mx-auto group-hover:text-blue-500">
              Contact Us
            </h3>
          </button>
        </div>
        <div className="btn align-middle text-black bg-white border-2 border-black flex items-center cursor-pointer lg:px-6 sm:h-14 rounded-xl active:border-b-2 hover:bg-black hover:text-white duration-200">
          <h3 className="h-1 text-center sm:h-7 mx-auto">Sign In / Sign Up</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
