import React from 'react';
import { motion } from 'motion/react';
import Typewriter from './Typewriter';

export default function ContactSection() {
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="w-full bg-white text-black py-24 px-6 md:px-12 lg:px-[120px] flex flex-col items-center justify-center">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="w-full max-w-3xl mx-auto flex flex-col items-center"
      >
        <div className="text-center mb-16 w-full">
          <h2 className="text-[clamp(1.5rem,4vw,3.5rem)] font-medium tracking-tight mb-6 leading-[1.1]">
            <span className="text-black font-dm-serif font-normal italic"><Typewriter text="Let's grow!" delay={0} speed={0.012} /></span> <Typewriter text="Fill in the form" delay={0.2} speed={0.012} /><br />
            <Typewriter text="and we'll be in touch" delay={0.4} speed={0.012} />
          </h2>
          <p className="text-lg md:text-xl text-gray-800">
            <Typewriter text="Ask us about our precision harvesting services" delay={0.6} speed={0.012} />
          </p>
        </div>

        <form className="max-w-2xl w-full mx-auto flex flex-col gap-8">
          <motion.div variants={formVariants} className="flex flex-col gap-2 border-b border-[#D9D9D9] pb-2 transition-colors duration-300 hover:border-black focus-within:border-black">
            <label className="text-sm font-medium">Your Name*</label>
            <input 
              type="text" 
              placeholder="Who's reaching out?" 
              className="w-full bg-transparent outline-none placeholder:text-[#D9D9D9] focus:placeholder:text-gray-500 transition-colors duration-300 text-base"
              required
            />
          </motion.div>

          <motion.div variants={formVariants} className="flex flex-col gap-2 border-b border-[#D9D9D9] pb-2 transition-colors duration-300 hover:border-black focus-within:border-black">
            <label className="text-sm font-medium">Email*</label>
            <input 
              type="email" 
              placeholder="Where can we reach you?" 
              className="w-full bg-transparent outline-none placeholder:text-[#D9D9D9] focus:placeholder:text-gray-500 transition-colors duration-300 text-base"
              required
            />
          </motion.div>

          <motion.div variants={formVariants} className="flex flex-col gap-2 border-b border-[#D9D9D9] pb-2 transition-colors duration-300 hover:border-black focus-within:border-black">
            <label className="text-sm font-medium">Phone Number*</label>
            <input 
              type="tel" 
              placeholder="Best number to call you on?" 
              className="w-full bg-transparent outline-none placeholder:text-[#D9D9D9] focus:placeholder:text-gray-500 transition-colors duration-300 text-base"
              required
            />
          </motion.div>

          <motion.div variants={formVariants} className="flex flex-col gap-2 border-b border-[#D9D9D9] pb-2 transition-colors duration-300 hover:border-black focus-within:border-black">
            <label className="text-sm font-medium">Farm / Company</label>
            <input 
              type="text" 
              placeholder="Your farm or organization?" 
              className="w-full bg-transparent outline-none placeholder:text-[#D9D9D9] focus:placeholder:text-gray-500 transition-colors duration-300 text-base"
            />
          </motion.div>

          <motion.div variants={formVariants} className="flex flex-col gap-2 border-b border-[#D9D9D9] pb-2 transition-colors duration-300 hover:border-black focus-within:border-black">
            <label className="text-sm font-medium">Tell Us More</label>
            <input 
              type="text" 
              placeholder="What crops or acreage would you like to discuss?" 
              className="w-full bg-transparent outline-none placeholder:text-[#D9D9D9] focus:placeholder:text-gray-500 transition-colors duration-300 text-base"
            />
          </motion.div>

          <motion.div variants={formVariants} className="mt-8 flex justify-center">
            <button 
              type="submit"
              className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-[#27BD09] transition-colors duration-300 text-sm tracking-wide"
            >
              Send Message
            </button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}
