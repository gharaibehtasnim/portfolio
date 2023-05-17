import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
const Contact = () => {
  const fromRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_7bx7uou",
        "template_5y9xr2e",
        {
          from_name: form.name,
          to_name: "Tasnim",
          from_email: form.email,
          to_email: "tasnim.gharaibeh@gmail.com",
          message: form.message,
        },
        "arJPEh7CV2C0bU9Gw"
      )
      .then(
        (result) => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Somthing went wrong.");
        }
      );
  };
  return (
    <div id="contact" className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overdlow-hidden ml-12">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get intouch</p>
        <h3 className={styles.sectionHeadText}>contact.</h3>

        <form
          ref={fromRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="whats Your name?"
              className="p-[12px] bg-text-secondary text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="whats Your email?"
              className="p-[12px] bg-text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>

            <textarea
              row="7"
             
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="whats Your message?"
              className="p-[12px] bg-text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
          >
            {loading ? "Sending.." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto mdLh-[550px] "
      >
        <img className="h-[420px] " src="https://cdn-blog.adafruit.com/uploads/2017/10/3d-gif-6.gif" />
      </motion.div>
    </div>
    // <div>
    //   <img src="https://images.squarespace-cdn.com/content/v1/5fb6ae7440ecb130e0423409/1612814076750-K0I7IXOK3QN8RYOBAFD3/Contact+us.gif"/>
    // </div>
  );
};

export default Contact;
