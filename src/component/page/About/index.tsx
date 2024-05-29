import aboutlogo from "../../../assets/about.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 p-32">
        <img src={aboutlogo} alt="Vector Image" className="w-max h-max mb-8" />

        <div className="max-w-3xl text-center text-gray-700">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            We are a team of passionate developers dedicated to building modern
            web applications. Our mission is to create intuitive and beautiful
            user experiences.
          </p>
          <div className="space-y-4">
            <p className="text-gray-700">
              Founded in 2021, our company has quickly grown to become a leader
              in the industry. Our commitment to quality and innovation drives
              us to continuously improve and deliver the best products to our
              customers.
            </p>
            <p className="text-gray-700">
              We believe in the power of technology to transform lives and
              businesses. Our team is constantly exploring new trends and
              technologies to stay ahead of the curve and provide cutting-edge
              solutions.
            </p>
            <p className="text-gray-700">
              Thank you for visiting our page. We look forward to working with
              you and helping you achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
