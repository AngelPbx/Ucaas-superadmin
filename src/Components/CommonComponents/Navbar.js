import React from "react";
import "../assets/css/style.css";
import { Link, useNavigate } from "react-router-dom";
import {
  backToTop,
  generalGetFunction,
} from "../GlobalFunction/globalFunction";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const userType = account?.usertype; // "Company"
  async function logOut() {
    const apiData = await generalGetFunction("/logout");
    localStorage.clear();
    if (apiData.data) {
      localStorage.clear();
      dispatch({
        action: "SET_ACCOUNT",
        account: null,
      });
      navigate("/");
    }
  }
  return (
    <div>
      <section>
        <div id="sidenNav">
          <div className="sidenavItems">
            <ul>
              <li className="dashboard">
                <Link to="/dashboard" onClick={backToTop}>
                  <div className="imgWrapper">
                    <img
                      src={require("../assets/images/logo.webp")}
                      alt="img"
                    />
                  </div>
                </Link>
              </li>
              {/* <li className="dashboard ">
                <NavLink
                  to="/dashboard"
                  onClick={backToTop}
                  type="button"
                  effect="ripple"
                >
                  <div className="itemTitle">Dashboard</div>
                </NavLink>
              </li> */}

              <li className="">
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse8"
                  aria-expanded="false"
                  aria-controls="collapse5"
                  effect="ripple"
                >
                  <div className="itemTitle">Account Details</div>
                </button>
                <div
                  id="collapse8"
                  className="accordion-collapse collapse"
                  data-bs-parent="#sidenNav"
                >
                  <div className="menuWrapper">
                    <ul className="tabMenu">
                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/my-profile"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">My Profile</div>
                        </NavLink>
                      </li>

                      {/* <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/customer-details"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Details</div>
                        </NavLink>
                      </li> */}

                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/change-password"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Change Password</div>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="">
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                  effect="ripple"
                >
                  <div className="itemTitle">Setting</div>
                </button>
                <div
                  id="collapse5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#sidenNav"
                >
                  <div className="menuWrapper">
                    <ul className="tabMenu">
                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/master"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Master</div>
                        </NavLink>
                      </li>
                      {/* <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/document-list"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Documents list</div>
                        </NavLink>
                      </li> */}
                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/roles"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Roles and Permisson</div>
                        </NavLink>
                      </li>

                      {/* <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/roles1"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Device Provisioning</div>
                        </NavLink>
                      </li> */}
                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/admin/package"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Packages</div>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="">
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse0"
                  aria-expanded="false"
                  aria-controls="collapse4"
                  effect="ripple"
                >
                  <div className="itemTitle">USER</div>
                </button>
                <div
                  id="collapse0"
                  className="accordion-collapse collapse"
                  data-bs-parent="#sidenNav"
                >
                  <div className="menuWrapper">
                    <ul className="tabMenu">
                    <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/lead"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Leads</div>
                        </NavLink>
                      </li>
                    <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/payment-verification"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Payment verification</div>
                        </NavLink>
                      </li>
                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/document-verification"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Document verification</div>
                        </NavLink>
                      </li>
                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/pending-config"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Pending Configuration</div>
                        </NavLink>
                      </li>
                      

                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/approved-customer"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Customer</div>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="">
                <button
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                  effect="ripple"
                >
                  {/* <div className="iconHolder"><i className="fa-duotone fa-users"></i></div> */}
                  <div className="itemTitle">Phone System</div>
                </button>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#sidenNav"
                >
                  <div className="menuWrapper">
                    <ul className="tabMenu">
                      {/* <li className="tabItem" effect="ripple">
                        <a >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-laptop-mobile" />
                          </div>
                          <div className="itemTitle">Devices</div>
                        </a>
                      </li> */}
                      {/* <li className="tabItem " effect="ripple">
                        <NavLink to="/extensions">
                          <div className="iconHolder">
                            <i className="fa-duotone fa-phone-office" />
                          </div>
                          <div className="itemTitle">Extensions</div>
                        </NavLink>
                      </li> */}

                      <li className="tabItem" effect="ripple">
                        <NavLink to="/gateway">
                          <div className="iconHolder">
                            <i className="fa-duotone fa-arrow-progress" />
                          </div>
                          <div className="itemTitle">Gateways</div>
                        </NavLink>
                      </li>

                      {/* <li className="tabItem" effect="ripple">
                        <NavLink to="/users">
                          <div className="iconHolder">
                            <i className="fa-duotone fa-users" />
                          </div>
                          <div className="itemTitle">Users</div>
                        </NavLink>
                      </li> */}
                      {/* <li className="tabItem" effect="ripple">
                        <NavLink to="/ring-groups">
                          <div className="iconHolder">
                            <i className="fa-duotone fa-user-group-simple"></i>
                          </div>
                          <div className="itemTitle">Ring Group</div>
                        </NavLink>
                      </li>
                      <li className="tabItem" effect="ripple">
                        <NavLink to="/cal-center-queue">
                          <div className="iconHolder">
                            <i className="fa-duotone fa-user-group-simple"></i>
                          </div>
                          <div className="itemTitle">Call Center</div>
                        </NavLink>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </li>

              <li className="">
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                  effect="ripple"
                >
                  <div className="itemTitle">Sofia</div>
                </button>
                <div
                  id="collapse3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#sidenNav"
                >
                  <div className="menuWrapper">
                    <ul className="tabMenu">
                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/sofia-status"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Sofia Status</div>
                        </NavLink>
                      </li>
                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/sofia-setting"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Sofia Settings</div>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* reports here */}

              <li className="">
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse6"
                  effect="ripple"
                >
                  <div className="itemTitle">DID Management</div>
                </button>
                <div
                  id="collapse6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#sidenNav"
                >
                  <div className="menuWrapper">
                    <ul className="tabMenu">
                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/rate-card"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Rate Card</div>
                        </NavLink>
                      </li>
                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/vendors"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Vendors</div>
                        </NavLink>
                      </li>
                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/get-did"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Get DID</div>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="">
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse7"
                  aria-expanded="false"
                  aria-controls="collapse7"
                  effect="ripple"
                >
                  <div className="itemTitle">Payment Gateway</div>
                </button>
                <div
                  id="collapse7"
                  className="accordion-collapse collapse"
                  data-bs-parent="#sidenNav"
                >
                  <div className="menuWrapper">
                    <ul className="tabMenu">
                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/payment-gateway"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Gateways</div>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* Did here */}

              <li className="">
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse9"
                  aria-expanded="false"
                  aria-controls="collapse9"
                  effect="ripple"
                >
                  <div className="itemTitle">Billing</div>
                </button>
                <div
                  id="collapse9"
                  className="accordion-collapse collapse"
                  data-bs-parent="#sidenNav"
                >
                  <div className="menuWrapper">
                    <ul className="tabMenu">
                    <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/calling-plan"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Calling plans</div>
                        </NavLink>
                      </li>
                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/billing-destination"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Destination</div>
                        </NavLink>
                      </li>
                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/billing-rates"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Rates</div>
                        </NavLink>
                      </li>
                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/billing-destination-rate"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Destination Rates</div>
                        </NavLink>
                      </li>

                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/billing-rate-plan"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Rate Plans</div>
                        </NavLink>
                      </li>

                      <li className="tabItem" effect="ripple">
                        <NavLink
                          to="/biling-rate-profile"
                          onClick={backToTop}
                          className="nav-link"
                        >
                          <div className="iconHolder">
                            <i className="fa-duotone fa-swap-arrows" />
                          </div>
                          <div className="itemTitle">Rate Profile</div>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="dashboard ">
                <NavLink to="/" onClick={logOut} type="button" effect="ripple">
                  <div
                    className="iconHolder"
                    style={{ margin: "0 0", textAlign: "left", width: 27 }}
                  >
                    <i className="fa-duotone fa-power-off"></i>
                  </div>
                  <div className="itemTitle">Log Out</div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
