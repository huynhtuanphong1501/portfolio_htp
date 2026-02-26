import "../Home/css/style.css";

export default function CvPage() {
  return (
    <>
      <div className="container mx-auto mt-3 px-4">
        <div className="bg-white w-[100%]">
          {/* intro */}
          <div className="text-black flex justify-center items-center flex-col pt-[100px]">
            <h1 className="font-bold text-2xl">Huynh Tuan Phong</h1>
            <h2>Front-end Developer</h2>
            <h2>Dob: 15/01/2001</h2>
            <h2>Phone: (+84) 965784321</h2>
            <h2>Email: phonghuynh1501@gmail.com</h2>
            <h2>Website: https://portfolio-htp-e271.vercel.app</h2>
          </div>
          {/* summary */}
          <div className="mt-[20px] text-black px-[50px] md:mt-[50px]">
            <div className="">
              <h1 className="font-bold text-2xl">SUMMARY</h1>
              <hr />
              <div className="pt-5 px-4">
                <p>
                  I'm a front-end developer with 1 year of experience in
                  building web applications. I have experience with ReactJS,
                  JavaScript, CSS/SCSS, and Tailwind CSS..., and I'm always
                  willing to learn new technologies to enhance my skills.
                </p>
                <p>
                  I love to create beautiful and functional websites that
                  provide a great user experience. I'm a team player and I enjoy
                  collaborating with other developers, designers, and
                  stakeholders to create amazing web applications.
                </p>
              </div>
            </div>
          </div>
          {/* education */}
          <div className="mt-[20px] text-black px-[50px] md:mt-[50px]">
            <div className="">
              <h1 className="font-bold text-2xl">EDUCATION</h1>
              <hr />
            </div>
            <div className="pt-5 px-4">
              <div className="flex">
                <div className="grid grid-cols-[120px_1fr] md:grid-cols-[300px_1fr] items-center">
                  <p>09/2019 - 07/2022</p>
                </div>
                <div>
                  <h2 className="font-bold">Ton Duc Thang University</h2>
                  <p className="text-sm">
                    {" "}
                    - Bachelor’s Degree in Computer Science
                  </p>
                  <p className="text-sm">
                    {" "}
                    - Completed Year 1 and Year 2 at Ton Duc Thang University
                  </p>
                </div>
              </div>

              <div className="flex mt-5">
                <div className="grid grid-cols-[120px_1fr] md:grid-cols-[300px_1fr] items-center">
                  <p>09/2022 - 07/2025</p>
                </div>
                <div>
                  <h2 className="font-bold">
                    VSB – Technical University of Ostrava
                  </h2>
                  <p className="text-sm">
                    {" "}
                    - Bachelor’s Degree in Computer Science
                  </p>
                  <p className="text-sm">
                    {" "}
                    - Completed Year 2 to Year 4 at VSB
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Scholarships & Awards */}
          <div className="mt-[20px] text-black px-[50px] md:mt-[50px]">
            <div className="">
              <h1 className="font-bold text-2xl">SCHOLARSHIPS & AWARDS</h1>
              <hr />
            </div>
            <div className="pt-5 px-4">
              <div className="flex">
                <div className="grid grid-cols-[120px_1fr] md:grid-cols-[300px_1fr] items-center">
                  <p>09/2023</p>
                </div>
                <div>
                  <h2 className="text-sm">Incentive Scholarship</h2>
                </div>
              </div>
            </div>
          </div>
          {/* certifications */}
          <div className="mt-[20px] text-black px-[50px] md:mt-[50px]">
            <div className="">
              <h1 className="font-bold text-2xl">CERTIFICATIONS</h1>
              <hr />
            </div>
            <div className="pt-5 px-4">
              <div className="flex">
                <div className="grid grid-cols-[120px_1fr] md:grid-cols-[300px_1fr] items-center">
                  <p>2022</p>
                </div>
                <div>
                  <h2 className="text-sm">IELTS 6.0</h2>
                </div>
              </div>

              <div className="flex mt-5">
                <div className="grid grid-cols-[120px_1fr] md:grid-cols-[300px_1fr] items-center">
                  <p>Current</p>
                </div>
                <div>
                  <h2 className="text-sm">CyberSoft</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Skills */}
          <div className="mt-[20px] text-black px-[50px] md:mt-[50px]">
            <div className="">
              <h1 className="font-bold text-2xl">SKILLS</h1>
              <hr />
            </div>
            <div className="pt-5 px-4">
              <div className="flex">
                <div className="grid grid-cols-[120px_1fr] md:grid-cols-[300px_1fr] items-center">
                  <p className="font-bold">Programming Languages:</p>
                </div>
                <div>
                  <p className="text-sm"> - JavaScript, TypeScript</p>
                  <p className="text-sm"> - Java, C#, C/C++, OOP</p>
                </div>
              </div>

              <div className="flex mt-5">
                <div className="grid grid-cols-[120px_1fr] md:grid-cols-[300px_1fr] items-center">
                  <p className="font-bold">Frameworks / Platforms:</p>
                </div>
                <div>
                  <p className="text-sm"> - ReactJS, NextJS</p>
                  <p className="text-sm"> - HTML5, CSS3, SCSS, Tailwind CSS</p>
                  <p className="text-sm"> - Redux Toolkit, Ant-Design</p>
                </div>
              </div>

              <div className="flex mt-5">
                <div className="grid grid-cols-[120px_1fr] md:grid-cols-[300px_1fr] items-center">
                  <p className="font-bold">Version Control:</p>
                </div>
                <div>
                  <p className="text-sm"> - Git</p>
                </div>
              </div>

              <div className="flex mt-5">
                <div className="grid grid-cols-[120px_1fr] md:grid-cols-[300px_1fr] items-center">
                  <p className="font-bold">Foreign Languages:</p>
                </div>
                <div>
                  <p className="text-sm"> - English</p>
                </div>
              </div>

              <div className="flex mt-5">
                <div className="grid grid-cols-[120px_1fr] md:grid-cols-[300px_1fr] items-center">
                  <p className="font-bold">Soft skills:</p>
                </div>
                <div>
                  <p className="text-sm"> - Communication</p>
                  <p className="text-sm"> - Teamwork</p>
                  <p className="text-sm"> - Problem-solving</p>
                </div>
              </div>

              <div className="flex mt-5">
                <div className="grid grid-cols-[120px_1fr] md:grid-cols-[300px_1fr] items-center">
                  <p className="font-bold">Others:</p>
                </div>
                <div>
                  <p className="text-sm">
                    {" "}
                    - Can read Document and Requirements fast and efficiently
                  </p>
                  <p className="text-sm">
                    - Experience in working with Agile & Scrum development
                    process
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* projects */}
          <div className="mt-[20px] text-black px-[50px] md:mt-[50px] pb-[100px]">
            <div className="">
              <h1 className="font-bold text-2xl">PROJECTS</h1>
              <hr />
              <div className="pt-5 px-4">
                <div className="grid grid-cols-[100px_1fr] md:grid-cols-[300px_1fr] items-center gap-4">
                  <p>11/2025</p>

                  <div className="">
                    <h2 className="font-bold">
                      Phong Phone - Learning Project
                    </h2>

                    <ul className="text-sm mt-2 space-y-1 list-disc ml-4">
                      <li>
                        <span className="font-semibold">Role:</span> Front-end
                        Developer
                      </li>
                      <li>
                        <span className="font-semibold">Description:</span> A
                        learning project to practice and improve my front-end
                        development skills. The project is a simple e-commerce
                        website that sells phones, it has both Admin and Home
                        pages.
                      </li>
                      <li>
                        <span className="font-semibold">Technologies:</span>{" "}
                        HTML5, SCSS, JavaScript
                      </li>
                      <li>
                        <span className="font-semibold">Team size:</span> 1
                      </li>
                      <li>
                        <span className="font-semibold">GitHub:</span>{" "}
                        <a
                          href="https://github.com/huynhtuanphong1501/SASS_CAPSTONE2"
                          className="underline"
                        >
                          Link
                        </a>
                      </li>
                      <li>
                        <span className="font-semibold">Live Demo:</span>{" "}
                        <a
                          href="https://sass-capstone-2.vercel.app"
                          className="underline"
                        >
                          Link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-[100px_1fr] md:grid-cols-[300px_1fr] items-center gap-4 mt-5">
                  <p>12/2025</p>

                  <div className="">
                    <h2 className="font-bold">CinemaXYZ - Learning Project</h2>

                    <ul className="text-sm mt-2 space-y-1 list-disc ml-4">
                      <li>
                        <span className="font-semibold">Role:</span> Front-end
                        Developer
                      </li>
                      <li>
                        <span className="font-semibold">Description:</span> A
                        learning project to practice and improve my front-end
                        development skills. The project is a simple cinema
                        website that allows users to book tickets, it has both
                        Admin and Home pages.
                      </li>
                      <li>
                        <span className="font-semibold">Technologies:</span>{" "}
                        ReactJS with JavaScript, Redux Toolkit, Tailwind CSS,
                        Ant-Design...
                      </li>
                      <li>
                        <span className="font-semibold">Team size:</span> 1
                      </li>
                      <li>
                        <span className="font-semibold">GitHub:</span>{" "}
                        <a
                          href="https://github.com/huynhtuanphong1501/capstoneCinema/tree/main"
                          className="underline"
                        >
                          Link
                        </a>
                      </li>
                      <li>
                        <span className="font-semibold">Live Demo:</span>{" "}
                        <a
                          href="https://capstone-cinema.vercel.app"
                          className="underline"
                        >
                          Link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-[100px_1fr] md:grid-cols-[300px_1fr] items-center gap-4 mt-5">
                  <p>12/2025 - 02/2026</p>

                  <div className="">
                    <h2 className="font-bold">LockWind - Learning Project</h2>

                    <ul className="text-sm mt-2 space-y-1 list-disc ml-4">
                      <li>
                        <span className="font-semibold">Role:</span> Front-end
                        Developer - Admin side
                      </li>
                      <li>
                        <span className="font-semibold">Description:</span> A
                        learning project to practice and improve my front-end
                        development skills. The project is a simple AirBnb
                        website that allows users to book rooms, it has both
                        Admin and Home pages.
                      </li>
                      <li>
                        <span className="font-semibold">Technologies:</span>{" "}
                        NextJs with TypeScript, Tailwind CSS, Ant-Design...
                      </li>
                      <li>
                        <span className="font-semibold">Team size:</span> 2
                      </li>
                      <li>
                        <span className="font-semibold">GitHub:</span>{" "}
                        <a
                          href="https://github.com/huynhtuanphong1501/Cybersoft_BC90-Stayease-Booking_Website__Group_5-P.Loc-H.Phong"
                          className="underline"
                        >
                          Link
                        </a>
                      </li>
                      <li>
                        <span className="font-semibold">Live Demo:</span>{" "}
                        <a
                          href="https://cybersoft-bc-90-stayease-booking-we-delta.vercel.app/auth"
                          className="underline"
                        >
                          Link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-[100px_1fr] md:grid-cols-[300px_1fr] items-center gap-4 mt-5">
                  <p>02/2026</p>

                  <div className="">
                    <h2 className="font-bold">
                      PHONG - My Portfolio Website - Self-project
                    </h2>

                    <ul className="text-sm mt-2 space-y-1 list-disc ml-4">
                      <li>
                        <span className="font-semibold">Role:</span> Front-end
                        Developer
                      </li>
                      <li>
                        <span className="font-semibold">Description:</span> A
                        personal project to practice and improve my front-end
                        development skills. The project is a personal portfolio
                        website that showcases my projects and skills.
                      </li>
                      <li>
                        <span className="font-semibold">Technologies:</span>{" "}
                        ReactJS with TypeScript, SCSS, Tailwind CSS, Framer
                        Motion...
                      </li>
                      <li>
                        <span className="font-semibold">Team size:</span> 2
                      </li>
                      <li>
                        <span className="font-semibold">GitHub:</span>{" "}
                        <a
                          href="https://github.com/huynhtuanphong1501/portfolio_htp"
                          className="underline"
                        >
                          Link
                        </a>
                      </li>
                      <li>
                        <span className="font-semibold">Live Demo:</span>{" "}
                        <a
                          href="https://portfolio-htp-e271.vercel.app"
                          className="underline"
                        >
                          Link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-5">
        <button className="btn mt-5">
          <a href="/pdf/Huynh_Tuan_Phong_CV.pdf">View PDF</a>
        </button>
      </div>
    </>
  );
}
