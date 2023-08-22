import React from "react";
import { motion } from "framer-motion";

import Tablet from "../assets/images/tablet.png";

const Tripo = () => {

  return (
    <section class="container mt-5 pt-8 overflow-hidden">
      <div class="row justify-content-center align-items-center">
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          class="col-5"
        >
          <h3 className="mb-4">
            <span className="fw-bold trippro-border pb-2">ABOUT </span>
            <span className="trippro">TRIPPRO</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita
          </p>
          <button class="btn btn-info text-white px-4 py-2 mt-2">
            TOUR TO WEBSITE
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          class="col-5"
        >
          <div>
            <img src={Tablet} alt="" class="w-100" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tripo;
