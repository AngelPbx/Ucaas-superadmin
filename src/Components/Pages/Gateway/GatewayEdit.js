import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  backToTop,
  generalGetFunction,
  
  generalPutFunction,
} from "../../GlobalFunction/globalFunction";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularLoader from "../Misc/CircularLoader";

function GatewayEdit() {
  const navigate = useNavigate();
  const account = useSelector((state) => state.account);
  const queryParams = new URLSearchParams(useLocation().search);
  const [loading, setLoading] = useState(true);
  const value = queryParams.get("id");
  const [gatewayState, setGatwewayState] = useState({
    gateway: "",
    username: "",
    password: "",
    fromuser: "",
    fromdomain: "",
    proxy: "",
    realm: "",
    expiry: "",
    register: "",
    retry: "",
    profile: "",
    status: "E",
    desc: "",
    gatewayMissing: "",
    usernameMissing: "",
    passwordMissing: "",
    fromuserMissing: "",
    fromdomainMissing: "",
    proxyMissing: "",
    realmMissing: "",
    expiryMissing: "",
    registerMissing: "",
    retryMissing: "",
    profileMissing: "",
    statusMissing: "",
    descMissing: "",
  });

  useEffect(() => {
    if (account && account.id) {
      async function getData() {
        const apiData = await generalGetFunction(`/gateway/${value}`);
        if (apiData.status) {
          setLoading(false);
          setGatwewayState((prevState) => ({
            ...prevState,
            gateway: apiData.data.name,
            username: apiData.data.username,
            password: apiData.data.password,
            proxy: apiData.data.proxy,
            expiry: apiData.data.expireseconds,
            register: apiData.data.register,
            profile: apiData.data.profile,
            status: apiData.data.status,
            desc: apiData.data.description,
            fromuser: apiData.data.fromUser,
            fromdomain: apiData.data.fromDomain,
            realm: apiData.data.realm,
            retry: apiData.data.retry,
          }));
        } else {
          navigate("/");
        }
      }
      getData();
    } else {
      navigate("/");
    }
  }, [account, navigate, value]);
  useEffect(() => {
    if (account === null) {
      navigate("/");
    }
  });
  // Calling gateway store by validating form
  async function handleSubmit() {
    if (gatewayState.username.trim().length > 2) {
      setGatwewayState((prevState) => ({
        ...prevState,
        usernameMissing: false,
      }));
    } else {
      setGatwewayState((prevState) => ({
        ...prevState,
        usernameMissing: true,
      }));
    }
    if (gatewayState.gateway.trim().length > 2) {
      setGatwewayState((prevState) => ({
        ...prevState,
        gatewayMissing: false,
      }));
    } else {
      setGatwewayState((prevState) => ({
        ...prevState,
        gatewayMissing: true,
      }));
    }
    if (gatewayState.password.trim().length > 3) {
      setGatwewayState((prevState) => ({
        ...prevState,
        passwordMissing: false,
      }));
    } else {
      setGatwewayState((prevState) => ({
        ...prevState,
        passwordMissing: true,
      }));
    }
    // if (gatewayState.fromdomain.trim().length > 2) {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     fromdomainMissing: false,
    //   }));
    // } else {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     fromdomainMissing: true,
    //   }));
    // }
    // if (gatewayState.fromuser.trim().length > 2) {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     fromuserMissing: false,
    //   }));
    // } else {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     fromuserMissing: true,
    //   }));
    // }
    if (gatewayState.proxy.trim().length > 2) {
      setGatwewayState((prevState) => ({
        ...prevState,
        proxyMissing: false,
      }));
    } else {
      setGatwewayState((prevState) => ({
        ...prevState,
        proxyMissing: true,
      }));
    }
    // if (gatewayState.realm.trim().length > 2) {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     realmMissing: false,
    //   }));
    // } else {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     realmMissing: true,
    //   }));
    // }
    // if (gatewayState.expiry > 0) {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     expiryMissing: false,
    //   }));
    // } else {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     expiryMissing: true,
    //   }));
    // }
    // if (gatewayState.register.trim().length > 2) {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     registerMissing: false,
    //   }));
    // } else {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     registerMissing: true,
    //   }));
    // }
    // if (gatewayState.retry > 0) {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     retryMissing: false,
    //   }));
    // } else {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     retryMissing: true,
    //   }));
    // }
    // if (gatewayState.profile.trim().length > 2) {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     profileMissing: false,
    //   }));
    // } else {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     profileMissing: true,
    //   }));
    // }
    // if (gatewayState.status === "" || gatewayState.status === "Choose Status") {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     statusMissing: true,
    //   }));
    // } else {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     statusMissing: false,
    //   }));
    // }
    // if (gatewayState.desc.trim().length > 2) {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     descMissing: false,
    //   }));
    // } else {
    //   setGatwewayState((prevState) => ({
    //     ...prevState,
    //     descMissing: true,
    //   }));
    // }

    if (
      gatewayState.username.trim().length > 2 &&
      gatewayState.gateway.trim().length > 2 &&
      gatewayState.password.trim().length > 3 &&
      gatewayState.proxy.trim().length > 2
      //  &&
      // gatewayState.fromdomain.trim().length > 2 &&
      // gatewayState.fromuser.trim().length > 2 &&

      // gatewayState.realm.trim().length > 2 &&
      // gatewayState.expiry > 0 &&
      // gatewayState.register.trim().length > 2 &&
      // gatewayState.retry > 0 &&
      // gatewayState.profile.trim().length > 2 &&
      // !(
      //   gatewayState.status === "" || gatewayState.status === "Choose Status"
      // ) &&
      // gatewayState.desc.trim().length > 2
    ) {
      setLoading(true)
      const parsedData = {
        account_id: account.account_id,
        name: gatewayState.gateway,
        username: gatewayState.username,
        password: gatewayState.password,
        proxy: gatewayState.proxy,
        expireseconds: gatewayState.expiry,
        register: gatewayState.register,
        profile: gatewayState.profile,
        status: gatewayState.status,
        description: gatewayState.desc,
        fromUser: gatewayState.fromuser,
        fromDomain: gatewayState.fromdomain,
        realm: gatewayState.realm,
        retry: gatewayState.retry,
      };
      const apidata = await generalPutFunction(`gateway/${value}`, parsedData);
      if (apidata.status) {
        setLoading(false)
        toast.success(apidata.message);
      } else {
        setLoading(false)
        toast.error(apidata.message);
      }
    }
  }
  return (
    <>
      <main className="mainContent">
        <section id="phonePage">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12" id="subPageHeader">
                <div className="row px-xl-3">
                  <div className="col-xl-4 my-auto">
                    <h4 className="my-auto">Gateway Add</h4>
                  </div>
                  <div className="col-xl-8 ps-2">
                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        effect="ripple"
                        className="panelButton"
                        onClick={() => {
                          navigate(-1);
                          backToTop();
                        }}
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        effect="ripple"
                        className="panelButton"
                      >
                        Copy
                      </button>
                      <button
                        onClick={handleSubmit}
                        type="button"
                        effect="ripple"
                        className="panelButton"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12" style={{ overflow: "auto" }}>
                <div className="mx-2" id="detailsContent">
                  <form action="#" className="row">
                    <div className="formRow col-xl-3">
                      <div className="formLabel">
                        <label htmlFor="selectFormRow">Gateway*</label>
                        {gatewayState.gatewayMissing ? (
                          <label className="status missing">
                            Field missing
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          name="extension"
                          value={gatewayState.gateway}
                          onChange={(e) => {
                            setGatwewayState((prevState) => ({
                              ...prevState,
                              gateway: e.target.value,
                            }));
                          }}
                          className="formItem"
                          required="required"
                        />
                        <br />
                        <label htmlFor="data" className="formItemDesc">
                          Enter the gateway name here.
                        </label>
                      </div>
                    </div>
                    <div className="formRow col-xl-3">
                      <div className="formLabel">
                        <label htmlFor="selectFormRow">Username*</label>
                        {gatewayState.usernameMissing ? (
                          <label className="status missing">
                            Field missing
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          name="extension"
                          value={gatewayState.username}
                          onChange={(e) => {
                            setGatwewayState((prevState) => ({
                              ...prevState,
                              username: e.target.value,
                            }));
                          }}
                          className="formItem"
                          required="required"
                        />
                        <br />
                        <label htmlFor="data" className="formItemDesc">
                          Enter the username here.
                        </label>
                      </div>
                    </div>
                    <div className="formRow col-xl-3">
                      <div className="formLabel">
                        <label htmlFor="">Password*</label>
                        {gatewayState.passwordMissing ? (
                          <label className="status missing">
                            Field missing
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-12">
                        <input
                          type="password"
                          name="extension"
                          className="formItem"
                          value={gatewayState.password}
                          onChange={(e) => {
                            setGatwewayState((prevState) => ({
                              ...prevState,
                              password: e.target.value,
                            }));
                          }}
                          required="required"
                        />
                        <br />
                        <label htmlFor="data" className="formItemDesc">
                          Enter the numeric voicemail password here.
                        </label>
                      </div>
                    </div>
                    <div className="formRow col-xl-3">
                      <div className="formLabel">
                        <label htmlFor="">Proxy*</label>
                        {gatewayState.proxyMissing ? (
                          <label className="status missing">
                            Field missing
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          name="extension"
                          className="formItem"
                          value={gatewayState.proxy}
                          onChange={(e) => {
                            setGatwewayState((prevState) => ({
                              ...prevState,
                              proxy: e.target.value,
                            }));
                          }}
                          required="required"
                        />
                        <br />
                        <label htmlFor="data" className="formItemDesc">
                          Enter the hostname or IP address of the proxy.
                          host[:port]
                        </label>
                      </div>
                    </div>
                    <div className="formRow col-xl-3">
                      <div className="formLabel">
                        <label htmlFor="selectFormRow">From User</label>
                        {gatewayState.fromuserMissing ? (
                          <label className="status missing">
                            Field missing
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          name="extension"
                          className="formItem"
                          value={gatewayState.fromuser}
                          onChange={(e) => {
                            setGatwewayState((prevState) => ({
                              ...prevState,
                              fromuser: e.target.value,
                            }));
                          }}
                          required="required"
                        />
                        <br />
                        <label htmlFor="data" className="formItemDesc">
                          Enter the from-user here.
                        </label>
                      </div>
                    </div>
                    <div className="formRow col-xl-3">
                      <div className="formLabel">
                        <label htmlFor="">From Domain</label>
                        {gatewayState.fromdomainMissing ? (
                          <label className="status missing">
                            Field missing
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          name="extension"
                          className="formItem"
                          value={gatewayState.fromdomain}
                          onChange={(e) => {
                            setGatwewayState((prevState) => ({
                              ...prevState,
                              fromdomain: e.target.value,
                            }));
                          }}
                          required="required"
                        />
                        <br />
                        <label htmlFor="data" className="formItemDesc">
                          Enter the from-domain here.
                        </label>
                      </div>
                    </div>
                    <div className="formRow col-xl-3">
                      <div className="formLabel">
                        <label htmlFor="">Realm</label>
                        {gatewayState.realmMissing ? (
                          <label className="status missing">
                            Field missing
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          name="extension"
                          className="formItem"
                          value={gatewayState.realm}
                          onChange={(e) => {
                            setGatwewayState((prevState) => ({
                              ...prevState,
                              realm: e.target.value,
                            }));
                          }}
                          required="required"
                        />
                        <br />
                        <label htmlFor="data" className="formItemDesc">
                          Enter the realm here.
                        </label>
                      </div>
                    </div>
                    <div className="formRow col-xl-3">
                      <div className="formLabel">
                        <label htmlFor="">Expire Seconds</label>
                        {gatewayState.expiryMissing ? (
                          <label className="status missing">
                            Field missing
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-12">
                        <input
                          type="number"
                          name="extension"
                          className="formItem"
                          value={gatewayState.expiry}
                          onChange={(e) => {
                            setGatwewayState((prevState) => ({
                              ...prevState,
                              expiry: e.target.value,
                            }));
                          }}
                          required="required"
                        />
                        <br />
                        <label htmlFor="data" className="formItemDesc">
                          Enter the expire-seconds here.
                        </label>
                      </div>
                    </div>
                    <div className="formRow col-xl-3">
                      <div className="formLabel">
                        <label htmlFor="selectFormRow">Register</label>
                        {gatewayState.registerMissing ? (
                          <label className="status missing">
                            Field missing
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-12">
                        <select
                          className="formItem"
                          name=""
                          value={gatewayState.register}
                          onChange={(e) => {
                            setGatwewayState((prevState) => ({
                              ...prevState,
                              register: e.target.value,
                            }));
                          }}
                        >
                          <option>Select Value</option>
                          <option value="true">True</option>
                          <option value="false">False</option>
                        </select>
                        <br />
                        <label htmlFor="data" className="formItemDesc">
                          Choose whether to register.
                        </label>
                      </div>
                    </div>
                    <div className="formRow col-xl-3">
                      <div className="formLabel">
                        <label htmlFor="">Retry Seconds</label>
                        {gatewayState.retryMissing ? (
                          <label className="status missing">
                            Field missing
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-12">
                        <input
                          type="number"
                          name="extension"
                          className="formItem"
                          value={gatewayState.retry}
                          onChange={(e) => {
                            setGatwewayState((prevState) => ({
                              ...prevState,
                              retry: e.target.value,
                            }));
                          }}
                          required="required"
                        />
                        <br />
                        <label htmlFor="data" className="formItemDesc">
                          Enter the retry-seconds here.
                        </label>
                      </div>
                    </div>
                    <div className="formRow col-xl-3">
                      <div className="formLabel">
                        <label htmlFor="selectFormRow">Profile</label>
                        {gatewayState.profileMissing ? (
                          <label className="status missing">
                            Field missing
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-12">
                        <select
                          className="formItem"
                          value={gatewayState.profile}
                          onChange={(e) => {
                            setGatwewayState((prevState) => ({
                              ...prevState,
                              profile: e.target.value,
                            }));
                          }}
                        >
                          <option>Choose Profile</option>
                          <option value="internal">Internal</option>
                          <option value="external">External</option>
                          <option value="external-ipv6">external-ipv6</option>
                          <option value="internal-ipv6">internal-ipv6</option>
                        </select>
                        <br />
                        <label htmlFor="data" className="formItemDesc">
                          Enter the profile here.
                        </label>
                      </div>
                    </div>
                    <div className="formRow col-xl-3">
                      <div className="formLabel">
                        <label htmlFor="selectFormRow">Status</label>
                        {gatewayState.statusMissing ? (
                          <label className="status missing">
                            Field missing
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-12">
                        <select
                          className="formItem"
                          value={gatewayState.status}
                          onChange={(e) => {
                            setGatwewayState((prevState) => ({
                              ...prevState,
                              status: e.target.value,
                            }));
                          }}
                        >
                          <option>Choose Status</option>
                          <option value="E">Enable</option>
                          <option value="D">Disable</option>
                        </select>
                        <br />
                        <label htmlFor="data" className="formItemDesc">
                          Choose status here.
                        </label>
                      </div>
                    </div>
                    <div className="formRow col-xl-3">
                      <div className="formLabel">
                        <label htmlFor="selectFormRow">Description</label>
                        {gatewayState.descMissing ? (
                          <label className="status missing">
                            Field missing
                          </label>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          name="extension"
                          className="formItem"
                          value={gatewayState.desc}
                          onChange={(e) => {
                            setGatwewayState((prevState) => ({
                              ...prevState,
                              desc: e.target.value,
                            }));
                          }}
                          required="required"
                        />
                        <br />
                        <label htmlFor="data" className="formItemDesc">
                          Enter the description.
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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

export default GatewayEdit;
