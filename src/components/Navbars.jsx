// eslint-disable-next-line react/prop-types
export default function Navbars({ title1, title2, title3, title4 }) {
  return (
    <div className="flex justify-center ">
      <div className=" flex w-3/4 bg-[#1c1b1d] my-3  items-center fixed bottom-0   rounded-full  h-12 ">
        <a href="#" className="flex container w-1/4">
          <button className="container bg-[#1c1b1d] flex uppercase font-bold text-white  tracking-widest  rounded-full  h-12 focus:bg-[#535266] hover:bg-[#2a282b] self-center items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 22V12h6v10"
              />
            </svg>
            <p className="max-sm:hidden">{title1}</p>
          </button>
        </a>
        <a href="#" className="flex container w-1/4">
          <button className="container bg-[#1c1b1d] flex font-bold uppercase text-white  tracking-widest  rounded-full  h-12 focus:bg-[#535266] hover:bg-[#2a282b] self-center items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v1a1 1 0 001 1h6a1 1 0 001-1v-1c0-2.21-1.79-4-4-4zm0 6a3 3 0 00-2.446 1.265A1.99 1.99 0 0010 18v2h4v-2a1.99 1.99 0 00-.554-1.735A3 3 0 0012 16z"
              />
            </svg>
            <p className="max-sm:hidden">{title2}</p>
          </button>
        </a>
        <a href="#" className="flex container w-1/4">
          <button className="container bg-[#1c1b1d] flex font-bold uppercase text-white  tracking-widest  rounded-full  h-12 focus:bg-[#535266] hover:bg-[#2a282b] self-center items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="max-sm:hidden">{title3}</p>
          </button>
        </a>
        <a href="#" className="flex container w-1/4">
          <button className="container bg-[#1c1b1d] flex font-bold uppercase text-white  tracking-widest  rounded-full  h-12 focus:bg-[#535266] hover:bg-[#2a282b] self-center items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <p className="max-sm:hidden">{title4}</p>
          </button>
        </a>
      </div>
    </div>
  );
}
