import React from "react";
import "./SectionN.css"

function SectionN() {
  return (
    <div class="container my-5">
      <footer
        class="text-center text-lg-start text-white"
        style={{backgroundColor: "#45526e", maxWidth:"100%"}}>
        <div class="container p-4 pb-0">
          <section class="">
            <div class="row">
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  Critavio - The Design Lounge
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Corporate</h6>
                <p>
                  <a href="../sectionF/SectionF.js" class="text-white">About Us</a>
                </p>
                <p>
                  <a href="../SectionFi/SectionFi.js" class="text-white">Projects</a>
                </p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  Address
                </h6>
                <p>
                R-2, Above Basilio's Gym, 4th floor, St.Inez, Panaji, Goa - 403 004
                </p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Contact Us</h6>
                <p>
                  <i class="fas fa-envelope mr-3"></i> info@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> Office : +91 98238 21000 
                </p>
                <p>
                  <i class="fas fa-print mr-3"></i> Usha : +91 98221 44566
                </p>
                <p>
                  <i class="fas fa-print mr-3"></i> Roopa : +91 98238 21000
                </p>
              </div>
            </div>
          </section>

          <hr class="my-3"></hr>

          <section class="p-3 pt-0">
            <div class="row d-flex align-items-center">
              <div class="col-md-7 col-lg-8 text-center text-md-start">
                <div class="p-3">
                  © 2021 Criativo, All Rights Reserved Powered by Digit Cure: <br/>
                  <a class="text-white" href="https://criativo.vercel.app/">
                   criativo.vercel.app
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default SectionN;
