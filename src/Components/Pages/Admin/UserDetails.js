import React, { useEffect, useState } from "react";
import Header from "../../CommonComponents/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { generalGetFunction, generalPostFunction } from "../../GlobalFunction/globalFunction";
import CircularLoader from "../Misc/CircularLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserDetails() {
  const navigate = useNavigate()
  const location = useLocation()
  const [userDetails,setUserDetails]=useState()
  const [loading,setLoading]=useState(true)
  const locationState = location.state
  useEffect(()=>{
    if(locationState){
      async function getData(){
        const apiData = await generalGetFunction(`/account/${locationState}`)
        if(apiData.status){
          setUserDetails(apiData.data)
          setLoading(false)
        }else{
          setLoading(false)
          navigate(-1)
        }
      }
      getData()
      
    }else{
      navigate("/")
    }
  },[locationState, navigate])
  console.log("This is user Details",userDetails);

  async function approveClick(){
    setLoading(true)
    const parsedData ={
      account_id:locationState
    }
    const apiData = await generalPostFunction("/payment-verify",parsedData)
    if(apiData.status){
      setLoading(false)
      toast.success(apiData.message)
      navigate(-1)
    }else{
      setLoading(false)
      toast.error(apiData.message)
    }
  }
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
        margin-bottom: 0;
      }

      .wrapper ul li{
        padding-bottom: 5px;
        margin-top: 7px;
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
          width: 35px;
          border-radius: 50%;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--ui-accent);
          color: #fff;
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
                    <div class="approvalButton"> 
                      <div onClick={approveClick} class="float-start btn btn-success btn-sm">
                        <i class="fa-duotone fa-check-double"></i> Approve
                      </div> 
                      <div class="float-end btn btn-danger btn-sm ms-1">
                        <i class="fa-duotone fa-triangle-exclamation"></i> Reject
                      </div> 
                    </div>
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
                <div className="col-xl-8">
                  <div className="profileView">
                    <div className="profileDetailsHolder position-relative">
                      <div className="header d-flex align-items-center">
                        <div className="col-12">Card Details</div>
                      </div>
                      <div class="row" style={{ padding: "5px" }}>
                        <div class="wrapper">
                          <ul>
                            <li>
                              <label>Name</label>{" "}
                              <label class="details">Dummy</label>
                            </li>
                            <li>
                              <label>Number</label>{" "}
                              <label class="details">**** **** **** 7876</label>
                            </li>
                            <li>
                              <label>Expiry Date</label>{" "}
                              <label class="details">02/27</label>
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
                <div className="profileDetailsHolder position-relative">
                  <div className="header d-flex align-items-center">
                    <div className="col-12">Billing Details</div>
                  </div>
                  <div class="row" style={{ padding: "5px" }}>
                    <div class="wrapper">
                      <ul>
                        <li>
                          <label>Full Name</label>{" "}
                          <label class="details">Test</label>
                        </li>
                        <li>
                          <label>Email</label>{" "}
                          <label class="details">Test</label>
                        </li>
                        <li>
                          <label>Phone Number</label>{" "}
                          <label class="details">Test</label>
                        </li>
                        <li>
                          <label>Address</label>{" "}
                          <label class="details">Test</label>
                        </li>
                        <li>
                          <label>Zip Code</label>{" "}
                          <label class="details">Test</label>
                        </li>
                        <li>
                          <label>City</label>{" "}
                          <label class="details">Test</label>
                        </li>
                        <li>
                          <label>State</label>{" "}
                          <label class="details">Test</label>
                        </li>
                        <li>
                          <label>Country</label>{" "}
                          <label class="details">Test</label>
                        </li>
                        <li>
                          <label>Transaction Id</label>{" "}
                          <label class="details">Test</label>
                        </li>
                        <li>
                          <label>Payment Status</label>{" "}
                          <label class="details">Test</label>
                        </li>
                        <li>
                          <label>Booking Date</label>{" "}
                          <label class="details">Test</label>
                        </li>
                      </ul>
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

export default UserDetails;
