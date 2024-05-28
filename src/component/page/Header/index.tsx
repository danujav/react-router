import logo from "../../../assets/logo_bird.jpg";
import Button from "../../common/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-100 text-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img className="h-11 w-auto" src={logo} alt="my-logo" />
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link
            className="font-medium text-gray-950 hover:text-teal-700 border-slate-700 border-b-8"
            to={`home`}
          >
            Home
          </Link>
          <Link
            to={`about`}
            className="font-medium text-gray-950 hover:text-teal-700"
          >
            About
          </Link>
          <Link
            to={`contact`}
            className="font-medium text-gray-950 hover:text-teal-700"
          >
            Contact
          </Link>
          <Link
            to={`git-hub`}
            className="font-medium text-gray-950 hover:text-teal-700"
          >
            GitHub
          </Link>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Button style="text-gray-950 hover:text-teal-700" children="Log In" />
          <Button
            style="bg-teal-700 text-gray-100 px-4 py-2 rounded hover:bg-teal-500"
            children="Sign Up"
          />
        </div>
        <div className="md:hidden">
          <Button
            style="text-teal-700 hover:text-teal-500 focus:outline-none"
            children={
              <svg
                className="w-6 h-6 1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            }
          />
        </div>
      </div>
    </header>
  );
}
