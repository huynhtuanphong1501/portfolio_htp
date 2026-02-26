import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./css/style.css";

export default function index() {
  return (
    <div className="container mx-auto mt-3 px-4">
      {/* main layout */}
      <div className="w-full space-y-10">
        {/* item 1 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex h-130 md:h-90 md:flex-row flex-col items-center justify-center md:mt-5 lg:mt-10"
        >
          {/* image */}
          <div className="m-3 md:ml-[100px]">
            <img
              src="/img/me.JPG"
              alt="My Photo"
              className="w-48 md:w-80 lg:w-100 rounded-tl-[32px] rounded-br-[32px] "
            />
          </div>
          {/* content */}
          <div className="p-4 items-center justify-center flex flex-col space-y-4 md:items-start ">
            <h1 className="text-4xl font-heading text-white">Hi, I'm Phong</h1>
            <p className="text-white">
              I'm a front-end developer with a passion for creating beautiful
              and functional websites. I have experience with React, JavaScript,
              and CSS/SCSS, Tailwind CSS..., and I'm always eager to learn new
              technologies and improve my skills.
            </p>
          </div>
        </motion.div>

        {/* item 2 */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="pt-5 flex h-120 md:h-90 md:flex-row flex-col-reverse items-center justify-center md:mt-5"
        >
          {/* content */}
          <div className="p-4 items-center justify-center flex flex-col space-y-4 md:items-start ">
            <h1 className="text-4xl font-heading text-white">My Projects</h1>
            <p className="text-white">
              I have worked on several projects most of them are built with
              React using Redux, Tailwind CSS.... You can check out my projects
              to see some of the work I've done on my{" "}
              <span className="font-bold">GitHub</span> profile or on{" "}
              <span className="font-bold">Projects</span> site. Most of them are
              personal projects that I built to learn new technologies and
              improve my skills.
            </p>
            <div className="flex space-x-4 mt-4">
              <NavLink to={"/project"} className="btn">
                View Projects
              </NavLink>
              <button className="btn">
                <a href="https://github.com/huynhtuanphong1501">GitHub</a>
              </button>
            </div>
          </div>
          {/* image */}
          <div className="m-3">
            {/* <img
              src="./img/pj.png"
              alt="Projects"
              className="w-full rounded-tl-[32px] rounded-br-[32px]"
            /> */}
            <i className="fa-solid fa-bars-progress"></i>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="pt-5 flex h-120 md:h-90 md:flex-row flex-col items-center justify-center "
        >
          {/* image */}
          <div className="m-3">
            <i className="fa-solid fa-envelope"></i>
          </div>
          {/* content */}
          <div className="p-4 items-center justify-center flex flex-col space-y-4 md:items-start ">
            <h1 className="text-4xl font-heading text-white">Contact Me</h1>
            <p className="text-white">
              {" "}
              I'm always looking for new opportunities to work on interesting
              projects, so feel free to reach out if you have any ideas or want
              to collaborate on something!
            </p>
            <div className="flex space-x-4 mt-4">
              <NavLink to={"/contact"} className="btn">
                Contact Me
              </NavLink>
              <NavLink to={"/cv"} className="btn">
                View CV
              </NavLink>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
