import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.tel) {
      alert("Please fill in all fields.");
      return;
    }

    // Sending email with EmailJS
    emailjs
      .send(
        "service_n7vm6m9", // Replace with your EmailJS service ID
        "template_oe009d2", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          tel: formData.tel,
        },
        "17lAGwzQ7QCTIQsuv" // Replace with your EmailJS public key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", tel: "" }); // Reset form
      })
      .catch((err) => {
        console.error("Failed to send message:", err);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="relative flex items-top justify-center min-h-screen bg-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-6 bg-gray-100 rounded-lg">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-800 sm:text-3xl md:text-4xl">
                Get in touch:
              </h1>
              <p className="mt-2 text-lg font-medium text-gray-600 sm:text-xl">
                Fill in the form to start a conversation.
              </p>
              <div className="mt-8 space-y-4 text-gray-600">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-500 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="ml-4 font-semibold text-md sm:text-lg">
                    Dayalbagh, Agra, Uttar Pradesh, 282005
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-500 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="ml-4 font-semibold text-md sm:text-lg">
                    +917351240931
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-500 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="ml-4 font-semibold text-md sm:text-lg">
                    pankajsuman806041@gmail.com
                  </span>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center p-6 bg-white rounded-lg"
            >
              <div className="flex flex-col mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="px-4 py-2 mt-2 font-semibold text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:border-black focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="px-4 py-2 mt-2 font-semibold text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:border-black focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <input
                  type="tel"
                  name="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  placeholder="Telephone Number"
                  className="px-4 py-2 mt-2 font-semibold text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:border-black focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 mt-4 font-bold text-white bg-black rounded-lg hover:bg-gray-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
