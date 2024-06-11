export default function Section3() {
  return (
    <>
      <div className="flex max-md:flex-col  justify-normal text-white bg-[#0f0f15] w-full -mt-24 h-auto ">
        <div className="flex max-md:mx-0 container mt-40">
          <h5 className="text-4xl max-sm:text-2xl max-md:text-2xl font-semibold tracking-wider basis-1/2  ml-28 mb-20 max-md:ml-20 max-sm:text-center max-sm:mx-auto">
            Partner with us for winning social media solutions
          </h5>
        </div>
        <div className="flex container mt-32 basis-1/2 mr-36 m -ml-64 max-sm:mx-4 max-md:mx-auto max-md:-mt-12 max-md:px-12 max-md:mb-12">
          <p className="text-sm text-gray-400 text-end max-md:text-center">
            Our team of social media experts is highly experienced in creating
            and managing campaigns across all major social media platforms
            including Facebook, Twitter, Instagram, LinkedIn, TikTok and more.
            We are committed to delivering the best in class social media
            services to our clients and with our industry expertise and years of
            experience, you can rest assured of measurable results and positive
            ROIs.
          </p>
        </div>
      </div>
      <div className="flex flex-col container bg-white text-black   mx-auto min-h-screen mt-16 -mb-20 max-md:-mb-40">
        <h5 className="text-4xl font-semibold tracking-wider text-center basis-1/2 mb-8">
          Spanning over <span className="text-[#de005e]">4</span> Countries
        </h5>
        <img src="src/assets/map.jpg" alt="" className="p-5 -mb-2" />
      </div>
    </>
  );
}
