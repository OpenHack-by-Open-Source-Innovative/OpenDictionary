import React from 'react'
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn'

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
        <div class="container-fluid">
          <div class="d-flex"><a href="index.html" class="navbar-brand text-uppercase font-weight-bold"><span>Directory</span></a>
            <form action="#" id="search" class="form-inline d-none d-sm-flex">
              <div class="input-label-absolute input-label-absolute-left input-reset input-expand ml-lg-2 ml-xl-3">
                <label for="search_search" class="label-absolute"><i class="fa fa-search"></i><span class="sr-only">What are you looking for?</span></label>
                <input id="search_search" placeholder="Search" aria-label="Search" class="form-control form-control-sm border-0 shadow-0 bg-gray-200" />
                <button type="reset" class="btn btn-reset btn-sm"><i class="fa-times fas"></i></button>
              </div>
            </form>
          </div>
          
          <button type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
          
          <div id="navbarCollapse" class="collapse navbar-collapse">

            <ul class="navbar-nav ml-auto">
              <li>
              <GoogleSignIn/>
              </li>
              <li class="nav-item dropdown"><a id="homeDropdownMenuLink" href="index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle active">

                Home</a>
                <div aria-labelledby="homeDropdownMenuLink" class="dropdown-menu"><a href="index.html" class="dropdown-item">Rooms</a><a href="index-2.html" class="dropdown-item">Restaurants</a></div>
              </li>
              <li class="nav-item d-flex align-items-center ml-lg-3">
                <a href="#" class=""><img alt="Image" src="https://demo.bootstrapious.com/directory/1-0/img/avatar/avatar-5.jpg" class="avatar avatar-sm" /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar