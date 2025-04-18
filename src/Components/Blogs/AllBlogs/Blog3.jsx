import NavBar from "../../NavBar";
import Footer from "../../Footer";
import { useTheme } from "../../../Context/ThemeContext";

// Import the background images (adjust the path as needed)
import BlogImage from "../images/blog3_img1.png"; // First image
import BlogImage1 from "../images/blog3_img2.png"; // Second image
import BlogImage2 from "../images/blog1_img3.png"; // Third image (new image from the second screenshot)
import BlogImg from "../images/blog3_img.png";
import BlogImage3 from "../images/blog3_img3.png";
const Blog3 = () => {
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
            Our Experience at Agentforce World Tour Mumbai — A Special Event for
            Softshala Technologies
          </h1>
        </div>

        {/* Content Section */}
        <div
          className={`w-full max-w-5xl mx-auto px-4 md:px-1 mt-6 text-sm md:text-base leading-relaxed ${
            isDarkTheme ? "text-gray-300" : "text-gray-800"
          }`}
        >
          <p>
            At Softshala Technologies, we’ve attended many events as part of the
            Salesforce ecosystem.
          </p>
          <p className="mt-4">
            But Agentforce World Tour Mumbai 2025 felt different.
            <br />
            It wasn’t just about the latest features or updates.
            <br />
            It was about people, partnerships, and practical solutions.
          </p>
          <p className="mt-4">
            This event gave us a chance to learn, connect, and reflect on how
            Salesforce is changing the way businesses work — and how we can
            serve our clients even better.
          </p>

          <h2
            className={`mt-6 text-xl md:text-2xl font-semibold border-b-2 border-transparent ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            What Made This Event So Special?
          </h2>

          {/* Second Image */}
          <div className="mt-6">
            <img
              src={BlogImage1}
              alt="Salesforce Green IT Support"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="mt-2">
            We’ve been to several events before.
            <br />
            So why did this one stand out?
          </p>
          <p className="mt-2">Here’s why:</p>
          <ol className="list-decimal list-inside mt-2 space-y-2">
            <li>
              Customer stories came first Every session focused on how real
              companies are solving problems with Salesforce. These weren’t just
              success stories — they were lessons we could relate to.
            </li>
            <li>
              It felt like a reunion We met many Salesforce partners we’ve
              worked with over the years. It was great to reconnect, share
              updates, and talk about where the ecosystem is headed.
            </li>
            <li>
              The sessions were practical The demos, use cases, and workshops
              weren’t too technical or high-level. They showed how Salesforce
              tools are actually used in day-to-day operations.
            </li>
            <li>
              Great networking opportunities We had real conversations — not
              just small talk. These included business owners, product managers,
              and consultants, all discussing ideas that matter.
            </li>
          </ol>

          <div
  className={`w-full max-w-5xl mx-auto px-4 md:px-1 mt-6 text-sm md:text-base leading-relaxed ${
    isDarkTheme ? "text-gray-300" : "text-gray-800"
  }`}
>
  <h2
    className={`mt-6 text-xl md:text-2xl font-semibold border-b-2 border-transparent ${
      isDarkTheme ? "text-white" : "text-black"
    }`}
  >
    A Conversation with Arundhati Bhattacharya
  </h2>
  <p className="mt-2">
    One of the most meaningful parts of the event was meeting Arundhati Bhattacharya, CEO and Chairperson of Salesforce South Asia.
  </p>
  <div className="mt-6 flex flex-col md:flex-row items-start">
    <div className="md:w-1/2 pr-4">
      <div className="bg-black text-white p-4 rounded-lg">
        <p className="mt-2">
          She shared simple but powerful ideas that really stayed with us:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            Trust is more important than ever As AI becomes part of every business, customers need to feel confident in the tools they’re using.
          </li>
          <li>
            Start with people, not technology She reminded us that digital transformation should solve real business problems — not just implement fancy features.
          </li>
          <li>
            Human connection still matters Even in a world full of automation, businesses grow when they stay close to their customers.
          </li>
        </ul>
        <p className="mt-2">
          For us, this wasn’t just inspiring — it confirmed that Softshala is on the right track.
        </p>
      </div>
    </div>
    <div className="md:w-1/2 mt-4 md:mt-0">
      <img
        src={BlogImg}
        alt="Arundhati Bhattacharya with attendee"
       className="w-full h-auto max-h-96 rounded-lg object-contain"
      />
    </div>
  </div>
</div>
<h3
            className={`mt-4 text-lg md:text-xl font-semibold ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            What We Learned
          </h3>
          <div className="mt-6">
            <img
              src={BlogImage3}
              alt="Salesforce Green IT Support"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="mt-2">
            Here are a few key takeaways we’re bringing back from the event:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              AI is not just a buzzword — it’s already here Businesses are using
              AI in their sales, support, and marketing. It’s no longer “future
              tech.” It’s part of today’s workflow.
            </li>
            <li>
              Implementation is just the beginning Many companies don’t struggle
              with tools — they struggle with using them properly. Adoption,
              training, and ongoing support are where the real value is.
            </li>
            <li>
              The Salesforce community is strong and growing It was great to see
              how many people, from different industries, are working together
              to make Salesforce work better.
            </li>
          </ul>
          <h3
            className={`mt-4 text-lg md:text-xl font-semibold ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            Why This Matters for Softshala
          </h3>

          <p className="mt-2">
            This event helped us step back and look at the bigger picture. It
            reminded us:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Why we started helping businesses with Salesforce.</li>
            <li>
              What our clients really need (not just tools, but solutions).
            </li>
            <li>
              And how important it is to stay connected with the wider
              Salesforce community.
            </li>
          </ul>
          <p className="mt-2">
            We came back with new ideas, useful insights, and stronger
            relationships. We’re more excited than ever to keep building better
            solutions for our clients.
          </p>
          <h3
            className={`mt-4 text-lg md:text-xl font-semibold ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            About Softshala Technologies
          </h3>
          <p className="mt-4">
            Softshala Technologies is a Salesforce implementation partner
            focused on helping businesses use Salesforce the right way. From
            setup to support, we make sure Salesforce works not just technically
            — but strategically.
          </p>
          <p className="mt-4">
          Whether you're just getting started or trying to improve your existing setup, we’re here to help.
          </p>

          {/* Updated Section from the Second Screenshot */}
          <h2
            className={`mt-6 text-xl md:text-2xl font-semibold border-b-2 text-center border-transparent ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            Want to take your Salesforce strategy to the next level? Let’s
            connect!
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

export default Blog3;
