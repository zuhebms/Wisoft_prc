// eslint-disable-next-line react/prop-types
export default function Hero({children}) {
  return (
    <div className="md:mx-auto min-h-screen text-black  pt-44 w-full mx-auto bg-[url('./assets/banner_image.d646f3c.jpg')] bg-cover max-sm:bg-cover max-md:bg-cover max-lg:bg-cover bg-no-repeat">
      <h1 className="max-sm:text-3xl container mx-auto text-6xl text-center font-bold tracking-wider -mt-10">
        Increase Your Reach with Social <br />
        Media <br /> Services in Dubai
      </h1>
      <p className=" max-sm:text-sm max-sm:px-6 px-6 text-xl text-center my-3">
        Boost your growth with one of Dubai&apos;s top social media agencies,
        offering over 14 years of Social Media <br />
        Marketing expertise
      </p>
      <div className="flex items-center justify-center  bg-transparent ">
        <button className="px-3 py-2 bg-gradient-to-r from-pink-400 to-indigo-500 hover:bg-none hover:border-pink-400 hover:bg-transparent hover:text-pink-400 border rounded-full text-white w-36 h-10 max-sm:w-30 max-sm:h-9 max-sm:text-sm ">
          {children}
        </button>
      </div>
    </div>
  );
}
