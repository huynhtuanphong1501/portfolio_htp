import "../../Home/css/style.css";

export default function Card({
  title,
  description,
  tech,
  image,
  link,
  live,
}: {
  title: string;
  description: string;
  tech: string;
  image: string;
  link: string;
  live?: string;
}) {
  return (
    <div className="w-full max-w-[500px] bg-black border border-gray-700 rounded-2xl shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col items-center justify-center">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <p className="text-gray-100 mb-3 text-center">{description}</p>
        <p className="text-gray-100 text-sm mb-3">
          <span className="font-bold">Tech:</span> {tech}
        </p>
        <div className="flex gap-3">
          <button className="btn mt-5">
            <a href={link}>View Project</a>
          </button>
          {live && (
            <button className="btn mt-5">
              <a href={live}>Live Demo</a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
