import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter h-container">
        {/* Left Section */}
        <div className="flexColStart hero-left">
          <motion.h1
          initial={{ y: "2rem", opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 2, type: "spring"}}
          className="hero-title">
            LIDERES EN LA <br /> CONSTRUCCION DE <br /> INFRAESTRUCTURA
          </motion.h1>

          <motion.div
          initial={{ y: "2rem", opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 2, type: "spring"}}
          className="flexColStart hero-des">
            <span className="secondaryText">
              Contamos con toda la capacidad y experiencia necesaria para{" "}
            </span>
            <span className="secondaryText">
              la participación en proyectos tanto de obra pública como privada.
            </span>
          </motion.div>

          <motion.div
          initial={{ y: "2rem", opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 2, type: "spring"}}
          className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={750} end={870} duration={4} />
                <span> +</span>
              </span>
              <span className="secondaryText">Contractors Appointed</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={180} end={250} duration={4} />
                <span> +</span>
              </span>
              <span className="secondaryText">Proyectos Completados</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={26} duration={4} />
                <span> +</span>
              </span>
              <span className="secondaryText">Awards Won</span>
            </div>
          </motion.div>

          <motion.div
          initial={{ y: "2rem", opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 2, type: "spring"}}
          className="flexCenter stats2">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1500} end={1996} duration={4} separator="" />
              </span>
              <span className="secondaryText">Establecida</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={25} duration={4} />
                <span> +</span>
              </span>
              <span className="secondaryText">Años de experiencia</span>
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="flexCenter hero-right">
          <motion.div
          initial={{ x: "7rem", opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 2, type: "spring"}}
          className="image-container">
            <img src="./img1.jpg" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
