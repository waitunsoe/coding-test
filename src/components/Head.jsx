import React from "react";
import Logo from "../assets/images/logo.png";

const Head = () => {
  return (
    <header class="bg-secondary">
      <div class="container mx-auto">
        <div class="row justify-content-between align-items-center">
          <div class="col-3">
            <a href="#" target="_blank">
              <img src={Logo} class="w-50 object-fit-contain" />
            </a>
          </div>
          <div class="col-9">
            <div class="d-flex justify-content-end">
              <p class="mb-0 mx-3">
                <i class="bi bi-telephone-fill text-info"></i>
                <span class="ms-2">6248 0838</span>
              </p>
              <p class="mb-0 mx-3">
                <i class="bi bi-whatsapp text-info"></i>
                <span class="ms-2">8484 9948</span>
              </p>
              <p class="mb-0 mx-3">
                <i class="bi bi-envelope-fill text-info"></i>
                <span class="ms-2">info@visible.com</span>
              </p>
              <button class="btn btn-sm btn-success mx-3">
                <i class="bi bi-envelope-fill text-white"></i>
                <span class="ms-2">QUOTE</span>
              </button>
              <div class="dropdown">
                <button
                  class="btn btn-sm btn-outline-info dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SG EN
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Head;
