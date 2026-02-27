import React, { useState } from "react";
import "../Home/css/style.css";
import CopyCard from "./card/index";
export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "df70652f-45a8-471f-b0d1-ee5667f90612");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data: { success: boolean; message?: string } =
        await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <>
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-center">
        <form className="w-[400px] p-4" onSubmit={onSubmit}>
          <h2 className="text-white text-2xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-300 mb-4">
            Feel free to reach out to me using the form below or through the
            contact information on the right.
          </p>
          {status === "loading" && (
            <div className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded">
              Sending message...
            </div>
          )}
          {status === "success" && (
            <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded">
              <strong>Success!</strong> Message sent successfully.
            </div>
          )}
          {status === "error" && (
            <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded">
              Something went wrong. Please try again.
            </div>
          )}
          <div className="flex items-center mb-2">
            <i className="fa-solid fa-user fa-xs"></i>
            <label className="text-white ml-2">Your Name</label>
          </div>

          <input
            type="text"
            name="name"
            placeholder="Ex: Huynh Tuan Phong"
            required
            className="w-full p-2 mb-2 border rounded text-black"
          />
          <div className="flex items-center mb-2">
            <i className="fa-solid fa-message fa-xs"></i>
            <label className="text-white ml-2">Your Email</label>
          </div>

          <input
            type="email"
            name="email"
            placeholder="Ex: example@gmail.com"
            required
            className="w-full p-2 mb-2 border rounded text-black"
          />
          <div className="flex items-center mb-2">
            <i className="fa-solid fa-envelope fa-xs"></i>
            <label className="text-white ml-2">Your Message</label>
          </div>

          <textarea
            name="message"
            placeholder="Ex: Hello, I want to contact you for a project collaboration."
            required
            className="w-full h-[150px] p-2 mb-2 border rounded text-black"
          ></textarea>

          <button className="btn cursor-pointer" type="submit">
            Submit Form
          </button>
        </form>

        <div className="flex flex-col mt-5 gap-4 md:ml-10 md:mt-5 items-center justify-center">
          <CopyCard label="Email" value="phonghuynh1501@gmail.com" />

          <CopyCard label="Phone" value="+84 965 784 321" />
        </div>
      </div>
    </>
  );
}
