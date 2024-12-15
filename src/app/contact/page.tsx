"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      console.log("Message sent:", result);
      setSubmissionSuccess(true); // Optionally, show a success message
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 className="text-4xl font-bold mb-8 text-blue-400" {...fadeIn}>
        Contact Us
      </motion.h1>
      <motion.div className="max-w-md mx-auto" {...fadeIn}>
        <p className="mb-8">
          Have questions or want to get involved? Reach out to us!
        </p>
        {submissionSuccess && (
          <p className="text-green-500">Message sent successfully!</p>
        )}
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-800 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-800 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-800 rounded"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
