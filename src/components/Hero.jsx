import React from "react";
import Responsive from "../assets/images/responsive.png";
import Wordpess from "../assets/images/wordpress-development-logo-banner.png";
import ShoppingCart from "../assets/images/shopping-cart.png";
import HeroImg from "../assets/images/hero-img.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main class="hero">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="text-center text-white mt-5">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                class="mb-4 display-5 fw-normal"
              >
                TRIPPRO - AN ECOMMERCE SOLUTION
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                class="mb-5"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae nisi quaerat dolorem omnis, corporis reprehenderit
                error eveniet architecto magnam fugit eos asperiores eum, natus
                reiciendis minus esse, incidunt earum nostrum.
              </motion.p>
              <div class="d-flex justify-content-center">
                <motion.div
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                  }}
                >
                  <span class="fs-5 fw-bold">Built For:</span>
                  <img src={Responsive} alt="" class="mx-3" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{
                    scale: 1,
                    transition: { duration: 1 },
                  }}
                  class="vertical-divider mx-4"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                  }}
                  class="d-flex"
                >
                  <div>
                    <p class="mb-0 fs-5">Technologies:</p>
                    <p class="fs-5 fw-bold">Wordpress</p>
                  </div>
                  <img src={Wordpess} alt="" class="mx-3 object-fit-contain" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{
                    scale: 1,
                    transition: { duration: 1 },
                  }}
                  class="vertical-divider mx-4"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                  }}
                  class="d-flex"
                >
                  <div>
                    <p class="mb-0 fs-5">Industry:</p>
                    <p class="fs-5 fw-bold">Ecommerce</p>
                  </div>
                  <img
                    src={ShoppingCart}
                    alt=""
                    class="mx-3 object-fit-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: { duration: 1 },
              }}
              class="my-5"
            >
              <img src={HeroImg} alt="" class="w-100" />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
