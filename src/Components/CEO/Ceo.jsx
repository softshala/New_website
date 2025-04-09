import React from 'react';
import Ceo from './ceo.png';
import { useTheme } from '../../Context/ThemeContext'; // Assuming ThemeContext is set up
import Navbar from '../NavBar';

const ProfileCard = () => {
  const { isDarkTheme } = useTheme(); // Get the theme state

  const handleSaveContact = () => {
    // Create a vCard string
    const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:Shubham Sharma
ORG:Softshala Technologies
TITLE:CEO & Founder
EMAIL:shubham@softshala.com
TEL:+919900004176
URL;TYPE=LinkedIn:https://www.linkedin.com/in/shubham-sharma-softshala/
URL;TYPE=Company LinkedIn:https://www.linkedin.com/company/softshala/
END:VCARD
    `.trim();

    // Create a blob and trigger download
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'shubham_sharma.vcf'; // File name for the vCard
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <Navbar />
      <div className={`min-h-screen ${isDarkTheme ? 'bg-black' : 'bg-white'} py-28 md:py-28 py-6 pt-24 md:pt-24 px-16 md:px-16 px-8 md:px-16 pl-12 md:pl-28`}>
        <div className={`w-full max-w-5xl ${isDarkTheme ? 'text-white' : 'text-black'}`}>
          {/* Header with Image and Name */}
          <div className="flex items-center w-full mb-8 md:flex-row flex-col">
            <div className="w-72 h-72 md:w-72 md:h-72 w-48 h-48 rounded-full overflow-hidden mr-6 md:mr-6">
              <img
                src={Ceo}
                alt="Shubham Sharma"
                className="w-full h-full object-contain" // Ensures full image is visible
              />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${isDarkTheme ? 'text-white' : 'text-black'}`}>Hi, I'm</h1>
              <h2 className={`text-3xl font-extrabold ${isDarkTheme ? 'text-white' : 'text-black'}`}>Shubham Sharma</h2>
              <h3 className={`text-xl font-semibold mt-2 ${isDarkTheme ? 'text-white' : 'text-black'}`}>CEO & Founder at Softshala Technologies</h3>
              <p className={`text-gray-300 mt-2 text-base ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                Salesforce Solution Architect | Multi-Cloud Enterprise CRM Transformation Expert | AI-Driven CRM
                Architect | Enabling 10x Business Growth Through Intelligent Automation
              </p>
            </div>
          </div>

          {/* Points Section */}
          <div className="space-y-6 pl-0 md:pl-16 pr-0 md:pr-12 mt-8">
            <div>
              <h4 className={`text-lg font-medium flex items-center ${isDarkTheme ? 'text-white' : 'text-black'}`}>
                <span className="text-2xl mr-2">•</span> From Developer to Leader:
              </h4>
              <p className={`text-base ml-8 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                What started as a curious mind tinkering with code turned into leading Softshala Technologies and
                Learn with Softshala.
              </p>
            </div>
            <div>
              <h4 className={`text-lg font-medium flex items-center ${isDarkTheme ? 'text-white' : 'text-black'}`}>
                <span className="text-2xl mr-2">•</span> Empowering Teams:
              </h4>
              <p className={`text-base ml-8 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                Now, I guide a team of 50+ talented professionals, turning ideas into impactful solutions.
              </p>
            </div>
            <div>
              <h4 className={`text-lg font-medium flex items-center ${isDarkTheme ? 'text-white' : 'text-black'}`}>
                <span className="text-2xl mr-2">•</span> Driven by Passion:
              </h4>
              <p className={`text-base ml-8 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                I'm dedicated to crafting innovative tech, fostering growth, and making a difference.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-6 md:mt-12 text-center">
            <p className={`text-2xl md:text-2xl text-xl ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              If you want to know more,
              <br />
              Let's connect and build something amazing together!
            </p>
            <div className="mt-6 md:mt-12">
              <h3 className={`text-2xl font-semibold ${isDarkTheme ? 'text-white' : 'text-black'}`}>LINKEDIN</h3>
              <div className="flex flex-col md:flex-row justify-center md:space-x-32 mt-2">
                <a
                  href="https://www.linkedin.com/in/shubham-sharma-softshala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkTheme ? 'text-white' : 'text-gray-900'} hover:underline mb-2 md:mb-0`}
                >
                  Personal
                </a>
                <a
                  href="https://www.linkedin.com/company/softshala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkTheme ? 'text-white' : 'text-gray-900'} hover:underline`}
                >
                  Company
                </a>
              </div>
            </div>
            <div className="mt-6 md:mt-12">
              <h3 className={`text-2xl font-semibold ${isDarkTheme ? 'text-white' : 'text-black'}`}>Instagram</h3>
              <div className="flex flex-col md:flex-row justify-center md:space-x-32 mt-2">
                <a
                  href="https://www.instagram.com/learn_with_softshala?igsh=MWx2dm5oeWY1ZjNsMw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkTheme ? 'text-white' : 'text-gray-900'} hover:underline mb-2 md:mb-0`}
                >
                  Learn With Us
                </a>
                <a
                  href="https://www.instagram.com/softshala?igsh=ZTI1ZXVsMXFqdzVn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkTheme ? 'text-white' : 'text-gray-900'} hover:underline`}
                >
                  Company
                </a>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <h3 className={`text-2xl font-semibold ${isDarkTheme ? 'text-white' : 'text-black'}`}>EMAIL</h3>
              <a
                href="mailto:shubham@softshala.com"
                className={`mt-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'} hover:underline`}
              >
                shubham@softshala.com
              </a>
            </div>
            <div className="mt-6 md:mt-8">
              <h3 className={`text-2xl font-semibold ${isDarkTheme ? 'text-white' : 'text-black'} border-b-2 border-gray-300 inline-block`}>CONTACT NUMBER</h3>
              <p className={`mt-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>+91 9900004176</p>
            </div>
            <button
              className="mt-6 md:mt-8 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition duration-300"
              onClick={handleSaveContact}
            >
              Save Contact Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;