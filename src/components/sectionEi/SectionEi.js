import React from "react";

import "./SectionEi.css";
import { Button } from "react-bootstrap";

function SectionEi() {
  return (
    <div className="sectionEI">
      <h2 className="heading">Let Us Help Visualize your Dreams</h2>
      <div className="FormsMain">
        <div className="Forms">
          <form>
            <div class="row">
              <div class="col">
                <label for="firstname">Enter First Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  id="firstname"
                  required
                ></input>
              </div>
              <div class="col">
                <label for="lastname">Enter Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  id="lastname"
                  required
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="telephone">Telephone</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Number"
                  id="telephone"
                  required
                ></input>
              </div>
              <div class="col">
                <label for="Mail">Enter Mail ID</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Mail ID"
                  id="mail"
                  required
                ></input>
              </div>
              <div><h5>Services</h5>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                ></input>
                <label class="custom-control-label" for="customCheck1">
                  Architectural
                </label>
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck2"
                ></input>
                <label class="custom-control-label" for="customCheck2">
                  Interior
                </label>
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck3"
                ></input>
                <label class="custom-control-label" for="customCheck3">
                  Office
                </label>
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck4"
                ></input>
                <label class="custom-control-label" for="customCheck4">
                  Apartments
                </label>
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck5"
                ></input>
                <label class="custom-control-label" for="customCheck5">
                  Showrooms
                </label>
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck6"
                ></input>
                <label class="custom-control-label" for="customCheck6">
                  Cafe
                </label>
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck7"
                ></input>
                <label class="custom-control-label" for="customCheck7">
                  Industrial
                </label>
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck8"
                ></input>
                <label class="custom-control-label" for="customCheck8">
                  Heritage
                </label>
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck9"
                ></input>
                <label class="custom-control-label" for="customCheck9">
                  Landscape
                </label>
                </div>
                <div>
                <h5>Products</h5>
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck10"
                ></input>
                <label class="custom-control-label" for="customCheck10">
                  Furniture
                </label>
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck11"
                ></input>
                <label class="custom-control-label" for="customCheck11">
                  Goan Heritage
                </label>
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck12"
                ></input>
                <label class="custom-control-label" for="customCheck12">
                  Creative Art
                </label>
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck13"
                ></input>
                <label class="custom-control-label" for="customCheck13">
                  Goan Sovenier
                </label>
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck14"
                ></input>
                <label class="custom-control-label" for="customCheck14">
                  Art 
                </label>
                </div>
                <div>
                  <label for="infor">Let Us Know How We Can Help You?</label>
                  <textarea rows="5" cols="60" name="description" id="infor"></textarea>
                </div>

                <Button className="Send" variant="light">Send</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SectionEi;
