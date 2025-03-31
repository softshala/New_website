import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";
import HOME from "./HOME";
import Careers from "./Components/CAREERS/Careers";

import AboutUs from "./About";
import GetInTouch from "./Components/GetInTouch/GetInTouch";
import SalesForceServices from "./Components/AllServices/SalesForceServices";
import ServiceNow from "./Components/AllServices/ServiceNowServices/ServiceNow";
import WebDevelopment from "./Components/AllServices/WebDevelopmentServices/WebDEvelopment";
import SalesForceConsultingService from "./Components/AllServices/SalesForceServices/SalesForceConsultingService";
import SalesForceDevelopmentServices from "./Components/AllServices/SalesForceServices/SalesForceDevlopmentService";
import SalesForceImplementationServices from "./Components/AllServices/SalesForceServices/SalesFroceImplementionServices";
import SalesCloudSolutions from "./Components/AllServices/SalesForceServices/SalesCloudSolutions";
import AppexchangeAppDevelopmentServices from "./Components/AllServices/SalesForceServices/AppexchangeAppDevelopmentServices";
import SalesForceCPQ from "./Components/AllServices/SalesForceServices/SalesForceCPQ";
import SalesforceExperienceCloud from "./Components/AllServices/SalesForceServices/SalesforceExperienceCloud";
import SalesforceIntegrationServices from "./Components/AllServices/SalesForceServices/SalesforceIntegrationServices";
import SalesForceManagedServices from "./Components/AllServices/SalesForceServices/SalesForceManagedServices";
import SalesForceMarketingCloud from "./Components/AllServices/SalesForceServices/SalesForceMarketingCloud";
import SalesCloudSolutionServices from "./Components/AllServices/SalesForceServices/SalesCloudSolutionServices";
import Blog1 from "./Components/Blogs/AllBlogs/Blog1"; // Import Blog1 component (adjust the path as needed)
import Blog2 from "./Components/Blogs/AllBlogs/Blog2";
const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Render HOME component at the root URL */}
          <Route path="/" element={<HOME />} />

          {/* Also render HOME component at /home */}
          <Route path="/home" element={<HOME />} />

          {/* Blog Routes */}
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          {/* Other Routes */}
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          
           
          <Route path="/salesForce" element={<SalesForceServices />} />
          {/* Salesforce Services Routes */}
          <Route
            path="/sales-force-consulting"
            element={<SalesForceConsultingService />}
          />
          <Route
            path="/salesforce-development"
            element={<SalesForceDevelopmentServices />}
          />
          <Route
            path="/salesforce-implementation"
            element={<SalesForceImplementationServices />}
          />
          <Route
            path="/sales-cloud-solutions"
            element={<SalesCloudSolutions />}
          />
          <Route
            path="/appexchange-app"
            element={<AppexchangeAppDevelopmentServices />}
          />
          <Route path="/salesforce-cpq" element={<SalesForceCPQ />} />
          <Route
            path="/experience-cloud"
            element={<SalesforceExperienceCloud />}
          />
          <Route
            path="/integration-services"
            element={<SalesforceIntegrationServices />}
          />
          <Route
            path="/managed-services"
            element={<SalesForceManagedServices />}
          />
          <Route
            path="/marketing-cloud"
            element={<SalesForceMarketingCloud />}
          />
          <Route
            path="/sales-solution-services"
            element={<SalesCloudSolutionServices />}
          />

          {/* Other Services */}
          <Route path="/service-now" element={<ServiceNow />} />
          <Route path="/web-development" element={<WebDevelopment />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;