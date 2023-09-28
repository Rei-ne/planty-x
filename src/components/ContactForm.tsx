import React, { useState, useEffect } from "react";

export default function ContactForm(): JSX.Element {
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a form data object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        const data = await response.json();
        setResponseMessage(data.message);
      } else {
        console.error("An error occurred while submitting the form");
      }

      setIsSubmitting(false);
    } catch (error) {
      console.error("An error occurred while submitting the form", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block font-medium">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border rounded"
          required
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border rounded"
          required
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 border rounded"
          required
          value={message}
          onChange={handleMessageChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="px-4 py-2 bg-green text-black rounded hover:bg-blue-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
      {responseMessage && <p>Your message: {responseMessage}</p>}
    </form>
  );
}
