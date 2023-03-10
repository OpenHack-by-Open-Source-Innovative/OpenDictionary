import React from 'react'

function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
  <div class="container-fluid">
    <div class="d-flex"><a href="index.html" class="navbar-brand text-uppercase font-weight-bold"><span>Directory</span></a>
      <form action="#" id="search" class="form-inline d-none d-sm-flex">
        <div class="input-label-absolute input-label-absolute-left input-reset input-expand ml-lg-2 ml-xl-3">
          <label for="search_search" class="label-absolute"><i class="fa fa-search"></i><span class="sr-only">What are you looking for?</span></label>
          <input id="search_search" placeholder="Search" aria-label="Search" class="form-control form-control-sm border-0 shadow-0 bg-gray-200"/>
          <button type="reset" class="btn btn-reset btn-sm"><i class="fa-times fas"></i></button>
        </div>
      </form>
    </div>
    <button type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>

    <div id="navbarCollapse" class="collapse navbar-collapse">
      <form action="#" id="searchcollapsed" class="form-inline my-2 d-sm-none">
        <div class="input-label-absolute input-label-absolute-left input-reset w-100">
          <label for="searchcollapsed_search" class="label-absolute"><i class="fa fa-search"></i><span class="sr-only">What are you looking for?</span></label>
          <input id="searchcollapsed_search" placeholder="Search" aria-label="Search" class="form-control form-control-sm border-0 shadow-0 bg-gray-200"/>
          <button type="reset" class="btn btn-reset btn-sm"><i class="fa-times fas">           </i></button>
        </div>
      </form>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown"><a id="homeDropdownMenuLink" href="index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle active">
                   
                  Home</a>
          <div aria-labelledby="homeDropdownMenuLink" class="dropdown-menu"><a href="index.html" class="dropdown-item">Rooms</a><a href="index-2.html" class="dropdown-item">Restaurants</a></div>
        </li>
    
        <li class="nav-item dropdown position-static"><a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle">Template</a>
          <div class="dropdown-menu megamenu py-lg-0">
            <div class="row">
              <div class="col-lg-9">
                <div class="row p-3 pr-lg-0 pl-lg-5 pt-lg-5">
                  <div class="col-lg-3">
              
                    <h6 class="text-uppercase">Homepage</h6>
                    <ul class="megamenu-list list-unstyled">
                      <li class="megamenu-list-item"><a href="index.html" class="megamenu-list-link">Rooms   </a></li>
                      <li class="megamenu-list-item"><a href="index-2.html" class="megamenu-list-link">Restaurants   </a></li>
                    </ul>
                
                    <h6 class="text-uppercase">Restaurants</h6>
                    <ul class="megamenu-list list-unstyled">
                      <li class="megamenu-list-item"><a href="category.html" class="megamenu-list-link">Category - Map on the top   </a></li>
                      <li class="megamenu-list-item"><a href="category-2.html" class="megamenu-list-link">Category - Map on the right   </a></li>
                      <li class="megamenu-list-item"><a href="category-3.html" class="megamenu-list-link">Category - no map   </a></li>
                      <li class="megamenu-list-item"><a href="detail.html" class="megamenu-list-link">Restaurant detail   </a></li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
             
                    <h6 class="text-uppercase">Rooms</h6>
                    <ul class="megamenu-list list-unstyled">
                      <li class="megamenu-list-item"><a href="category-rooms.html" class="megamenu-list-link">Category - Map on the top   </a></li>
                      <li class="megamenu-list-item"><a href="category-2-rooms.html" class="megamenu-list-link">Category - Map on the right   </a></li>
                      <li class="megamenu-list-item"><a href="category-3-rooms.html" class="megamenu-list-link">Category - no map   </a></li>
                      <li class="megamenu-list-item"><a href="detail-rooms.html" class="megamenu-list-link">Room detail   </a></li>
                    </ul>
                
                    <h6 class="text-uppercase">Blog</h6>
                    <ul class="megamenu-list list-unstyled">
                      <li class="megamenu-list-item"><a href="blog.html" class="megamenu-list-link">Blog   </a></li>
                      <li class="megamenu-list-item"><a href="post.html" class="megamenu-list-link">Post   </a></li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
              
                    <h6 class="text-uppercase">Pages</h6>
                    <ul class="megamenu-list list-unstyled">
                      <li class="megamenu-list-item"><a href="contact.html" class="megamenu-list-link">Contact   </a></li>
                      <li class="megamenu-list-item"><a href="pricing.html" class="megamenu-list-link">Pricing   </a></li>
                      <li class="megamenu-list-item"><a href="text.html" class="megamenu-list-link">Text page   </a></li>
                      <li class="megamenu-list-item"><a href="faq.html" class="megamenu-list-link">F.A.Q.s  <span class="badge badge-info ml-1">New</span>   </a></li>
                      <li class="megamenu-list-item"><a href="coming-soon.html" class="megamenu-list-link">Coming soon   </a></li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
   
                    <h6 class="text-uppercase">Documentation</h6>
                    <ul class="megamenu-list list-unstyled">
                      <li class="megamenu-list-item"><a href="docs/docs-introduction.html" class="megamenu-list-link">Introduction   </a></li>
                      <li class="megamenu-list-item"><a href="docs/docs-directory-structure.html" class="megamenu-list-link">Directory structure   </a></li>
                      <li class="megamenu-list-item"><a href="docs/docs-gulp.html" class="megamenu-list-link">Gulp   </a></li>
                      <li class="megamenu-list-item"><a href="docs/docs-customizing-css.html" class="megamenu-list-link">Customizing CSS   </a></li>
                      <li class="megamenu-list-item"><a href="docs/docs-credits.html" class="megamenu-list-link">Credits   </a></li>
                    </ul>
     
                    <h6 class="text-uppercase">Components</h6>
                    <ul class="megamenu-list list-unstyled">
                      <li class="megamenu-list-item"><a href="docs/components-bootstrap.html" class="megamenu-list-link">Bootstrap   </a></li>
                      <li class="megamenu-list-item"><a href="docs/components-directory.html" class="megamenu-list-link">Theme   </a></li>
                    </ul>
                  </div>
                </div>
                <div class="row megamenu-services d-none d-lg-flex pl-lg-5">
                  <div class="col-xl-3 col-lg-6 d-flex">
                    <div class="megamenu-services-item">
                      
                      <div>
                        <h6 class="text-uppercase">Best rentals</h6>
                        <p class="mb-0 text-muted text-sm">Find the perfect place</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 d-flex">
                    <div class="megamenu-services-item">
                      
                      <div>
                        <h6 class="text-uppercase">Earn points</h6>
                        <p class="mb-0 text-muted text-sm">And get great rewards</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 d-flex">
                    <div class="megamenu-services-item">
                      
                      <div>
                        <h6 class="text-uppercase">020-800-456-747</h6>
                        <p class="mb-0 text-muted text-sm">24/7 Available Support</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 d-flex">
                    <div class="megamenu-services-item">
                      
                      <div>
                        <h6 class="text-uppercase">Secure Payment</h6>
                        <p class="mb-0 text-muted text-sm">Secure Payment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 d-none d-lg-block"><img src="https://d19m59y37dris4.cloudfront.net/directory/1-0/img/photo/photo-1521170665346-3f21e2291d8b.jpg" alt="" class="bg-image"/></div>
            </div>
          </div>
        </li>
    
        <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a>
        </li>
        <li class="nav-item dropdown"><a id="docsDropdownMenuLink" href="index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle ">
                   
                  Docs</a>
          <div aria-labelledby="docsDropdownMenuLink" class="dropdown-menu dropdown-menu-right">
            <h6 class="dropdown-header font-weight-normal">Documentation</h6><a href="docs/docs-introduction.html" class="dropdown-item">Introduction </a><a href="docs/docs-directory-structure.html" class="dropdown-item">Directory structure </a><a href="docs/docs-gulp.html" class="dropdown-item">Gulp </a>
            <a
              href="docs/docs-customizing-css.html" class="dropdown-item">Customizing CSS </a><a href="docs/docs-credits.html" class="dropdown-item">Credits </a>
              <div class="dropdown-divider"></div>
              <h6 class="dropdown-header font-weight-normal">Components</h6><a href="docs/components-bootstrap.html" class="dropdown-item">Bootstrap </a><a href="docs/components-directory.html" class="dropdown-item">Theme </a>
          </div>
        </li>
        <li class="nav-item d-flex align-items-center ml-lg-3">
          <a href="#" class=""><img alt="Image" src="https://demo.bootstrapious.com/directory/1-0/img/avatar/avatar-5.jpg" class="avatar avatar-sm"/></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar