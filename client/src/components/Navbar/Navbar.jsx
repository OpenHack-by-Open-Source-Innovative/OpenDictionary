import React from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
        <div class="container-fluid">
          <div class="d-flex">
            <a
              href="/"
              class="navbar-brand text-uppercase font-weight-bold"
            >
              <span>OpenDictionary</span>
            </a>
          </div>
          <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
              <button type="button" class="btn btn-primary">SignIn</button>
              </li>
              <li class="nav-item d-flex align-items-center ml-lg-3">
                <a href="#" class="">
                  <img
                    alt="Image"
                    src="https://demo.bootstrapious.com/directory/1-0/img/avatar/avatar-5.jpg"
                    class="avatar avatar-sm"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
