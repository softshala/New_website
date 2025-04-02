import NavBar from "../NavBar";
import { useTheme } from "../../Context/ThemeContext";
import Footer from "../Footer";
import { Link } from "react-router-dom"; // Import Link for navigation
import { useState } from "react"; // Import useState for search and filter functionality

const Career = () => {
  const { isDarkTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [showFilters, setShowFilters] = useState(false); // State to toggle filter dropdown
  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
    experienceLevel: "",
  }); // State for filter options

  // Card data array for job cards with additional fields for filtering
  const jobCards = [
    {
      title: "Graphic Designer",
      description:
        "Looking for a creative graphic designer with experience in Adobe Suite and Figma.",
      location: "Remote",
      jobType: "Full-Time",
      experienceLevel: "Mid-Level",
    },
    {
      title: "3D Designer & Animator",
      description:
        "Seeking a skilled 3D designer to create animations and assets for digital projects.",
      location: "On-Site",
      jobType: "Part-Time",
      experienceLevel: "Senior",
    },
    {
      title: "Salesforce Developer",
      description:
        "Join our team as a Salesforce Developer and help build scalable CRM solutions.",
      location: "Hybrid",
      jobType: "Full-Time",
      experienceLevel: "Entry-Level",
    },
  ];

  // Employee testimonials data
  const testimonials = [
    {
      name: "Aman Sharma",
      role: "",
      quote:
        "At our IT startup, we pride ourselves on fostering a vibrant work culture that values collaboration and innovation. We provide robust support for both freshers and experienced employees, offering mentorship programs, continuous learning opportunities, and an open-door policy that encourages communication and feedback, ensuring everyone feels valued and empowered to grow",
    },
    {
      name: "Tushar Pandurang Barlawar",
      role: "",
      quote:
        "I’m really enjoying my experience at SoftShala Technologies Pvt Limited. The work environment is supportive, and the opportunities for growth are fantastic. I appreciate the clear communication, teamwork, and focus on innovation. Looking forward to continuing to contribute and grow with the team!",
    },
    {
      name: "Chetan Sharma",
      role: "",
      quote:
        "SoftShala embrace innovation and teamwork, providing a supportive environment where freshers like me gain hands-on experience, mentorship, and opportunities to learn and grow.",
    },
    {
      name: "Madhvendra Singh Rathore",
      role: "",
      quote:
        "Loving my experience at SoftShala Technologies! A supportive work environment, great growth opportunities, and a culture of innovation make it truly rewarding. Excited to learn and contribute!",
    },
    {
      name: "Ridam Jain",
      role: "",
      quote:
        "SoftShala Technologies provides an excellent work environment that fosters growth and collaboration. The team here is incredibly supportive, and everyone helps each other in overcoming challenges. The positive and encouraging atmosphere makes it a great place to work, learn, and evolve. I am truly happy to have joined SoftShala.",
    },
    {
      name: "Garvit Sharma",
      role: "",
      quote:
        "When I joined Softshala Technologies, I got the opportunity to work directly on a project, which boosted my confidence. The work culture here is better compared to my previous company. The CEO and other members are very supportive and treat every employee like family. They act like elder brothers, always trying to understand and solve any issues. Additionally, I am getting new opportunities and working on them, which is helping me grow professionally.",
    },
    {
      name: "Vinay Soni",
      role: "",
      quote:
        "I am happy to be a part of Softshala Technologies! This company provides a fantastic environment for learning and growth. Since joining, I have had the opportunity to work on exciting projects that have helped me enhance my skills and gain valuable experience. The team is highly supportive, and the work culture encourages innovation and collaboration. Softshala Technologies truly values its employees by offering continuous learning opportunities, professional development, and a positive work atmosphere.",
    },
  ];

  // Hiring process steps
  const hiringProcess = [
    "Apply Online",
    "HR Screening",
    "Technical Interview",
    "Final Discussion",
    "Offer Letter",
  ];

  // Blog data with links to Blog1 and Blog2
  const blogs = [
    {
      title:
        "Sustainable IT: Making Your Digital System Eco-Friendly with Salesforce",
      author: "Shubham Sharma",
      date: "March 29, 2025",
      description:
        "Explore how Salesforce helps businesses reduce their carbon footprint and build sustainable digital systems.",
      link: "/blog1",
    },
    {
      title:
        "Thought Leadership in Salesforce Implementation: Why It Matters for Your Business",
      author: "Shubham Sharma",
      date: "March 29, 2025",
      description:
        "Learn why thought leadership in Salesforce implementation is crucial for business success.",
      link: "/blog2",
    },
    {
      title:
        "Sustainable IT: Making Your Digital System Eco-Friendly with Salesforce",
      author: "Shubham Sharma",
      date: "March 29, 2025",
      description:
        "Explore how Salesforce helps businesses reduce their carbon footprint and build sustainable digital systems.",
      link: "/blog1",
    },
    {
      title:
        "Thought Leadership in Salesforce Implementation: Why It Matters for Your Business",
      author: "Shubham Sharma",
      date: "March 29, 2025",
      description:
        "Learn why thought leadership in Salesforce implementation is crucial for business success.",
      link: "/blog2",
    },
  ];

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Filter job cards based on search term and filters
  const filteredJobCards = jobCards.filter((job) => {
    // Search filter
    const matchesSearch = [job.title, job.description].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Location filter
    const matchesLocation = filters.location
      ? job.location === filters.location
      : true;

    // Job type filter
    const matchesJobType = filters.jobType
      ? job.jobType === filters.jobType
      : true;

    // Experience level filter
    const matchesExperienceLevel = filters.experienceLevel
      ? job.experienceLevel === filters.experienceLevel
      : true;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesJobType &&
      matchesExperienceLevel
    );
  });

  return (
    <>
      <NavBar />
      <div
        className={`w-full overflow-y-auto ${
          isDarkTheme ? "bg-black text-white" : "bg-gray-50 text-black"
        } font-raleway`}
      >
        {/* Header Section */}
        <div className="text-center pt-28 sm:pt-20 md:pt-28">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wider relative inline-block">
            Join Our Team
            <span
              className="absolute bottom-[-8px] left-0 w-full"
              style={{
                backgroundImage: isDarkTheme
                  ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                  : "linear-gradient(to right, #000000, #1F4B55)",
                height: "1px",
                border: "none",
              }}
            />
          </h1>
          <p className="text-sm md:text-lg mt-4 text-gray-400">
            Be a part of Softshala Technologies and grow with us
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex justify-center items-center mt-8 px-4 md:px-14 relative">
          <div className="flex flex-col md:flex-row items-center w-full max-w-4xl gap-3">
            <input
              type="text"
              placeholder="Search Jobs..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={`w-full md:w-3/4 py-1.5 px-3 rounded-lg border text-sm ${
                isDarkTheme
                  ? "bg-transparent border-gray-600 text-white placeholder-gray-400"
                  : "bg-transparent border-gray-300 text-black placeholder-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-1 py-1.5 px-3 rounded-lg border text-sm ${
                isDarkTheme
                  ? "bg-gray-800 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              } hover:bg-gray-200`}
            >
              <span>Filter</span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </button>
          </div>

          {/* Filter Dropdown */}
          {showFilters && (
            <div
              className={`absolute top-16 md:top-12 w-full max-w-4xl p-4 rounded-lg shadow-lg z-10 ${
                isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Location
                  </label>
                  <select
                    name="location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    className={`w-full py-1.5 px-3 rounded-lg border text-sm ${
                      isDarkTheme
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-black"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">All Locations</option>
                    <option value="Remote">Remote</option>
                    <option value="On-Site">On-Site</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

                {/* Job Type Filter */}
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Job Type
                  </label>
                  <select
                    name="jobType"
                    value={filters.jobType}
                    onChange={handleFilterChange}
                    className={`w-full py-1.5 px-3 rounded-lg border text-sm ${
                      isDarkTheme
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-black"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">All Job Types</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>

                {/* Experience Level Filter */}
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Experience Level
                  </label>
                  <select
                    name="experienceLevel"
                    value={filters.experienceLevel}
                    onChange={handleFilterChange}
                    className={`w-full py-1.5 px-3 rounded-lg border text-sm ${
                      isDarkTheme
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-black"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">All Levels</option>
                    <option value="Entry-Level">Entry-Level</option>
                    <option value="Mid-Level">Mid-Level</option>
                    <option value="Senior">Senior</option>
                  </select>
                </div>
              </div>
              <button
                onClick={() => setShowFilters(false)}
                className={`mt-4 w-full py-1.5 rounded-lg ${
                  isDarkTheme
                    ? "bg-gray-600 text-white hover:bg-gray-500"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Apply Filters
              </button>
            </div>
          )}
        </div>

        {/* Job Cards Section with Manual Horizontal Scroll */}
        <div className="mt-12 px-4 md:px-14 pb-20">
          <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            <div className="inline-flex gap-6">
              {filteredJobCards.length > 0 ? (
                [...filteredJobCards, ...filteredJobCards].map((job, index) => (
                  <div
                    key={index}
                    className={`w-[300px] p-6 rounded-lg border snap-center ${
                      isDarkTheme
                        ? "border-gray-600 bg-transparent"
                        : "border-gray-200 bg-transparent"
                    } shadow-md h-[280px] flex flex-col`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className={`w-8 h-8 rounded-md flex items-center justify-center ${
                          isDarkTheme ? "bg-gray-700" : "bg-gray-100"
                        }`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 flex-grow">
                      {job.description}
                    </p>
                    <div className="flex gap-2 mb-4">
                      <span
                        className={`text-xs px-3 py-1 rounded-full flex items-center gap-1 ${
                          isDarkTheme
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {job.location}
                      </span>
                      <span
                        className={`text-xs px-3 py-1 rounded-full flex items-center gap-1 ${
                          isDarkTheme
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {job.jobType}
                      </span>
                    </div>
                    <button
                      className={`w-full py-2 rounded-lg ${
                        isDarkTheme
                          ? "bg-white text-black hover:bg-gray-300"
                          : "bg-black text-white hover:bg-gray-700"
                      } font-semibold`}
                    >
                      Apply Now
                    </button>
                  </div>
                ))
              ) : (
                <div className="w-full text-center text-gray-400">
                  No jobs found matching your criteria.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* What Our Employees Say Section with Manual Horizontal Scroll */}
        <div className="mt-8 px-4 md:px-14 pb-12">
          <h2 className="text-2xl md:text-4xl font-bold uppercase text-center mb-6">
            What Our Employees Say
          </h2>
          <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            <div className="inline-flex gap-6">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className={`w-[360px] p-6 rounded-lg border snap-center ${
                    isDarkTheme
                      ? "border-gray-600 bg-transparent"
                      : "border-gray-200 bg-transparent"
                  } shadow-md`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Hiring Process Section */}
        <div className="mt-8 px-4 md:px-14 pb-16">
          <h2 className="text-2xl md:text-4xl font-bold uppercase text-center mb-6">
            Our Hiring Process
          </h2>
          <div className="flex flex-col items-center gap-3">
            {hiringProcess.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Blogs Section with Manual Horizontal Scroll */}
        <div className="mt-12 px-4 md:px-14 pb-12">
          <h2 className="text-2xl md:text-4xl font-bold uppercase text-center mb-8">
            Latest Blogs
          </h2>
          <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            <div className="inline-flex gap-6">
              {[...blogs, ...blogs].map((blog, index) => (
                <div
                  key={index}
                  className={`w-[400px] p-6 rounded-lg border snap-center ${
                    isDarkTheme
                      ? "border-gray-600 bg-transparent"
                      : "border-gray-200 bg-transparent"
                  } shadow-md h-[280px] flex flex-col`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <h3 className="text-xl font-semibold">{blog.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">
                    By {blog.author} - {blog.date}
                  </p>
                  <p className="text-sm text-gray-400 mb-4 flex-grow">
                    {blog.description}
                  </p>
                  <Link
                    to={blog.link}
                    className={`w-full py-2 rounded-lg border text-center ${
                      isDarkTheme
                        ? "border-gray-600 text-white hover:bg-gray-700"
                        : "border-gray-300 text-black hover:bg-gray-200"
                    } font-semibold`}
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stay Updated Section */}
        <div className="mt-12 px-4 md:px-14 pb-20">
          <h2 className="text-2xl md:text-4xl font-bold uppercase text-center mb-4">
            Stay Updated!
          </h2>
          <p className="text-sm md:text-lg text-center text-gray-400 mb-6">
            Subscribe to get job updates and blogs to your inbox
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full max-w-md py-2 px-4 rounded-l-lg border-t border-b border-l text-sm ${
                isDarkTheme
                  ? "bg-transparent border-gray-600 text-white placeholder-gray-400"
                  : "bg-transparent border-gray-300 text-black placeholder-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <button
              className={`py-2 px-4 rounded-r-lg border-t border-b border-r ${
                isDarkTheme
                  ? "bg-white text-black border-gray-600 hover:bg-gray-300"
                  : "bg-black text-white border-gray-300 hover:bg-gray-700"
              } font-semibold`}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Career;

// Add this CSS to hide the scrollbar
const styles = `
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
`;

// Inject the styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);