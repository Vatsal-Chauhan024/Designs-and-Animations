import ResponsiveCard from "./components/Responsive/ResponsiveCard";
import FlippingCard from "./components/Flipping/FlippingCard";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import LoginComponent from "./components/LoginForm/LoginComponent";
import LandingPage from "./components/Landing/LandingPage";
import ContactForm from "./components/ContactForm/ContactForm";
import VerticalTab from "./components/VerticalTab/VerticalTab";
import Footer from "./components/Footer/Footer";
import Glassmorphism from "./components/Glassmorphism/Glassmorphism";
import MainSidebar2 from "./components/Sidebar2/MainSidebar2";
import Flipping3D from "./components/3D Flipping/Flipping";
import PopupExample from "./components/Popup/Popup";
import { useState, useEffect } from "react";
import MainContainer from "./components/Navbar3/MainContainer";
import Cards from "./components/ThreeCards/Cards";
import Portfolio from "./components/PortfolioPage/Portfolio";
import NeoCard from "./components/NeoCards/NeoCard";
import Landing from "./pages/Landing";
import Sample from "./components/Upload/Sample";
import ProjectPage from "./pages/ProjectPage";
import VideoComponent from "./components/VIdeoComponent/VideoComponent";
import CenterSlider from "./components/CenterSlider/CenterSlider";
import MultiCarousel from "./components/MultiCarousel/MultiCarousel";
import Slider2 from "./components/slider2/Slider2";
import Pagination from "./components/customPagination/Pagination";
import { Helmet } from "react-helmet";
import Accordian from "./components/Accordian/Accordian";


function App() {
  const [loading, setLoading] = useState(true);

useEffect(()=>{
  setTimeout(() => {
    setLoading(false)
  }, 1000);
}, [])

  return (
    <div className="App">

<Helmet>
  <title>This is Home Page</title>
  <meta name = "description" content="Hello APP"/>
  <meta property="og:title" content="Hello App"/>
</Helmet>
      
      {loading ? (
        <>
          <div className="h-screen w-screen flex justify-center items-center">
            <InfinitySpin width="200" color="#4fa94d" />
          </div>
        </>
      ) : (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/responsivecard" element={<ResponsiveCard />} />
              <Route path="/flippingcards" element={<FlippingCard />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/verticaltab" element={<VerticalTab />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/glassmorphism" element={<Glassmorphism />} />
              <Route path="/sidebar2" element={<MainSidebar2 />} />
              <Route path="/flipping3d" element={<Flipping3D />} />
              <Route path = "/popup" element = {<PopupExample/>}/>
              <Route path = '/navbar3'  element = {<MainContainer/>}/>
              <Route path="/profilecards" element = {<Cards/>}/>
              <Route path="/portfolio" element = {<Portfolio/>}/>
              <Route path="/neocard" element = {<NeoCard/>}/>
              <Route path="/landing" element = {<Landing/>}/>
              <Route path = "/upload" element = {<Sample/>}/>
              <Route path="/firstpage" element = {<ProjectPage/>}/>
              <Route path="/video" element = {<VideoComponent/>}/>
              <Route path="/center-slider" element = {<CenterSlider/>}/>
            <Route path="/multicarousel" element = {<MultiCarousel/>}/> 
            <Route path = "/slider2" element = {<Slider2/>}/>
            <Route path="/pagination" element = {<Pagination/>}/>
            <Route path="/accordian" element = {<Accordian/>}/>
            </Routes>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}


export default App