import Card from "./Card";

export default function index() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center mt-5">Thesis</h1>
      <div className="grid grid-cols-1 place-items-center gap-4">
        <Card
          title="Trie Data Structure"
          description="This is my thesis project about Trie data structure. I implemented a Trie data structure in C++ and used it to solve some problems related to string processing. The project is available on my GitHub profile."
          tech="C++"
          image="/img/thesis.png"
          link="https://github.com/huynhtuanphong1501/Trie_Thesis_VSB_2025/tree/main"
        />
      </div>

      <h1 className="text-2xl font-bold mb-4 text-center mt-5">
        Learning Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        <Card
          title="Phong Phone"
          description="This is an e-commerce website project. It is a phone store website built with HTML5, SCSS, and JavaScript. The project is available on my GitHub profile."
          tech="HTML5, SCSS, JavaScript"
          image="/img/pp.png"
          link="https://github.com/huynhtuanphong1501/SASS_CAPSTONE2"
          live="https://sass-capstone-2.vercel.app"
        />

        <Card
          title="CinemaXYZ"
          description="This is a cinema website project with full functionality. It is built with React and Tailwind CSS. The project is available on my GitHub profile."
          tech="React, Tailwind CSS"
          image="/img/cinema.png"
          link="https://github.com/huynhtuanphong1501/capstoneCinema/tree/main"
          live="https://capstone-cinema.vercel.app"
        />

        <Card
          title="LockWind - Admin side"
          description="This is an airBnb clone project. It is an admin side of a booking website built with React and Tailwind CSS. The project is available on my GitHub profile."
          tech="NextJS, Tailwind CSS"
          image="/img/lw.png"
          link="https://github.com/huynhtuanphong1501/Cybersoft_BC90-Stayease-Booking_Website__Group_5-P.Loc-H.Phong"
          live="https://cybersoft-bc-90-stayease-booking-we-delta.vercel.app/auth"
        />
      </div>

      <h1 className="text-2xl font-bold mb-4 text-center mt-5">
        Personal Projects
      </h1>
      <div className="grid grid-cols-1 place-items-center gap-4">
        <Card
          title="PHONG - My Portfolio Website"
          description="This is my personal portfolio website built with React and Tailwind CSS."
          tech="React, Tailwind CSS"
          image="/img/port.png"
          link="https://github.com/huynhtuanphong1501/portfolio_htp"
          live="https://portfolio-htp-e271.vercel.app"
        />
      </div>
    </div>
  );
}
