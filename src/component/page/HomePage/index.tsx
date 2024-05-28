import Button from "../../common/Button";
import LandingPage from "../../../assets/landing_page.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 p-32">
        <div className="max-w-3xl text-center text-gray-700">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            faucibus gravida lorem, a tincidunt ligula efficitur ac.
          </p>
          <Button
            style="bg-teal-950 text-white hover:bg-teal-900 hover:text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
            children="Get Started"
          />
        </div>
        <img src={LandingPage} alt="Vector Image" className="w-max h-max mb-8" />
      </div>
    </div>
  );
}
