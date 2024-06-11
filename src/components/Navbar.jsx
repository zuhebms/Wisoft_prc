import mainlogo from "../assets/wisoft.jpg";

export default function Navbar() {
  return (
    <>
      <div className="max-w-l px-2 mx-auto py-2  fixed top-0 left-0 right-0 bg-white ">
        <nav className="border-gray-200 ">
          <div className="container  mx-auto flex flex-wrap items-center justify-between">
            <a href="/" className="flex p-1">
              <img
                src={mainlogo}
                alt="Wisoft Solutions Logo"
                width="100"
                height="45"
                className=""
              />
            </a>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a
                    href="#"
                    className="bg-black md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-black md:p-0 rounded hover:outline-pink-500 focus:underline decoration-pink-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
                  >
                    Social Media Services
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="dropdownNavbar"
                    className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
                  >
                    <ul className="py-1" aria-labelledby="dropdownNavbarLink">
                      <li>
                        <a
                          href="#"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Social Media Management
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Social Media Advertising
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Twitter Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Influencer Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Facebook Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Instagram Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          LinkedIn Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          TikTok Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Snapchat Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          YouTube Marketing
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
    </>
  );
}
