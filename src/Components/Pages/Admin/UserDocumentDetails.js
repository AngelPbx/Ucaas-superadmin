import React, { useEffect, useRef, useState } from "react";
import Header from "../../CommonComponents/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { generalGetFunction } from "../../GlobalFunction/globalFunction";
import CircularLoader from "../Misc/CircularLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserDocumentDetails() {
  const navigate = useNavigate()
  const location = useLocation()
  const id = location.state
  const [userDetails,setUserDetails]=useState()
  const [loading,setLoading]=useState(true)
  const wrapperRef = useRef(null);
  const [openPopup,setOpenPopup]=useState(false)
  const [openNumber,setOpenNumber]=useState(0)
  useEffect(()=>{
    if(id){
      async function getData(){
        const apiData = await generalGetFunction(`/account/${id}`)
        if(apiData.status){
          setLoading(false)
          setUserDetails(apiData.data)
        }else{
          setLoading(false)
          navigate(-1)
        }
      }
      getData()
    }else{
      navigate("/")
    }

    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpenPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[id, navigate])

  const downloadImage = async (imageUrl, fileName) => {
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  
  console.log("This is user Details",userDetails);
  return (
    <>
      <style>
        {`
      .formRow{
        border: none;
      }
      .formItem{
        margin: 0px 5px 0px 0px;
        color: #000;
      }
      .formLabel{
        padding: 0px 0px 5px;
      }
      .wrapper{
        padding: 10px 10px 0 ;
      }
      .wrapper ul{
        padding: 0;
        list-style: none;
      }

      .wrapper ul li{
        padding-bottom: 5px;
        margin-bottom: 7px;
        border-bottom: 1px solid #ddd;
      }

      .wrapper ul label{
        font-size: 14px;
        color: #5e5e5e;
        font-weight: 500;
        font-family: Roboto;
      }

      .wrapper ul .details{
        float: inline-end;
        color: #000;
        font-size: 14px;
        font-weight: 600;
        font-family: Roboto;
      }

      .qLinkContent .iconWrapper2{
          width: 30px;
          border-radius: 50%;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--ui-accent);
          color: #fff;
          font-size: 14px;
      }
      `}
      </style>
      <div className="mainContent">
        <div className="col-12">
          <Header title="New User Details" />
          <div class="d-flex flex-wrap">
            <div className="col-xl-9">
              <div className="profileView">
                <div className="profileDetailsHolder position-relative">
                  <div className="header d-flex align-items-center">
                    <div className="col-5">Account Details</div>
                  </div>
                  <div className="row px-2 pb-2 border-bottom">
                    <div className="formRow col-xl-2 col-md-4 col-6">
                      <div className="formLabel">
                        <label htmlFor="data">Company Name</label>
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="formItem"
                          value={userDetails?.company_name}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="formRow col-xl-2 col-md-4 col-6">
                      <div className="formLabel">
                        <label htmlFor="data">Admin Name</label>
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="formItem"
                          value={userDetails?.admin_name}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="formRow col-xl-2 col-md-4 col-6">
                      <div className="formLabel">
                        <label htmlFor="data">Admin Email</label>
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="formItem"
                          value={userDetails?.email}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="formRow col-xl-2 col-md-4 col-6">
                      <div className="formLabel">
                        <label htmlFor="data">Phone Number</label>
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="formItem"
                          value={userDetails?.contact_no}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="formRow col-xl-2 col-md-4 col-6">
                      <div className="formLabel">
                        <label htmlFor="data">Alternate Number</label>
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="formItem"
                          value={userDetails?.alternate_contact_no}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="formRow col-xl-2 col-md-4 col-6">
                      <div className="formLabel">
                        <label htmlFor="data">Timezone</label>
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="formItem"
                          value={userDetails?.timezone.name}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="formRow col-xl-2 col-md-4 col-6">
                      <div className="formLabel">
                        <label htmlFor="data">Block/Unit/Place</label>
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="formItem"
                          value={userDetails?.unit}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="formRow col-xl-2 col-md-4 col-6">
                      <div className="formLabel">
                        <label htmlFor="data">Building</label>
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="formItem"
                          value={userDetails?.building}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="formRow col-xl-2 col-md-4 col-6">
                      <div className="formLabel">
                        <label htmlFor="data">City</label>
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="formItem"
                          value={userDetails?.city}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="formRow col-xl-2 col-md-4 col-6">
                      <div className="formLabel">
                        <label htmlFor="data">Zip Code</label>
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="formItem"
                          value={userDetails?.zip}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="formRow col-xl-2 col-md-4 col-6">
                      <div className="formLabel">
                        <label htmlFor="data">State</label>
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="formItem"
                          value={userDetails?.state}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="formRow col-xl-2 col-md-4 col-6">
                      <div className="formLabel">
                        <label htmlFor="data">Country</label>
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="formItem"
                          value={userDetails?.country}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
              <div className="d-flex flex-wrap">
                <div className="col-xl-4">
                  <div className="profileView">
                    <div className="profileDetailsHolder position-relative">
                      <div className="header d-flex align-items-center">
                        <div className="col-12">Selected Package</div>
                      </div>
                      <div class="row" style={{ padding: "5px" }}>
                        <div class="wrapper">
                          <ul>
                            <li>
                              <label>Package Name</label>{" "}
                              <label class="details">{userDetails?.package.name}</label>
                            </li>
                            <li>
                              <label>Package Price</label>{" "}
                              <label class="details">${userDetails?.package.offer_price}</label>
                            </li>
                            <li>
                              <label>Package Type</label>{" "}
                              <label class="details">{userDetails?.package.subscription_type}</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="profileView">
                    <div className="profileDetailsHolder position-relative">
                      <div className="header d-flex align-items-center">
                        <div className="col-12">Pricing Details</div>
                      </div>
                      <div class="row" style={{ padding: "5px" }}>
                        <div class="wrapper">
                          <ul>
                            <li>
                              <label>Amount Paid</label>{" "}
                              <label class="details">$123.00</label>
                            </li>
                            <li>
                              <label>Time of Payment</label>{" "}
                              <label class="details">16-01-2001</label>
                            </li>
                            <li>
                              <label>Package Chosen</label>{" "}
                              <label class="details">Starter</label>
                            </li>
                            <li>
                              <label>Payment Status</label>{" "}
                              <label class="details">Success</label>
                            </li>
                            <li>
                              <label>Transaction Id</label>{" "}
                              <label class="details">321654987</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="profileView">
                    <div className="profileDetailsHolder position-relative">
                      <div className="header d-flex align-items-center">
                        <div className="col-12">Billing Details</div>
                      </div>
                      <div class="row" style={{ padding: "5px" }}>
                        <div class="wrapper">
                          <ul>
                            <li>
                              <label>Full Name</label>{" "}
                              <label class="details">John Doe</label>
                            </li>
                            <li>
                              <label>Email</label>{" "}
                              <label class="details">john.doe@webvio.com</label>
                            </li>
                            <li>
                              <label>Phone Number</label>{" "}
                              <label class="details">6942061942</label>
                            </li>
                            <li>
                              <label>Address</label>{" "}
                              <label class="details">8/1/2 Greenfield Park</label>
                            </li>
                            <li>
                              <label>Zip Code</label>{" "}
                              <label class="details">123456</label>
                            </li>
                            <li>
                              <label>City</label>{" "}
                              <label class="details">Utopia</label>
                            </li>
                            <li>
                              <label>State</label>{" "}
                              <label class="details">Prometheus</label>
                            </li>
                            <li>
                              <label>Country</label>{" "}
                              <label class="details">Interstellar</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="profileView">
                <div className="profileDetailsHolder">
                  <div className="header d-flex align-items-center">
                    <div className="col-12">Documents Uploaded</div>
                  </div>
                  <div className="qLinkContent px-3 mt-2" ref={wrapperRef}>
                    <div className="row position-relative mb-2 align-items-center">
                      <div className="col-auto ps-0 pe-2">
                        <div className="iconWrapper2">
                          <i
                            class="fa-solid fa-image"
                          ></i>
                        </div>
                      </div>
                      <div className="col-8 my-auto ps-1">
                        <p>Registeration</p>
                      </div>
                      <div  className="col-auto px-0 my-auto ms-auto" onClick={()=>{setOpenPopup(!openPopup);setOpenNumber(1)}}>
                        <div className="iconWrapper">
                          <i class="fa-solid fa-ellipsis"></i>
                        </div>
                      </div>
                      <div class="border mt-2 mx-auto col-10"></div>
                      {(openPopup && openNumber===1)?
                      <div className="buttonPopup" >
                        <div
                          style={{ cursor: "pointer" }}
                        >
                          <div className="clearButton" onClick={()=>downloadImage(userDetails?.details.registration_path,"Register file")}>
                            <i class="fa-solid fa-file-arrow-down"></i>{" "}
                            Download
                          </div>
                        </div>
                        <div style={{ cursor: "pointer" }}>
                          <div className="clearButton">
                            <a
                              href={userDetails?.details.registration_path}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i class="fa-sharp fa-solid fa-eye"></i> View
                            </a>
                          </div>
                        </div>
                      </div> :""}
                    </div>
                    <div className="row position-relative mb-2 align-items-center">
                      <div className="col-auto ps-0 pe-2">
                        <div className="iconWrapper2">
                          <i
                            class="fa-solid fa-image"
                          ></i>
                        </div>
                      </div>
                      <div className="col-8 my-auto ps-1">
                        <p>MOA</p>
                      </div>
                      <div  className="col-auto px-0 my-auto ms-auto" onClick={()=>{setOpenPopup(!openPopup);setOpenNumber(2)}}>
                        <div className="iconWrapper">
                          <i class="fa-solid fa-ellipsis"></i>
                        </div>
                      </div>
                      <div class="border mt-2 mx-auto col-10"></div>
                      {(openPopup && openNumber===2)?
                      <div className="buttonPopup" >
                        <div
                          style={{ cursor: "pointer" }}
                        >
                          <div className="clearButton" onClick={()=>downloadImage(userDetails?.details.moa_path,"Register file")}>
                            <i class="fa-solid fa-file-arrow-down"></i>{" "}
                            Download
                          </div>
                        </div>
                        <div style={{ cursor: "pointer" }}>
                          <div className="clearButton">
                            <a
                              href={userDetails?.details.moa_path}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i class="fa-sharp fa-solid fa-eye"></i> View
                            </a>
                          </div>
                        </div>
                      </div> :""}
                    </div>
                    <div className="row position-relative mb-2 align-items-center">
                      <div className="col-auto ps-0 pe-2">
                        <div className="iconWrapper2">
                          <i
                            class="fa-solid fa-image"
                          ></i>
                        </div>
                      </div>
                      <div className="col-8 my-auto ps-1">
                        <p>TIN</p>
                      </div>
                      <div  className="col-auto px-0 my-auto ms-auto" onClick={()=>{setOpenPopup(!openPopup);setOpenNumber(3)}}>
                        <div className="iconWrapper">
                          <i class="fa-solid fa-ellipsis"></i>
                        </div>
                      </div>
                      <div class="border mt-2 mx-auto col-10"></div>
                      {(openPopup && openNumber===3)?
                      <div className="buttonPopup" >
                        <div
                          style={{ cursor: "pointer" }}
                        >
                          <div className="clearButton" onClick={()=>downloadImage(userDetails?.details.tin_path,"Register file")}>
                            <i class="fa-solid fa-file-arrow-down"></i>{" "}
                            Download
                          </div>
                        </div>
                        <div style={{ cursor: "pointer" }}>
                          <div className="clearButton">
                            <a
                              href={userDetails?.details.tin_path}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i class="fa-sharp fa-solid fa-eye"></i> View
                            </a>
                          </div>
                        </div>
                      </div> :""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div colSpan={99}>
          <CircularLoader />
        </div>
      ) : (
        ""
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default UserDocumentDetails;
