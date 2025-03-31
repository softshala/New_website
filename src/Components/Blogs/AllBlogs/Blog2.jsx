import NavBar from "../../NavBar";
import Footer from "../../Footer";
import { useTheme } from "../../../Context/ThemeContext";

// Import the background images (adjust the path as needed)
import BlogImage from "../images/blog2_img1.png"; // First image
import BlogImage1 from "../images/blog2_img2.png"; // Second image
import BlogImage2 from "../images/blog1_img3.png"; // Third image (new image from the second screenshot)

const Blog2 = () => {
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
            Thought Leadership in Salesforce Implementation: Why It Matters for
            Your Business
          </h1>
        </div>

        {/* Content Section */}
        <div
          className={`w-full max-w-5xl mx-auto px-4 md:px-1 mt-6 text-sm md:text-base leading-relaxed ${
            isDarkTheme ? "text-gray-300" : "text-gray-800"
          }`}
        >
          <p>
            Are you considering Salesforce for your company? Or wondering how to
            get the most out of your existing Salesforce setup?
          </p>
          <p className="mt-4">
            Many business leaders face the same challenge—understanding
            Salesforce deeply enough to make the right decisions. That’s where
            thought leadership in Salesforce implementation makes a real impact.
          </p>
          <p className="mt-4">
            At Softshala, we don’t just implement Salesforce—we help businesses
            unlock its full potential with expert guidance and innovative
            strategies.
          </p>

          <h2
            className={`mt-6 text-xl md:text-2xl font-semibold border-b-2 border-transparent ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            What is Thought Leadership in Salesforce?
          </h2>
          <p className="mt-2">
            Thought leadership is more than just expertise—it’s about sharing
            knowledge that educates, inspires, and drives results. <br />When it comes
            to Salesforce, thought leadership means:
          </p>
          <ol className="list-decimal list-inside mt-2 space-y-2">
            <li>Offering strategic advice to maximize Salesforce’s benefits.</li>
            <li>Keeping businesses updated on new features and industry trends.</li>
            <li>Helping companies overcome challenges in setup, customization, and growth.</li>
          </ol>
 
          <p className="mt-2">
          It’s about being a trusted partner that helps businesses make informed, effective decisions.
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
            Why Thought Leadership Matters in Salesforce Implementation
          </h2>

          <h3
            className={`mt-4 text-lg md:text-xl font-semibold ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            1 Builds Trust & Credibility
          </h3>
          <p className="mt-2">
          Customers want a reliable partner, not just a service provider. By sharing expert insights through blogs, case studies, and events, Salesforce partners build authority and become industry leaders.
          </p>

          <h3
            className={`mt-4 text-lg md:text-xl font-semibold ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            2 Simplifies Complex Decisions
          </h3>
          <p className="mt-2">
          Salesforce is powerful but can be overwhelming. Thought leadership helps businesses understand what’s essential, what’s optional, and how to tailor solutions to their needs.
          </p>

          <h3
            className={`mt-4 text-lg md:text-xl font-semibold ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
           3 Encourages Innovation & Growth
          </h3>
          <p className="mt-2">
          Salesforce is constantly evolving. Thought leaders don’t just follow trends—they set them—ensuring clients stay ahead of competitors.
          </p>

          <h3
            className={`mt-4 text-lg md:text-xl font-semibold ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            How Softshala Leads in Salesforce Thought Leadership
          </h3>
          <p className="mt-2">
          At Softshala, we go beyond just implementation. We bring expertise and strategy to every Salesforce project through:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
            Educational Content – Blogs, guides, and whitepapers that help businesses make smart decisions.
            </li>
            <li>
            Webinars & Training – Interactive sessions to teach best practices and new Salesforce updates.
            </li>
            <li>
            Client Success Stories – Real-world case studies showing how Salesforce transforms businesses.
            </li>
            <li>
            Industry Engagement – Active participation in Salesforce events, forums, and discussions to bring the latest ideas to our clients.
            </li>
          </ul>
          <h3
            className={`mt-4 text-lg md:text-xl font-semibold ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
           Final Thoughts: Expertise That Drives Success
          </h3>
          <p className="mt-4">
          Salesforce implementation is just the start. To truly maximize its potential, businesses need strategic insights and expert guidance—rooted in thought leadership.

          </p>
          <p className="mt-4">
          At Softshala, we’re more than Salesforce implementers—we’re your trusted partner for long-term success.
          </p>

          {/* Updated Section from the Second Screenshot */}
          <h2
            className={`mt-6 text-xl md:text-2xl font-semibold border-b-2 text-center border-transparent ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            Want to take your Salesforce strategy to the next level? Let’s connect!
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

export default Blog2;
