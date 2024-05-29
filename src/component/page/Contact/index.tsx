import contactlogo from "../../../assets/contact.jpg";
import Button from "../../common/Button";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Get in Touch
          </h2>
          <img
            src={contactlogo}
            alt="Get in Touch"
            className="w-full h-auto rounded-lg mb-4"
          />
        </div>
        <div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your message"
              ></textarea>
            </div>
            <div>
              <Button
                type="submit"
                style="w-full px-4 py-2 bg-teal-800 text-white font-medium rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                children="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
