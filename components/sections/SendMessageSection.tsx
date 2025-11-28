"use client";

import { useRef, useState } from "react";
import { toast } from "react-toastify";

const SendMessageSection = () => {
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const messageRef = useRef<HTMLInputElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default immediately

    if (!fullName || !message) {
      toast.warning("Please fill in all required fields!");
      return;
    }

    const data = { fullName, message };

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Your message has been sent!");
        setFullName("");
        setMessage("");
      } else {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      messageRef.current?.focus();
    }
  };

  const handleMessageKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      (e.currentTarget.form as HTMLFormElement).requestSubmit();
    }
  };

  return (
    <div className="flex flex-col items-center pt-24">
      <div className="mt-12 w-[90%]">
        <div className="text-center text-primary px-8 space-y-8 shadow-sm backdrop-blur-sm py-8 border-2 border-primary rounded-lg">
          <h1 className="text-2xl font-subheading font-medium">ផ្ញើសារជូនពរ</h1>

          <div id="contact-form" className="">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col font-text gap-2">
                <input
                  name="name"
                  placeholder="ឈ្មោះ..."
                  disabled={isSubmitting}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onKeyDown={handleNameKeyDown}
                  required
                  className="border-2 border-primary rounded-lg px-4 py-2"
                />

                <input
                  name="message"
                  placeholder="សារជូនពររបស់អ្នក..."
                  ref={messageRef}
                  disabled={isSubmitting}
                  value={message}
                  onKeyDown={handleMessageKeyDown}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="border-2 border-primary rounded-lg px-4 py-2"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`font-text font-medium px-8 py-2 border-2 shadow-sm border-primary rounded-lg transition-all
                  ${
                    isSubmitting
                      ? "cursor-not-allowed opacity-60"
                      : "cursor-pointer hover:text-white hover:bg-primary"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
                      កំពុងផ្ញើរ...
                    </div>
                  ) : (
                    "បញ្ជូនសារ"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessageSection;
