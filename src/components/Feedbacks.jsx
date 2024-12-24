import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({ index, image, name }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl w-full max-w-[820px]" // Restrict width to 820px
  >
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px] text-center mb-5">{name}</p>
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt={`resume_by-${name}`}
          className="rounded-xl object-cover" // Ensures image respects the exact dimensions
          style={{
            width: "820px", // Set fixed width
            height: "1050px", // Set fixed height
          }}
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  // Replace with the path to your resume's image
  const resumeImage = "src/assets/Resume.png";

  const testimonials = [
    {
      name: "My Resume",
      image: resumeImage,
    },
  ];

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Resume.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-5 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
