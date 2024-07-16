import React, { useEffect, useState } from "react";
import Header from "../../CommonComponents/Header";
import { useLocation, useNavigate } from "react-router-dom";
import {
  generalGetFunction,
  generalPostFunction,
} from "../../GlobalFunction/globalFunction";
import CircularLoader from "../Misc/CircularLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LeadDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userDetails, setUserDetails] = useState();
  const [loading, setLoading] = useState(true);
  const locationState = location.state;
  useEffect(()=>{
    if(locationState){
        setUserDetails(locationState)
    }else{
        navigate(-1)
    }
  },[])
  console.log("This is user Details", userDetails);

  async function approveClick() {
    setLoading(true);
    const parsedData = {
      account_id: locationState,
    };
    const apiData = await generalPostFunction("/payment-verify", parsedData);
    if (apiData.status) {
      setLoading(false);
      toast.success(apiData.message);
      setTimeout(()=>{
        navigate(-1);
      },1000)
    
    } else {
      setLoading(false);
      toast.error(apiData.message);
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
        padding: 0px 10px 0 ;
      }
      .wrapper ul{
        padding: 0;
        list-style: none;
        margin-bottom: 0;
      }

      .wrapper ul li{
        padding-bottom: 5px;
        margin-top: 5px;
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
            <div className="col-xl-12">
              <div className="profileView">
                <div className="profileDetailsHolder position-relative">
                  
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
                          value={userDetails?.timezone?.name}
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
             
            </div>
          </div>
        </div>
      </div>
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

export default LeadDetails;
