export default function Section2() {
  return (
    <section className="flex max-sm:flex-col max-sm:mx-6 mx-24 mt-0 max-sm:mb-8 max-md:mb-8">
      <div className="justify-start w-1/2 max-sm:w-full  max-sm:justify-center max-sm:">
        <h2 className="flex justify-normal text-4xl mb-2 font-semibold tracking-wider max-sm:text-2xl max-sm:tracking-normal max-sm:justify-center max-md:text-3xl ">
          Social Media Services <br /> That Put Your Brand on the Map
        </h2>
        <p className=" mt-4 max-sm:text-sm text-lg">
          Social media has become an integral part of the business landscape,
          offering unprecedented opportunities for companies of all sizes to
          reach a global audience, engage with customers, and generate leads and
          sales. Today, it enables brands to tap into the power of relationships
          to build brand awareness, and drive loyalty.
        </p>
        <br />
        <p className="max-sm:text-sm text-lg">
          Whether you&apos;re a startup, small business or a global corporation,
          social media offers a variety of ways to reach your target market,
          increase customer engagement, and boost your bottom line. As more and
          more people increasingly use different platforms to consume content
          and engage with brands, businesses must take advantage of social media
          to reach a wide range of potential customers.
        </p>
      </div>
      <div className="flex w-1/2">
        <img
          src="src\assets\phone.jpg"
          alt=""
          width="100%"
          height="50px"
          className=" -mt-6 pb-80 object-contain contain-content max-sm:hidden "
        />
      </div>
    </section>
  );
}