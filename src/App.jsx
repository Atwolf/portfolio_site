import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Scroll } from "./components";

const App = () => {
  const svgData = "M12 19V6M5 12l7-7 7 7"

  return (
    <BrowserRouter>
      <div className='relative z-10 bg-primary'>
        <div className='bg-hero-pattern'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        
        <Scroll svgData={svgData}/>
      </div>

    </BrowserRouter>
  );
}

export default App;
