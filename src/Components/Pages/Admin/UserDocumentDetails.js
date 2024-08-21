import React, { useEffect, useRef, useState } from "react";
import Header from "../../CommonComponents/Header";
import { useSelector } from "react-redux";
import {
  generalGetFunction,
  generalPostFunction,
} from "../../GlobalFunction/globalFunction";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CircularLoader from "../Misc/CircularLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TempDashboard() {
  // const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  const [rejectPopUp, setRejectPopUp] = useState(false);
  const [rejectId, setRejectId] = useState();
  const [rejectReason, setRejectReason] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [openNumber, setOpenNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state;
  const [preview, setPreview] = useState();
  const [previewTitle,setPreviewTitle]=useState("")
  const [reload, setReload] = useState(0);
  const [docId, setDocId] = useState([]);
  const [account, setAccount] = useState(
    useSelector((state) => state.tempAccount)
  );
  useEffect(() => {
    async function getData() {
      const apiData = await generalGetFunction(`/account/${locationState}`);
      if (apiData.status) {
        setLoading(false);
        setAccount(apiData.data);
        setPreview(
    apiData.data.details[0].path
        );
        setPreviewTitle(apiData.data.details[0].document.name)
        console.log("This is account data", apiData.data);
        const newDocItems = [...docId];
        apiData.data.details.forEach((item) => {
          if (
            !newDocItems.some((doc) => doc.document_id === item.document_id)
          ) {
            newDocItems.push(item);
          }
        });

        setDocId(newDocItems);
      } else {
        setLoading(false);
        navigate(-1);
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
  }, [reload]);

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

  async function approveClick(item) {
    console.log("This is image data", item);
    setLoading(true);
    const parsedData = {
      account_id: item.account_id,
      document_id: item.document_id,
      status: 1,
      row_id: item.id,
    };
    const apiData = await generalPostFunction("/document-verify", parsedData);
    if (apiData.status) {
      setLoading(false);
      toast.success(apiData.message);
      setReload(reload + 1);
    } else {
      setLoading(false);
      toast.error(apiData.message);
    }
  }

  async function rejectClick() {
    setLoading(true);
    const parsedData = {
      account_id: rejectId.account_id,
      document_id: rejectId.document_id,
      status: 2,
      row_id: rejectId.id,
      description: rejectReason,
    };
    const apiData = await generalPostFunction("/document-verify", parsedData);
    if (apiData.status) {
      setLoading(false);
      toast.success(apiData.message);
      setReload(reload + 1);
      setRejectPopUp(false);
    } else {
      setLoading(false);
      setRejectPopUp(false);
      const errorMessage = Object.keys(apiData.error);
      toast.error(apiData.error[errorMessage[0]][0]);
    }
  }

  console.log("This is doc id", docId);
  return (
    <>
      <div className="mainContent documentVerify">
        <div className="col-12">
          <Header title="User Document Verification" />
          <div class="d-flex flex-wrap">
            <div className="col-xl-12">
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
                  {/* <div class="statusMessage notify">
                    <div class="statusWrapper">
                      <h5>
                        <i class="fa-solid fa-triangle-exclamation text-warning me-1"></i>{" "}
                        Customer has uploaded new document(s)!
                      </h5>
                    </div>
                  </div> */}
                  {/* <div class="profileView">
                    <div
                      class="profileDetailsHolder position-relative"
                      style={{border: '1px solid #ffae00'}}
                    >
                      <div class="row px-2">
                        <div class="statusContent">
                          <p class="mb-2">
                            The following document(s) have been re-uploaded for
                            verification :-
                          </p>
                          <ul>
                            <li class="d-flex justify-content-between">
                              <div class="col-10">
                                <b>
                                  <i class="fa-solid fa-triangle-exclamation me-1"></i>{" "}
                                  Tin
                                </b>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="profileView">
                    <div className="profileDetailsHolder">
                      <div className="header d-flex align-items-center">
                        <div className="col-12">Documents Uploaded</div>
                      </div>
                      {console.log("This is account", account)}
                      {account?.details ? (
                        <div
                          className="qLinkContent px-3 mt-2"
                          ref={wrapperRef}
                        >
                          <div
                            class="accordion accordion-flush"
                            id="accordionFlushExample"
                          >
                            {docId.map((item2, key) => {
                              return (
                                <div class="accordion-item">
                                  <h2
                                    class="accordion-header"
                                    id={`flush-heading${key}`}
                                  >
                                    <button
                                      class="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target={`#flush-collapse${key}`}
                                      aria-expanded="false"
                                      aria-controls={`flush-collapse${key}`}
                                    >
                                      {key + 1}. {item2?.document?.name}
                                    </button>
                                  </h2>
                                  <div
                                    id={`flush-collapse${key}`}
                                    class="accordion-collapse collapse"
                                    aria-labelledby={`flush-heading${key}`}
                                    data-bs-parent="#accordionFlushExample"
                                  >
                                    {account?.details.map((item, key) => {
                                      if (
                                        item.document_id === item2.document_id
                                      ) {
                                        return (
                                          <div class="accordion-body">
                                            <div className="d-flex flex-wrap col-11 ms-auto position-relative align-items-center">
                                              <div className="col-auto ps-0 pe-2">
                                                <div className="iconWrapper2">
                                                  <i class="fa-solid fa-image"></i>
                                                </div>
                                              </div>
                                              <div className="col-4 my-auto ps-1">
                                                <h6 className="mb-0">
                                                  {item?.document?.name}
                                                </h6>
                                              </div>
                                              <div className="col-6 ms-auto">
                                                <div class="d-flex justify-content-end">
                                                  {item.status === "3" ? (
                                                    <>
                                                      {" "}
                                                      <div
                                                        onClick={() =>
                                                          approveClick(item)
                                                        }
                                                        class="btn btn-success btn-sm"
                                                      >
                                                        <i class="fa-duotone fa-check"></i>{" "}
                                                        Approve
                                                      </div>
                                                      <div
                                                        class="btn btn-danger btn-sm ms-1"
                                                        onClick={() => {
                                                          setRejectId(item);
                                                          setRejectPopUp(true);
                                                        }}
                                                      >
                                                        <i class="fa-duotone fa-triangle-exclamation"></i>{" "}
                                                        Reject
                                                      </div>
                                                    </>
                                                  ) : item.status === "2" ? (
                                                    <div class="btn btn-danger btn-sm ms-1">
                                                      <i class="fa-duotone fa-triangle-exclamation"></i>{" "}
                                                      Rejected
                                                    </div>
                                                  ) : (
                                                    <div class="btn btn-success btn-sm ms-1">
                                                      <i class="fa-duotone fa-check-double"></i>{" "}
                                                      Approved
                                                    </div>
                                                  )}
                                                  {/* <div class="btn btn-info btn-sm ms-1 text-white">
                                                <i class="fa-duotone fa-upload"></i> Upload
                                              </div>
                                              <div class="btn btn-danger btn-sm ms-1">
                                                <i class="fa-duotone fa-trash"></i> Delete
                                              </div> */}
                                                </div>
                                              </div>
                                              <div
                                                className="col-auto ps-2 my-auto"
                                                onClick={() =>{
                                                  setPreview(item.path)
                                                  setPreviewTitle(item.document.name)
                                                }
                                                 
                                                }
                                              >
                                                <div className="iconWrapper">
                                                  <i class="fa-solid fa-eye"></i>
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
                                              {item.description ? (
                                                <div className="col-12">
                                                  <p>
                                                    <i class="fa-duotone fa-rectangle-xmark text-danger me-2"></i>{" "}
                                                    {item.description}
                                                  </p>
                                                </div>
                                              ) : (
                                                ""
                                              )}

                                              {openPopup &&
                                              openNumber === key ? (
                                                <div className="buttonPopup">
                                                  <div
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                  >
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
                                                  <div
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                  >
                                                    <div className="clearButton">
                                                      <a
                                                        href={item.path}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                      >
                                                        <i class="fa-sharp fa-solid fa-eye"></i>{" "}
                                                        View
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              ) : (
                                                ""
                                              )}
                                            </div>
                                          </div>
                                        );
                                      }
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <Link to="/upload-document">
                          <div className="imgWrapper">
                            <img
                              src={require("../../assets/images/upload-file.png")}
                              alt=""
                            />
                          </div>
                          <div class="text-center mt-3">
                            <h5>
                              Please upload the{" "}
                              <span
                                style={{
                                  color: "var(--ui-accent)",
                                  cursor: "pointer",
                                }}
                              >
                                <b>required documents</b>
                              </span>
                              .
                            </h5>
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="profileView">
                    <div className="profileDetailsHolder">
                      <div className="header d-flex align-items-center">
                        <div className="col-12">{previewTitle}</div>
                      </div>
                      <iframe
                        src={preview}
                        title="iframe"
                        className="iframeWrapper"
                        width="100%"
                        height="500px"
                      />
                      {/* <div className="imgWrapper">
                        <img src={preview} alt="" />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {rejectPopUp ? (
        <div className="popup">
          <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="row content col-xl-4">
                <div className="col-2 px-0">
                  <div className="iconWrapper">
                    <i className="fa-duotone fa-triangle-exclamation"></i>
                  </div>
                </div>
                <div className="col-10 ps-0">
                  <h4>Warning!</h4>
                  "Please gave the reason for rejecting"
                  <input
                    className="formItem"
                    type="text"
                    value={rejectReason}
                    onChange={(e) => setRejectReason(e.target.value)}
                  />
                  <div className="mt-2">
                    <button className="panelButton m-0" onClick={rejectClick}>
                      Confirm
                    </button>
                    <button
                      className="panelButtonWhite m-0 float-end"
                      onClick={() => {
                        setRejectPopUp(false);
                        setRejectId();
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
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
