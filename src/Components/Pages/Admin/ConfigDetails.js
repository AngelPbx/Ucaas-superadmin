import React, { useEffect, useState } from "react";
import Header from "../../CommonComponents/Header";
import { useLocation, useNavigate } from "react-router-dom";
import {
  generalGetFunction,
  generalPostFunction,
} from "../../GlobalFunction/globalFunction";
// import ContentLoader from "../Misc/ContentLoader";
import { toast, ToastContainer } from "react-toastify";
import CircularLoader from "../Misc/CircularLoader";

function ConfigDetails() {
  const location = useLocation();
  const locationState = location.state;
  const [locationData, setLocationData] = useState();
  const [loading, setLoading] = useState(true);
  const [refreshData, setRefreshData] = useState(1);
  const [did, setDid] = useState();
  const [gatewayDetail, setGatewayDetail] = useState({
    gateway: "",
    userName: "",
    password: "",
    proxy: "",
    realm: "",
    expire: "",
    register: "",
    retry: "",
    profile: "",
    status: "",
    desc: "",
    domain: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (!locationState) {
      navigate(-1);
    } else {
      async function getData() {
        const apiData = await generalGetFunction(`/account/${locationState}`);
        if (apiData.status) {
          setLocationData(apiData.data);
          setLoading(false);
        } else {
          setLoading(false);
        }
      }
      getData();
    }
  }, [refreshData]);

  //   Getting did
  async function configureAccount() {
    setLoading(true);
    const parsedData = {
      searchType: "tollfree",
      quantity: "1",
      npa: "855",
      companyId: locationState,
    };
    const apiData = await generalPostFunction("/searchTfn", parsedData);
    if (apiData.status) {
      const parsedData2 = {
        companyId: locationState,
        vendorId: apiData.data[0].vendorId,
        didQty: 1,
        type: "configure",
        didType: "random",
        rate: Number(apiData.data[0].price),
        accountId: apiData.data[0].vendorAccountId,
        dids: [
          {
            dids: apiData.data[0].id,
          },
        ],
      };
      const apiData2 = await generalPostFunction("/purchaseTfn", parsedData2);
      if (apiData2.status) {
        setLoading(false);
        setDid(apiData.data[0].id);
        setRefreshData(refreshData + 1);
      } else {
        setLoading(false);
        toast.error(apiData2.message);
      }
    } else {
      setLoading(false);
      toast.error(apiData.message);
    }
  }

  //   Handle form submit
  async function handleSubmit() {
    if (gatewayDetail.gateway === "") {
      toast.error("Please enter gateway");
    } else if (gatewayDetail.userName === "") {
      toast.error("Please enter user name");
    } else if (gatewayDetail.password === "") {
      toast.error("Please enter password");
    } else if (gatewayDetail.proxy === "") {
      toast.error("Please enter proxy");
    } else if (gatewayDetail.domain === "") {
      toast.error("Please enter Domain name");
    } else {
      setLoading(true);
      const parsedData = {
        name: gatewayDetail.gateway,
        username: gatewayDetail.userName,
        password: gatewayDetail.password,
        proxy: gatewayDetail.password,
        expireseconds: gatewayDetail.expire,
        register: gatewayDetail.register,
        profile: gatewayDetail.profile,
        status: "E",
        description: gatewayDetail.desc,
        account_id: locationState,
        retry: gatewayDetail.retry,
        realm: gatewayDetail.realm,
        didConfigure: true,
        domain: gatewayDetail.domain,
      };
      const apiData = await generalPostFunction("/gateway/store", parsedData);
      if (apiData.status) {
        setLoading(false);
        toast.success(apiData.message);
        setTimeout(()=>{
            navigate(-1)
        },2000)
      } else {
        setLoading(false);
        // const errorMessage = Object.keys(apiData.error);
        toast.error(apiData.error);
      }
    }
  }

  //   Handle assign value to from
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setGatewayDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  return (
    <>
      <style>
        {`
    .formRow{
        border: none;
    }
    .gateway .formRow .formItem{
        border: 1px solid var(--color4);
    }
    .gateway .formRow .formLabel{
        padding: 5px 0;
    }
    .formItem{
        margin: 0px 5px 0px 0px;
        color: #000;
        border: none;
    }
    .formLabel{
        padding: 0;
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
        width: 100px;
        height: 130px;
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
      {locationData && !loading ? (
        <div className="mainContent">
          <div className="col-12">
            <Header title="Configuration Options" />
            <div class="d-flex flex-wrap">
              <div className="col-xl-8">
                <div className="profileView">
                  <div className="profileDetailsHolder position-relative">
                    <div className="header d-flex align-items-center">
                      <div className="col-5">Account Details</div>
                    </div>
                    <div className="row px-2 border-bottom">
                      <div className="formRow col-xl-2 col-md-4 col-6">
                        <div className="formLabel">
                          <label htmlFor="data">Company Name</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="formItem"
                            //   value={account?.company_name}
                            value={locationData.company_name}
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
                            //   value={account?.admin_name}
                            value={locationData.admin_name}
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
                            //   value={account?.email}
                            value={locationData.email}
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
                            //   value={account?.contact_no}
                            value={locationData.contact_no}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="formRow col-xl-2 col-md-4 col-6">
                        <div className="formLabel">
                          <label htmlFor="data">Alt Number</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="formItem"
                            //   value={account?.alternate_contact_no}
                            value={locationData.alternate_contact_no}
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
                            //   value={account?.timezone.name}
                            value={locationData.timezone.name}
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
                            //   value={account?.unit}
                            value={locationData.unit}
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
                            //   value={account?.building}
                            value={locationData.building}
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
                            //   value={account?.city}
                            value={locationData.city}
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
                            //   value={account?.zip}
                            value={locationData.zip}
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
                            //   value={account?.state}
                            value={locationData.state}
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
                            //   value={account?.country}
                            value={locationData.country}
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profileView">
                  <div className="profileDetailsHolder position-relative">
                    <div className="header d-flex align-items-center">
                      <div className="col-5">Gateway Configuration</div>
                      <div class="approvalButton">
                        <div
                          class="float-start btn btn-success btn-sm"
                          onClick={handleSubmit}
                        >
                          <i class="fa-duotone fa-check-double"></i> Save
                        </div>
                      </div>
                    </div>
                    <div className="row px-2 border-bottom gateway">
                      <div className="formRow col-xxl-3 col-xl-4 col-md-4 col-6">
                        <div className="formLabel">
                          <label htmlFor="data">Gateway*</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="formItem"
                            name="gateway"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <div className="formRow col-xxl-3 col-xl-4 col-md-4 col-6">
                        <div className="formLabel">
                          <label htmlFor="data">Username*</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="formItem"
                            name="userName"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <div className="formRow col-xxl-3 col-xl-4 col-md-4 col-6">
                        <div className="formLabel">
                          <label htmlFor="data">Password*</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="formItem"
                            name="password"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <div className="formRow col-xxl-3 col-xl-4 col-md-4 col-6">
                        <div className="formLabel">
                          <label htmlFor="data">Proxy*</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="formItem"
                            name="proxy"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <div className="formRow col-xxl-3 col-xl-4 col-md-4 col-6">
                        <div className="formLabel">
                          <label htmlFor="data">Domain*</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="formItem"
                            name="domain"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <div className="formRow col-xxl-3 col-xl-4 col-md-4 col-6">
                        <div className="formLabel">
                          <label htmlFor="data">Realm</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="formItem"
                            name="realm"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <div className="formRow col-xxl-3 col-xl-4 col-md-4 col-6">
                        <div className="formLabel">
                          <label htmlFor="data">Expire Seconds</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="formItem"
                            name="expire"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <div className="formRow col-xxl-3 col-xl-4 col-md-4 col-6">
                        <div className="formLabel">
                          <label htmlFor="data">Register</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="formItem"
                            name="register"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <div className="formRow col-xxl-3 col-xl-4 col-md-4 col-6">
                        <div className="formLabel">
                          <label htmlFor="data">Retry Seconds</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="formItem"
                            name="retry"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <div className="formRow col-xxl-3 col-xl-4 col-md-4 col-6">
                        <div className="formLabel">
                          <label htmlFor="data">Profile</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="formItem"
                            name="profile"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      {/* <div className="formRow col-xxl-3 col-xl-4 col-md-4 col-6">
                        <div className="formLabel">
                          <label htmlFor="data">Status</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="formItem"
                            //   value={account?.country}
                            // value="L0LXDT3$T"
                          />
                        </div>
                      </div> */}
                      <div className="formRow col-xxl-3 col-xl-4 col-md-4 col-6">
                        <div className="formLabel">
                          <label htmlFor="data">Description</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="formItem"
                            name="desc"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <div className="formRow col-xxl-3 col-xl-4 col-md-4 col-6">
                        <div className="formLabel">
                          <label htmlFor="data">DID</label>
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="formItem"
                            value={locationData.dids?.[0]?.did}
                            disabled
                          />
                        </div>
                      </div>
                      {locationData.dids.length === 0 && !did ? (
                        <div className="formRow col-xl-2 mt-auto">
                          <div>
                            <div
                              className="col-12 payNow"
                              onClick={configureAccount}
                            >
                              Get DID
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="profileView">
                  <div className="profileDetailsHolder position-relative">
                    <div className="header d-flex align-items-center">
                      <div className="col-5">Package Details</div>
                    </div>
                    <div class="row" style={{ padding: "5px" }}>
                      <div class="wrapper">
                        <ul>
                          <li>
                            <label>Package Name</label>{" "}
                            <label class="details">
                              {locationData.package.name}
                            </label>
                          </li>
                          <li>
                            <label>Package Price</label>{" "}
                            <label class="details">
                              {locationData.package.offer_price}
                            </label>
                          </li>
                          <li>
                            <label>Package Type</label>{" "}
                            <label class="details">
                              {locationData.package.subscription_type}
                            </label>
                          </li>
                          <li>
                            <label>Subscription Start</label>{" "}
                            <label class="details">
                              {
                                locationData.subscription[0].start_date.split(
                                  " "
                                )[0]
                              }
                            </label>
                          </li>
                          <li>
                            <label>Subscription End</label>{" "}
                            <label class="details">
                              {
                                locationData.subscription[0].end_date.split(
                                  " "
                                )[1]
                              }
                            </label>
                          </li>
                          <li>
                            <label>Time of Payment</label>{" "}
                            <label class="details">
                              {locationData.payments[0].transaction_date}
                            </label>
                          </li>
                          <li>
                            <label>Payment Status</label>{" "}
                            <label class="details">
                              {locationData.payments[0].payment_status}
                            </label>
                          </li>
                          <li>
                            <label>Transaction Id</label>{" "}
                            <label class="details">
                              {locationData.payments[0].transaction_id}
                            </label>
                          </li>
                          <li>
                            <label>DID Status</label>{" "}
                            <label class="details">
                              {locationData?.dids?.length > 0
                                ? "Success"
                                : "Incomplete    "}
                            </label>
                          </li>
                          <li>
                            <label>DID Details</label>{" "}
                            <label class="details">
                              {locationData.dids?.[0]?.did}
                            </label>
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
      ) : (
        <CircularLoader />
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

export default ConfigDetails;
