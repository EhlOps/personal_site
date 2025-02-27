/* eslint-disable */
"use client";

import { useState, FormEvent } from "react";
import FormData from "form-data";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Mailgun from "mailgun.js";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    // Send to API
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
      username: "api",
      key: process.env.API_KEY || "API_KEY",
    });
    try {
      await mg.messages.create(process.env.MAILGUN, {
        from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN}>`,
        to: [`Sam Ehlers <${process.env.EMAIL}>`],
        subject: "Hello Sam Ehlers!",
        text: `From ${formData.name} - ${formData.email}:\n${formData.message}`,
      });
    } catch (error) {
      console.log(error); //logs any error
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setSubmitted(true);

    // Reset submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <section className="section">
        <h2 className="flex items-center text-lg mb-4">
          <span className="mr-2">📧</span>Contact Me
        </h2>

        {submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Thank you for your message! I'll get back to you soon.
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-xs mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-xs mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-xs mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-gray-800 text-white px-4 py-2 rounded text-xs hover:bg-gray-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
