import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-neutral-primary fixed top-0 start-0 z-20 w-full border-b border-default">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-7"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-heading">
            Flowbite
          </span>
        </a>

        {/* Right Side */}
        <div className="relative flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {/* User Button */}
          <button
            type="button"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="flex rounded-full bg-neutral-primary text-sm focus:ring-4 focus:ring-neutral-tertiary md:me-0"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="/docs/images/people/profile-picture-5.jpg"
              alt="User"
            />
          </button>

          {/* User Dropdown */}
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 top-12 z-50 w-44 rounded-base border border-default-medium bg-neutral-primary-medium shadow-lg"
            >
              <div className="border-b border-default px-4 py-3 text-sm">
                <span className="block font-medium text-heading">
                  Joseph McFall
                </span>
                <span className="block truncate text-body">
                  name@flowbite.com
                </span>
              </div>

              <ul className="p-2 text-sm font-medium text-body">
                {["Dashboard", "Settings", "Earnings", "Sign out"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="inline-flex w-full items-center rounded p-2 hover:bg-neutral-tertiary-medium hover:text-heading"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-base p-2 text-sm text-body hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
        >
          <ul className="mt-4 flex flex-col rounded-base border border-default bg-neutral-secondary-soft p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-neutral-primary rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="block rounded bg-brand px-3 py-2 text-white md:bg-transparent md:p-0 md:text-fg-brand"
              >
                Home
              </a>
            </li>

            {["About", "Services", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block rounded px-3 py-2 text-heading hover:bg-neutral-tertiary md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-fg-brand"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;