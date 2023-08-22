import React, { useState } from "react";
import Desktop from "../assets/images/desktop.png";
import Mobile from "../assets/images/mobile.png";
import { motion } from "framer-motion";

const OldWebsiteProblems = () => {
  const [showMobile, setShowMobile] = useState(false);
  const handleSwitch = () => {
    setShowMobile(!showMobile);
  };
  return (
    <section class="container my-5 py-5 overflow-hidden">
      <div class="row position-relative justify-content-end align-items-center overflow-hidden">
        <div class="col-8 bg-info text-white p-5 pb-0">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            class="position-absolute start-0 top-0"
          >
            <img
              src={showMobile ? Mobile : Desktop}
              alt=""
              class={
                showMobile ? "object-fit-cover w-60" : "w-50 object-fit-contain"
              }
            />
          </motion.div>
          {showMobile ? (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              class="px-5 ms-8"
            >
              <h3 class="mb-4">Their Old Website & Problems (Phone)</h3>
              <div id="oldWebsiteProblem" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="d-flex gap-2 mb-2">
                      <i class="bi bi-arrow-right"></i>
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam
                      </p>
                    </div>

                    <div class="d-flex gap-2 mb-2">
                      <i class="bi bi-arrow-right"></i>
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam
                      </p>
                    </div>

                    <div class="d-flex gap-2 mb-2">
                      <i class="bi bi-arrow-right"></i>
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="btn btn-sm text-white"
                type="button"
                data-bs-target="#oldWebsiteProblem"
                data-bs-slide="prev"
              >
                <i class="bi bi-chevron-compact-left"></i>
              </button>
              <button
                class="btn btn-sm text-white"
                type="button"
                data-bs-target="#oldWebsiteProblem"
                data-bs-slide="next"
              >
                <i class="bi bi-chevron-compact-right"></i>
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              class="px-5 ms-8"
            >
              <h3 class="mb-4">Their Old Website & Problems (Desktop)</h3>
              <div id="oldWebsiteProblem" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="d-flex gap-2 mb-2">
                      <i class="bi bi-arrow-right"></i>
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam
                      </p>
                    </div>

                    <div class="d-flex gap-2 mb-2">
                      <i class="bi bi-arrow-right"></i>
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam
                      </p>
                    </div>

                    <div class="d-flex gap-2 mb-2">
                      <i class="bi bi-arrow-right"></i>
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="btn btn-sm text-white"
                type="button"
                data-bs-target="#oldWebsiteProblem"
                data-bs-slide="prev"
              >
                <i class="bi bi-chevron-compact-left"></i>
              </button>
              <button
                class="btn btn-sm text-white"
                type="button"
                data-bs-target="#oldWebsiteProblem"
                data-bs-slide="next"
              >
                <i class="bi bi-chevron-compact-right"></i>
              </button>
            </motion.div>
          )}

          <label class="switch d-block mt-3 px-5 ms-8">
            <input
              type="checkbox"
              defaultChecked={true}
              id="togBtn"
              onChange={handleSwitch}
            />
            <div class="slider round">
              <span class={showMobile ? "off" : "on"}>
                {showMobile ? (
                  <>
                    <i class="bi bi-phone"></i> <span>Mobile</span>
                  </>
                ) : (
                  "Desktop"
                )}
              </span>
            </div>
          </label>
        </div>
      </div>
    </section>
  );
};

export default OldWebsiteProblems;
