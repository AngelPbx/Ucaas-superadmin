import React, { useEffect, useRef, useState } from "react";
import Header from "../../CommonComponents/Header";
import { useSelector } from "react-redux";
import { generalGetFunction, generalPostFunction } from "../../GlobalFunction/globalFunction";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CircularLoader from "../Misc/CircularLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TempDashboard() {
  // const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [openNumber, setOpenNumber] = useState(0);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  const location = useLocation()
  const locationState = location.state
  const [account, setAccount] = useState(
    useSelector((state) => state.tempAccount)
  );
  useEffect(() => {
    async function getData() {
      const apiData = await generalGetFunction(`/account/${locationState}`);
      if (apiData.status) {
        setLoading(false)
        setAccount(apiData.data);
      } else {
        setLoading(false)
        navigate(-1)
      }
    }
    getData();

    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpenPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const downloadImage = async (imageUrl, fileName) => {
    console.log("This is image url", imageUrl);
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

  async function approveClick() {
    setLoading(true)
    const parsedData = {
      account_id: locationState
    }
    const apiData = await generalPostFunction("/document-verify", parsedData)
    if (apiData.status) {
      setLoading(false)
      toast.success(apiData.message)
      navigate(-1)
    } else {
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
          width: 35px;
          border-radius: 50%;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--ui-accent);
          color: #fff;
      }

      .profileDetailsHolder .imgWrapper{
        width: 100%;
        height: auto;
        margin: auto;
        padding-top: 20px;
      }
      .profileDetailsHolder .imgWrapper img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .profileDetailsHolder h5 {
        color: var(--color-subtext);
        font-weight: 400;
      }
      .profileDetailsHolder a {text-decoration: none}
      `}
      </style>
      <div className="mainContent">
        <div className="col-12">
          <Header title="User Document Verification" />
          <div class="d-flex flex-wrap">

            <div className="col-xl-12">
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
                          value={account?.company_name}
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
                          value={account?.admin_name}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="formRow col-xl-2 col-md-4 col-6">
                      <div className="formLabel">
                        <label htmlFor="data">Email</label>
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="formItem"
                          value={account?.email}
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
                          value={account?.contact_no}
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
                          value={account?.alternate_contact_no}
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
                          value={account?.timezone.name}
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
                          value={account?.unit}
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
                          value={account?.building}
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
                          value={account?.city}
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
                          value={account?.zip}
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
                          value={account?.state}
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
                          value={account?.country}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap">
                <div className="col-xl-8">
                  <div className="profileView">
                    <div className="profileDetailsHolder">
                      <div className="header d-flex align-items-center">
                        <div className="col-12">Documents Uploaded</div>
                      </div>
                      {account?.details ? (
                        <div className="qLinkContent px-3 mt-2" ref={wrapperRef}>
                          {account.details.map((item, key) => {
                            return (
                              <div className="row position-relative mb-2 align-items-center">
                                <div className="col-auto ps-0 pe-2">
                                  <div className="iconWrapper2">
                                    <i class="fa-solid fa-image"></i>
                                  </div>
                                </div>
                                <div className="col-4 my-auto ps-1">
                                  <p>{item?.document?.name}</p>
                                </div>
                                <div className="col-6 ms-auto">
                                  <div class="d-flex justify-content-end">
                                    <div onClick={approveClick} class="btn btn-success btn-sm">
                                      <i class="fa-duotone fa-check-double"></i> Approve
                                    </div>
                                    <div class="btn btn-danger btn-sm ms-1">
                                      <i class="fa-duotone fa-triangle-exclamation"></i> Reject
                                    </div>
                                    {/* <div class="btn btn-info btn-sm ms-1 text-white">
                                      <i class="fa-duotone fa-upload"></i> Upload
                                    </div>
                                    <div class="btn btn-danger btn-sm ms-1">
                                      <i class="fa-duotone fa-trash"></i> Delete
                                    </div> */}
                                  </div>
                                </div>
                                <div
                                  className="col-auto px-0 my-auto"
                                  onClick={() => {
                                    setOpenPopup(!openPopup);
                                    setOpenNumber(key);
                                  }}
                                >
                                  <div className="iconWrapper">
                                    <i class="fa-solid fa-ellipsis"></i>
                                  </div>
                                </div>
                                <div class="border mt-2 mx-auto col-11"></div>
                                {openPopup && openNumber === key ? (
                                  <div className="buttonPopup">
                                    <div style={{ cursor: "pointer" }}>
                                      <div
                                        className="clearButton"
                                        onClick={() =>
                                          downloadImage(
                                            item.path,
                                            "Register file"
                                          )
                                        }
                                      >
                                        <i class="fa-solid fa-file-arrow-down"></i>{" "}
                                        Download
                                      </div>
                                    </div>
                                    <div style={{ cursor: "pointer" }}>
                                      <div className="clearButton">
                                        <a
                                          href={item.path}
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          <i class="fa-sharp fa-solid fa-eye"></i> View
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            )
                          })}
                        </div>
                      ) : (
                        <Link to="/upload-document">
                          <div className="imgWrapper">
                            <img src={require('../../assets/images/upload-file.png')} alt="" />
                          </div>
                          <div class="text-center mt-3"><h5>Please upload the <span style={{ color: 'var(--ui-accent)', cursor: 'pointer' }}><b>required documents</b></span>.</h5></div>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="profileView">
                    <div className="profileDetailsHolder">
                      <div className="header d-flex align-items-center">
                        <div className="col-12">Registration</div>
                      </div>
                      <div className="imgWrapper">
                        <img src={'http://192.168.1.88/ucaas-app/storage/company/66752a49f2e2b_thankyou_icon.png'} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="d-flex flex-wrap">
                <div className="col-xl-6">
                  <div className="profileView">
                    <div className="profileDetailsHolder position-relative">
                      <div className="header d-flex align-items-center">
                        <div className="col-12">Payment & Subscription Details</div>
                      </div>
                      <div class="row" style={{ padding: "5px" }}>
                        <div class="wrapper">
                          <ul>
                          <li>
                              <label>Package Name</label>{" "}
                              <label class="details">
                                {account?.package.name}
                              </label>
                            </li>
                            <li>
                              <label>Package Price</label>{" "}
                              <label class="details">
                                ${account?.package.offer_price}
                              </label>
                            </li>
                            <li>
                              <label>Package Type</label>{" "}
                              <label class="details">
                                {account?.package.subscription_type}
                              </label>
                            </li>
                            <li>
                              <label>Subscription Start</label>{" "}
                              <label class="details">
                              {account?.payments[0].subscription.start_date}
                              </label>
                            </li>
                            <li>
                              <label>Subscription End</label>{" "}
                              <label class="details">
                              {account?.payments[0].subscription.end_date}
                              </label>
                            </li>
                            <li>
                              <label>Time of Payment</label>{" "}
                              <label class="details">
                                {
                                  account?.payments[0].transaction_date
                                }
                              </label>
                            </li>
                            <li>
                              <label>Payment Status</label>{" "}
                              <label class="details">
                                {account?.payments[0].payment_status}
                              </label>
                            </li>
                            <li>
                              <label>Transaction Id</label>{" "}
                              <label class="details">
                                {account?.payments[0].transaction_id}
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
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
                              <label class="details">{account?.payments[0]?.billing_address.fullname}</label>
                            </li>
                            <li>
                              <label>Email</label>{" "}
                              <label class="details">{account?.payments[0]?.billing_address.email}</label>
                            </li>
                            <li>
                              <label>Phone Number</label>{" "}
                              <label class="details">{account?.payments[0]?.billing_address.contact_no}</label>
                            </li>
                            <li>
                              <label>Address</label>{" "}
                              <label class="details">
                              {account?.payments[0]?.billing_address.address}
                              </label>
                            </li>
                            <li>
                              <label>Zip Code</label>{" "}
                              <label class="details">{account?.payments[0]?.billing_address.zip}</label>
                            </li>
                            <li>
                              <label>City</label>{" "}
                              <label class="details">{account?.payments[0]?.billing_address.city}</label>
                            </li>
                            <li>
                              <label>State</label>{" "}
                              <label class="details">{account?.payments[0]?.billing_address.state}</label>
                            </li>
                            <li>
                              <label>Country</label>{" "}
                              <label class="details">{account?.payments[0]?.billing_address.country}</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {loading ? <CircularLoader /> : ""}
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

export default TempDashboard;
