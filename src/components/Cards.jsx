import { cards } from "../card_object";
export default function Cards() {
  return (
    <>
      <div className="container mx-auto flex justify-center mb-8 ">
        <h1 className="max-sm:text-2xl max-sm:tracking-normal text-4xl mb-2 justify-center font-semibold tracking-wider">
          Our Social Media Services
        </h1>
      </div>
      <div className="flex container mx-auto justify-center  p-2 mb-4 max-md:flex-col max-sm:flex-col">
        <section className="container w-1/3 h-auto mx-2 bg-[#fff3fa] rounded-lg p-5 max-sm:w-full max-sm:mb-3 max-md:w-full max-md:mb-3 overflow-hidden border-white ">
          <div className="flex">
            <a href="#">
              <img
                src="src\assets\1card.jpg"
                className="w-1/4 h-1/4 -ml-4 mb-4  object-contain"
                alt=""
              />
              <h4 className="font-bold "> {cards[0].heading}</h4>
              <p className="font-light text-sm text-gray-700 mb-5 tracking-wider">
                {cards[0].para}
              </p>
              <span>
                <p className="font-light text-xs text-gray-800 inline">
                  Know more
                </p>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-pink-500 inline-block ml-2"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </span>
            </a>
          </div>
        </section>
        <section className="w-1/3 h-auto mx-2 bg-[#fff3fa] rounded-lg p-5 overflow-hidden border-white max-sm:w-full max-sm:mb-3 max-md:w-full max-md:mb-3 ">
          <div className="flex">
            <a href="#">
              <img
                src="src\assets\card2.jpg"
                className="w-1/4 h-1/4 -ml-4 mb-4  object-contain"
                alt="card2"
              />
              <h4 className="font-bold "> {cards[1].heading}</h4>
              <p className="font-light text-sm text-gray-700 mb-5 tracking-wider">
                {cards[1].para}
              </p>
              <span>
                <p className="font-light text-xs text-gray-800 inline">
                  Know more
                </p>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-pink-500 inline-block ml-2"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </span>
            </a>
          </div>
        </section>
        <section className="w-1/3 h-auto mx-2 bg-[#fff3fa] rounded-lg p-5 max-sm:w-full max-sm:mb-3 overflow-hidden border-white  max-md:w-full max-md:mb-3">
          <div className="flex">
            <a href="#">
              <img
                src="src\assets\card3.jpg"
                className="w-1/4 h-1/4 -ml-4 mb-4  object-contain"
                alt=""
              />
              <h4 className="font-bold "> {cards[2].heading}</h4>
              <p className="font-light text-sm text-gray-700 mb-5 tracking-wider">
                {cards[2].para}
              </p>
              <span>
                <p className="font-light text-xs text-gray-800 inline">
                  Know more
                </p>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-pink-500 inline-block ml-2"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </span>
            </a>
          </div>
        </section>
      </div>
      <div className="flex justify-center container mx-auto p-2 mb-4 max-sm:flex-col max-md:flex-col">
        <section className="w-1/3 h-auto mx-2 bg-[#fff3fa] rounded-lg p-5 max-sm:w-full max-sm:mb-3 overflow-hidden border-white  max-md:w-full max-md:mb-3">
          <div className="flex">
            <a href="#">
              <img
                src="src\assets\card4.jpg"
                className="w-1/4 h-1/4 -ml-4 mb-4  object-contain"
                alt=""
              />
              <h4 className="font-bold "> {cards[3].heading}</h4>
              <p className="font-light text-sm text-gray-700 mb-5 tracking-wider">
                {cards[3].para}
              </p>
              <span>
                <p className="font-light text-xs text-gray-800 inline">
                  Know more
                </p>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-pink-500 inline-block ml-2"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </span>
            </a>
          </div>
        </section>
        <section className="w-1/3 h-auto mx-2 bg-[#fff3fa] rounded-lg p-5 max-sm:w-full max-sm:mb-3 overflow-hidden border-white  max-md:w-full max-md:mb-3">
          <div className="flex">
            <a href="#">
              <img
                src="src\assets\card5.jpg"
                className="w-1/4 h-1/4 -ml-4 mb-4  object-contain"
                alt=""
              />
              <h4 className="font-bold "> {cards[4].heading}</h4>
              <p className="font-light text-sm text-gray-700 mb-5 tracking-wider">
                {cards[4].para}
              </p>
              <span>
                <p className="font-light text-xs text-gray-800 inline">
                  Know more
                </p>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-pink-500 inline-block ml-2"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </span>
            </a>
          </div>
        </section>
        <section className="w-1/3 h-auto mx-2 bg-[#fff3fa] rounded-lg p-5 max-sm:w-full max-sm:mb-3 overflow-hidden border-white  max-md:w-full max-md:mb-3">
          <div className="flex">
            <a href="#">
              <img
                src="src\assets\card6.jpg"
                className="w-1/4 h-1/4 -ml-4 mb-4  object-contain"
                alt=""
              />
              <h4 className="font-bold "> {cards[5].heading}</h4>
              <p className="font-light text-sm text-gray-700 mb-5 tracking-wider">
                {cards[5].para}
              </p>
              <span>
                <p className="font-light text-xs text-gray-800 inline">
                  Know more
                </p>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-pink-500 inline-block ml-2"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </span>
            </a>
          </div>
        </section>
      </div>
      <div className="flex justify-center container mx-auto p-2 mb-4 max-sm:flex-col max-md:flex-col">
        <section className="w-1/3 h-auto mx-2 bg-[#fff3fa] rounded-lg p-5 max-sm:w-full max-sm:mb-3 overflow-hidden border-white max-md:w-full max-md:mb-3">
          <div className="flex">
            <a href="#">
              <img
                src="src\assets\card6.jpg"
                className="w-1/4 h-1/4 -ml-4 mb-4  object-contain"
                alt=""
              />
              <h4 className="font-bold "> {cards[6].heading}</h4>
              <p className="font-light text-sm text-gray-700 mb-5 tracking-wider">
                {cards[6].para}
              </p>
              <span>
                <p className="font-light text-xs text-gray-800 inline">
                  Know more
                </p>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-pink-500 inline-block ml-2"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </span>
            </a>
          </div>
        </section>
        <section className="w-1/3 h-auto mx-2 bg-[#fff3fa] rounded-lg p-5 max-sm:w-full max-sm:mb-3 overflow-hidden border-white  max-md:w-full max-md:mb-3">
          <div className="flex">
            <a href="#">
              <img
                src="src\assets\card6.jpg"
                className="w-1/4 h-1/4 -ml-4 mb-4  object-contain"
                alt=""
              />
              <h4 className="font-bold ">{cards[7].heading}</h4>
              <p className="font-light text-sm text-gray-700 mb-5 tracking-wider">
                {cards[7].para}
              </p>
              <span>
                <p className="font-light text-xs text-gray-800 inline">
                  Know more
                </p>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-pink-500 inline-block ml-2"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </span>
            </a>
          </div>
        </section>
        <section className="w-1/3 h-auto mx-2 bg-[#fff3fa] rounded-lg p-5 max-sm:w-full max-sm:mb-3 overflow-hidden border-white  max-md:w-full max-md:mb-3">
          <div className="flex">
            <a href="#">
              <img
                src="src\assets\card6.jpg"
                className="w-1/4 h-1/4 -ml-4 mb-4  object-contain"
                alt=""
              />
              <h4 className="font-bold ">{cards[8].heading}</h4>
              <p className="font-light text-sm text-gray-700 mb-5 tracking-wider">
                {cards[8].para}
              </p>
              <span>
                <p className="font-light text-xs text-gray-800 inline">
                  Know more
                </p>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-pink-500 inline-block ml-2"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </span>
            </a>
          </div>
        </section>
      </div>
      <div className="flex justify-normal container mx-auto p-2 mb-4">
        <section className="w-1/3 h-auto mx-2 bg-[#fff3fa] rounded-lg max-sm:w-full max-sm:mb-3 overflow-hidden  p-5 border-white  max-md:w-full max-md:mb-3">
          <div className="flex">
            <a href="#">
              <img
                src="src\assets\card6.jpg"
                className="w-1/4 h-1/4 -ml-4 mb-4  object-contain"
                alt=""
              />
              <h4 className="font-bold ">{cards[9].heading}</h4>
              <p className="font-light text-sm text-gray-700 mb-5 tracking-wider">
                {cards[9].para}
              </p>
              <span>
                <p className="font-light text-xs text-gray-800 inline">
                  Know more
                </p>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="fill-pink-500 inline-block ml-2"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
