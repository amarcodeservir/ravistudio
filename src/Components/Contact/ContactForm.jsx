import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
    message: "",
  });

  const fields = [
    { id: "name", label: "Name", type: "text", placeholder: "Enter your name" },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: "address",
      label: "Address",
      type: "text",
      placeholder: "Enter your address",
    },
    {
      id: "contact",
      label: "Contact",
      type: "tel",
      placeholder: "Enter your contact number",
    },
    {
      id: "message",
      label: "Why Contact",
      type: "textarea",
      placeholder: "Enter your message",
    },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center p-6 pt-20">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.id} className="flex flex-col">
              <label
                htmlFor={field.id}
                className="text-gray-700 font-semibold mb-2"
              >
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows="4"
                />
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  value={formData[field.id]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-bold text-lg hover:from-purple-500 hover:to-blue-500 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
