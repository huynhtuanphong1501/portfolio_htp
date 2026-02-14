export default function index() {
  return (
    <div className="container mx-auto mt-3 px-4">
      <div className="bg-white w-[100%]">
        {/* intro */}
        <div className="text-black flex justify-center items-center flex-col pt-[100px]">
          <h1 className="font-bold text-2xl">Huynh Tuan Phong</h1>
          <h2>Front-end Developer</h2>
          <h2>Phone: (+84) 965784321</h2>
          <h2>Email: phonghuynh1501@gmail.com</h2>
          <h2>Dob: 15/01/2001</h2>
        </div>
        {/* summary */}
        <div className="mt-[20px] text-black px-[50px] md:mt-[50px]">
          <div className="">
            <h1 className="font-bold text-2xl">SUMMARY</h1>
            <hr />
            <div className="pt-5 px-4">
              <p>
                I'm a front-end developer with 1 year of experince in building
                web applications. I have experience with React, JavaScript, and
                CSS/SCSS, Tailwind CSS..., and I'm always willing to learn new
                technologies to enhance my skills.
              </p>
              <p>
                I love to create beautiful and functional websites that provide
                a great user experience. I'm a team player and I enjoy
                collaborating with other developers, designers, and stakeholders
                to create amazing web applications.
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
              <div className="text-sm mr-[100px] flex items-center justify-center">
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
              <div className="text-sm mr-[100px] flex items-center justify-center">
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
                <p className="text-sm"> - Completed Year 2 to Year 4 at VSB</p>
              </div>
            </div>
          </div>
        </div>
        {/* personal experience */}
        <div className="mt-[20px] text-black px-[50px] md:mt-[50px]">
          <div className="">
            <h1 className="font-bold text-2xl">PERSONAL EXPERIENCE</h1>
            <hr />
            <div className="pt-5 px-4">
              <div className="flex">
                <div className="text-sm mr-[100px] flex items-center justify-center">
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
                <div className="text-sm mr-[100px] flex items-center justify-center">
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
        </div>
      </div>
    </div>
  );
}
