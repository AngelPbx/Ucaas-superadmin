import React, { useEffect, useState } from "react";
import { generalDeleteFunction, generalGetFunction, generalPostFunction, generalPutFunction } from "../../GlobalFunction/globalFunction";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../CommonComponents/Header";

function DocumentList() {
  const navigate = useNavigate();
  const [domain, setDomain] = useState();
  const [popUp, setPopUp] = useState(false);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [editType, setEditType] = useState("");
  const [editIndex, setEditIndex] = useState("");
  const [addDomain, setAddDomain] = useState(false);
  const [domainSaveClick, setDomainSaveClick] = useState(false);
  const [editClick, setEditClick] = useState(false);
  const [updatedDomain, setUpdateDomain] = useState("");
  const [newDomain, setNewDomain] = useState("");
  const [searchDomain, setSearchDomain] = useState("")
  const [filterDomain, setFilterDomain] = useState()
  const account = useSelector((state) => state.account);

  // Getting domain and group list
  useEffect(() => {
    if (account && account.id) {
      async function getDomainGroup() {
        const domainList = await generalGetFunction(
          `/documents`
        );
        if (domainList.status) {
          setDomain(
            domainList.data.map((item) => {
              return [item.id, item.domain_name];
            })
          );
          setFilterDomain(
            domainList.data.map((item) => {
              return [item.id, item.domain_name];
            })
          )
        } else {
          navigate("/");
        }
      }
      getDomainGroup();
    } else {
      navigate("/");
    }
  }, [account, navigate]);

  // Update document
  async function updateValue() {
    if (domainSaveClick) {
      if (newDomain.length > 2) {
        const parsedData = {
            name: newDomain,
            status: "active",
        //   account_id: account.account_id
        }
        const apiData = await generalPostFunction("/document/store", parsedData)
        if (apiData.status) {
          toast.success(apiData.message)
        } else {
          toast.error(apiData.message)

        }
      } else {
        toast.error("Invalid Domain name")
      }
    } else if (editClick && editType === "Domain") {
      if (updatedDomain.length > 2) {
        const parsedData = {
            name: updatedDomain
        }
        const apiData = await generalPutFunction(`/document/update/${editIndex}`, parsedData)
        if (apiData.status) {
          toast.success(apiData.message)
        } else {
          toast.error(apiData.message)

        }

      } else {
        toast.error("Invalid Updated Value")
      }
    } else if (name == "Domain") {
      const apiData = await generalDeleteFunction(`/document/destroy/${editIndex}`)
      if (apiData.status) {
        toast.success(apiData.message)
      } else {
        toast.error(apiData.message)

      }
    } 

    setPopUp(false);
    setDomainSaveClick(false);
    setEditClick(false);
    setEditIndex("");
    setEditType("");
  }

  // Filter group and domain
  useEffect(() => {
    if (domain) {
      if (searchDomain.trim().length > 0) {
        setFilterDomain(domain.filter((item) => item[1].includes(searchDomain)))
      } else {
        setFilterDomain(domain)
      }
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchDomain])
  console.log(filterDomain, "This is filter domain");
  return (
    <main className="mainContent">
      <section id="phonePage">
        <div className="container-fluid">
          <div className="row">
            <Header title="Master" />
            <div className="row masterList">
              <div className="col-xl-4">
                <div className="masterSegment">
                  <h6>
                    <div className="row align-items-center">
                      <div className="col-auto">
                        List of Domain{" "}
                      </div>
                      <div className="col pe-0">
                        <input type="search" name="Search" id="headerSearch" placeholder="Search a domain" onChange={(e) => setSearchDomain(e.target.value)} />
                      </div>
                      <div className="col-auto ps-0 mt-1">
                        <button className="clearButton" style={{ width: '100%', height: '100%', fontSize: 22 }}>
                          <i
                            className="fa-duotone fa-circle-plus"
                            onClick={() => {
                              setAddDomain(true);
                            }}
                          ></i>
                        </button>
                      </div>
                    </div>
                  </h6>
                  <ul>
                    {addDomain ? (
                      <li>
                        <input
                          type="text"
                          value={newDomain}
                          onChange={(e) => setNewDomain(e.target.value)}
                          placeholder="Add new Domain"
                        ></input>
                        <button className="clearButton text-success">
                          <i
                            className="fa-duotone fa-circle-check"
                            onClick={() => {
                              setPopUp(true);
                              setDomainSaveClick(true);
                            }}
                          ></i>
                        </button>
                        <button className="clearButton text-danger">
                          <i
                            className="fa-duotone fa-trash"
                            onClick={() => {
                              setAddDomain(false);
                            }}
                          ></i>
                        </button>
                      </li>
                    ) : (
                      ""
                    )}
                    {domain &&
                      filterDomain.map((item, index) => {
                        return (
                          <li key={index}>
                            <input
                              type="text"
                              placeholder={item[1]}
                              onChange={(e) => setUpdateDomain(e.target.value)}
                              disabled={
                                editIndex === item[0] && editType === "Domain"
                                  ? false
                                  : true
                              }
                            ></input>
                            <button className="clearButton text-success">
                              {editIndex === item[0] &&
                                editType === "Domain" ? (
                                <i
                                  className="fa-duotone fa-circle-check"
                                  onClick={() => {
                                    setPopUp(true);
                                    setEditClick(true);
                                  }}
                                ></i>
                              ) : (
                                <i
                                  className="fa-duotone fa-pen-to-square"
                                  onClick={() => {
                                    setEditIndex(item[0]);
                                    setEditType("Domain");
                                  }}
                                ></i>
                              )}
                            </button>
                            <button className="clearButton text-danger">
                              <i
                                className="fa-duotone fa-trash"
                                onClick={() => {
                                  setPopUp(true);
                                  setName("Domain");
                                  setValue(item[1]);
                                  setEditIndex(item[0]);
                                }}
                              ></i>
                            </button>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 ">
              </div>
            </div>
          </div>
        </div>
      </section>
      {popUp ? (
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
                  {domainSaveClick ? (
                    <p>
                      Are you sure you want to add this Domain: {newDomain}?
                    </p>
                  )  : editClick && editType === "Domain" ? (
                    <p>
                      Are you sure you want to change {domain[editIndex - 1][1]}{" "}
                      to {updatedDomain}?
                    </p>
                  ): (
                    <p>
                      Are you sure you want to delete this {name}: {value}?
                    </p>
                  )}

                  <button className="panelButton m-0" onClick={updateValue}>
                    Confirm
                  </button>
                  <button
                    className="panelButtonWhite m-0 float-end"
                    onClick={() => {
                      setPopUp(false);
                      setDomainSaveClick(false);
                      setEditClick(false);
                      setEditIndex("");
                      setEditType("");
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
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
    </main>
  );
}

export default DocumentList;
