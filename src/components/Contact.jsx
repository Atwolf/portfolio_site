import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { CoffeeCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// template_k42f054
// service_f0jc6nd
// _28fE6Nk0JXllH1o5

const Contact = () => {
  const formRef  = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (form.name && form.email && form.message) {
      emailjs.send('service_f0jc6nd', 'template_k42f054', {
        from_name: form.name,
        to_name: 'Aakash',
        from_email: form.email,
        to_email: 'modernawe@gmail.com',
        message: form.message
      },
      '_28fE6Nk0JXllH1o5'
      ).then(() => {
        setLoading(false);
        alert('Thank you for your submission. I will get back to you as soon as possible.');
  
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)
  
        console.log(error);
  
        alert('Something went wrong. Please reach out directly to my email @ modernawe@gmail.com')
      })
    } else {
      alert('Please fill out all the fields.')
    }
  }
    

  return(
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className="flex-[0.75] bg-coffee p-8 rounded-2xl">
        <p className={styles.contactSubText}>Get in Touch</p>
        <h3 className={styles.contactHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-coffee-900 font-medium mb-4">Your Name</span>
              <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-coffee-900 py-4 px-6 placeholder:text-secondary text-pacific_cyan roudned-lg outlined-none border-none font-medium"/>
            </label>
            <label className="flex flex-col">
              <span className="text-coffee-900 font-medium mb-4">Your Email</span>
              <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-coffee-900 py-4 px-6 placeholder:text-secondary text-pacific_cyan roudned-lg outlined-none border-none font-medium"/>
            </label>
            <label className="flex flex-col">
              <span className="text-coffee-900 font-medium mb-4">Your Message</span>
              <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-coffee-900 py-4 px-6 placeholder:text-secondary text-pacific_cyan roudned-lg outlined-none border-none font-medium"/>
            </label>
            <button
              type='submit'
              className="bg-coffee-900 py-3 px-8 outline-none w-fit text-coffee font-bold shadow-md rounded-xl mx-auto">
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <CoffeeCanvas/>
      </motion.div>
    
    </div>
  )
};

export default SectionWrapper(Contact, "contact");
