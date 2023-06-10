import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       👋 I'm Shubhankar Kumar Singh, a Full Stack Web Developer and Designer 🌐 using the versatility of JavaScript 📜 
       in both Front-End and Back-End to create beautiful, responsive and well designed Web Apps 
       🎨📲 with great UI and UX 🌟. I am well equipped to solve problems with my wide skill-set 💪🧩, 
       ranging from creating beautiful static websites 🖌️, to Single Page Web Apps 🌐, Back-End development ⚙️,
        Databases 🗄️, Cloud Deployment ☁️ & Systems Administration 🖥️.
        <br/>
        <br/>
         A vast majority of my skills are self-taught 📚🧠, 
        and I am naturally curious 🤔, passionate about web technologies 💻, and a quick learner 🚀, 
        confident that I can adapt to any technologies that your organization uses 💯. 
        I use C++ to practice Data Structures & Algorithms 📊 and write efficient ES6 JavaScript for Web projects 💡. 
        I am proficient in using React.js ⚛️, along with Sass and the Bootstrap framework to create beautiful and efficient 
        Single Page Web Apps 🌐 with great UX 🌈, and can also use JQuery and custom, responsive CSS for simpler websites 🎯. 
        Node.js with Express is my go-to backend framework to create REST API backends 📡. 
        <br/>
        <br/>
        I can use Table-based and NoSQL Databases like Postgres 🐘, or MongoDB 🍃 depending on project requirements 📋. 
        I believe if given a chance 🔑 I can do justice to your position ⚖️. If given an opportunity 🤝 
        I would love to work in your organization 🏢.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
