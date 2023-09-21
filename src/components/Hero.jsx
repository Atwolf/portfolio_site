import { styles } from "../styles";
import { Scroll } from "./"

const Hero = () => {
  const arrowDown = "M12 5v13M5 12l7 7 7-7"
  return (
    <section className={`relative w-full h-screen mx-auto`}>

      <div 
      className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-coffee"/>
        <div className="w-1 sm:h-[500px] h-40 coffee-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="text-light-blue">Aakash</span></h1>
          <p className={`${styles.heroSubText} mt-2`}>I develop web applications, device <br className="sm:block"/>testing tools, and production system interfaces.</p>
        </div>
        
        <div className="absolute xs:bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <Scroll svgData={arrowDown} rounded="rounded-xl"/>
        </a>
      </div>
      </div>
      
    </section>
  );
};

export default Hero;
