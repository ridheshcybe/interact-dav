"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GradientText } from "@/app/components/gradient-text";

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grade: 9,
    reason: "",
  });
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // For feedback to user
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submitjoin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        alert("FAILED TO SUBMIT (check logs)");
        throw new Error("Failed to submit application");
      }

      const result = await response.json();
      setSubmissionSuccess(true);
      setFormData({ name: "", email: "", grade: 10, reason: "" }); // Clear form
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen pt-32 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8"
        >
          <h1 className="text-3xl font-bold mb-6 text-center">
            <GradientText>Join Interact Club</GradientText>
          </h1>

          {submissionSuccess && (
            <p className="text-green-500">
              Application submitted successfully!
            </p>
          )}
          {error && <p className="text-red-500">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormField
              label="Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />

            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <div className="space-y-2">
              <label htmlFor="grade" className="block text-sm text-gray-400">
                Grade
              </label>
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={(e) =>
                  setFormData({ ...formData, grade: parseInt(e.target.value) })
                }
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
              >
                <option value="">Select Grade</option>
                <option value="9">9th Grade</option>
                <option value="10">10th Grade</option>
                <option value="11">11th Grade</option>
                <option value="12">12th Grade</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="reason" className="block text-sm text-gray-400">
                Why do you want to join?
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={(e) =>
                  setFormData({ ...formData, reason: e.target.value })
                }
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-teal-400 to-blue-400 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Submit Application
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

function FormField({
  label,
  name,
  type,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm text-gray-400">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
      />
    </div>
  );
}
