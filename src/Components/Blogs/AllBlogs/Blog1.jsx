import NavBar from "../../NavBar";
import Footer from "../../Footer";
import { useTheme } from "../../../Context/ThemeContext";

// Import the background images (adjust the path as needed)
import BlogImage from "../images/blog1_img1.png"; // First image
import BlogImage1 from "../images/blog1_img2.png"; // Second image
import BlogImage2 from "../images/blog1_img3.png"; // Third image (new image from the second screenshot)

const Blog1 = () => {
  const { isDarkTheme } = useTheme();

  return (
    <>
      <NavBar />

      <div
        className={`min-h-screen flex flex-col items-center py-10 pt-24 sm:pt-28 md:pt-32 ${
          isDarkTheme ? "bg-black text-white" : "bg-white text-black"
        } font-raleway`}
      >
        {/* Image Section */}
        <div className="relative w-full max-w-5xl mx-auto px-4">
          {/* Upper Image */}
          <img
            src={BlogImage}
            alt="Sustainable IT Header"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Title Below the Image */}
        <div className="w-full max-w-5xl mx-auto px-4">
          <h1
            className={`mt-8 text-xl sm:text-2xl md:text-4xl font-bold text-center font-raleway ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            SUSTAINABLE IT: MAKING YOUR DIGITAL SYSTEMS ECO-FRIENDLY WITH
            SALESFORCE
          </h1>
        </div>

        {/* Content Section */}
        <div
          className={`w-full max-w-5xl mx-auto px-4 md:px-1 mt-6 text-sm md:text-base leading-relaxed ${
            isDarkTheme ? "text-gray-300" : "text-gray-800"
          }`}
        >
          <p>
            Today, businesses rely heavily on technology, but with that comes a
            growing impact on the environment. As companies expand their digital
            operations, energy use and carbon emissions also increase.
          </p>
          <p className="mt-4">
            At Softshala, we believe technology should drive growth while being
            eco-friendly. With Salesforce, businesses can streamline their IT
            systems, reduce waste, and lower their environmental impact.
          </p>
          <p className="mt-4">
            Let’s explore how Salesforce and green IT practices can make a
            difference.
          </p>

          <h2
            className={`mt-6 text-xl md:text-2xl font-semibold border-b-2 border-transparent ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            What is Sustainable IT?
          </h2>
          <p className="mt-2">
            Sustainable IT means managing digital systems in a way that reduces
            energy use and minimizes harm to the environment. It includes:
          </p>
          <ol className="list-decimal list-inside mt-2 space-y-2">
            <li>Using cloud storage wisely to cut down unnecessary data.</li>
            <li>Optimizing computing power to avoid wasted resources.</li>
            <li>Following IT policies that support eco-friendly practices.</li>
          </ol>

          <h2
            className={`mt-6 text-xl md:text-2xl font-semibold border-b-2 border-transparent ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            Why Reducing Your Digital Carbon Footprint Matters
          </h2>

          <h3
            className={`mt-4 text-lg md:text-xl font-semibold ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            Lower Energy Use
          </h3>
          <p className="mt-2">
            Cloud-based systems like Salesforce use energy-efficient servers,
            helping businesses reduce electricity consumption and carbon
            emissions.
          </p>

          <h3
            className={`mt-4 text-lg md:text-xl font-semibold ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            Meet Regulations & Build a Greener Reputation
          </h3>
          <p className="mt-2">
            Governments and businesses worldwide are shifting towards
            sustainable IT. Companies that embrace green practices not only
            comply with regulations but also improve their public image.
          </p>

          {/* Second Image */}
          <div className="mt-6">
            <img
              src={BlogImage1}
              alt="Salesforce Green IT Support"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Previous Screenshot Content */}
          <h2
            className={`mt-6 text-xl md:text-2xl font-semibold border-b-2 border-transparent ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            How Salesforce Supports Green IT
          </h2>

          <h3
            className={`mt-4 text-lg md:text-xl font-semibold ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            Eco-Friendly Cloud
          </h3>
          <p className="mt-2">
            Salesforce runs on a carbon-neutral cloud, meaning businesses using
            it automatically lower their environmental impact.
          </p>

          <h3
            className={`mt-4 text-lg md:text-xl font-semibold ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            Tracking & Reducing Emissions
          </h3>
          <p className="mt-2">
            With Salesforce Net Zero Cloud, companies can monitor and manage
            their carbon footprint, making it easier to take action toward
            sustainability.
          </p>

          <h3
            className={`mt-4 text-lg md:text-xl font-semibold ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            How Softshala Helps Businesses Go Green with IT
          </h3>
          <p className="mt-2">
            At Softshala, we assist businesses in using Salesforce to reduce
            their carbon footprint by:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              Moving from traditional, high-energy systems to efficient cloud
              solutions.
            </li>
            <li>
              Helping businesses clean up data to avoid unnecessary storage
              waste.
            </li>
            <li>
              Setting up Net Zero Cloud for tracking and reducing emissions.
            </li>
          </ul>
          <p className="mt-4">
            Sustainability in IT is no longer just an option—it’s the future.
            Businesses that embrace green technology not only protect the
            environment but also gain a competitive edge.
          </p>

          {/* Updated Section from the Second Screenshot */}
          <h2
            className={`mt-6 text-xl md:text-2xl font-semibold border-b-2 text-center border-transparent ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            Want to Make Your IT Systems Eco-Friendly? Let’s Connect and Build a
            Greener Future Together!
          </h2>

          {/* Third Image (from the second screenshot) */}
          <div className="mt-6">
            <img
              src={BlogImage2}
              alt="Softshala Call to Action"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog1;