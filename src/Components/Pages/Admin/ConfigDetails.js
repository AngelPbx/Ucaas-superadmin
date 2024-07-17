import React, { useEffect, useState } from 'react'
import Header from "../../CommonComponents/Header";
import { useLocation, useNavigate } from 'react-router-dom';

function ConfigDetails() {
    const location = useLocation()
    const locationData = location.state
    const [did,setDid]=useState()
    const [domain,setDomain]=useState()
    const navigate = useNavigate()
    console.log("Locationdata",locationData);
    useEffect(()=>{
        if(!locationData){
            navigate(-1)
        }
    },[])
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
            {locationData?
            <div className="mainContent">
                <div className="col-12">
                    <Header title="Configuration Options" />
                    <div class="d-flex flex-wrap">
                        <div className="col-xl-8">
                            <div className="profileView">
                                <div className="profileDetailsHolder position-relative">
                                    <div className="header d-flex align-items-center">
                                        <div className="col-5">Account Details</div>
                                        {/* <div class="approvalButton">
                                        <div class="float-start btn btn-success btn-sm">
                                            <i class="fa-duotone fa-check-double"></i> Approve
                                        </div>
                                        <div class="float-end btn btn-danger btn-sm ms-1">
                                            <i class="fa-duotone fa-triangle-exclamation"></i> Reject
                                        </div>
                                    </div> */}
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
                                            <div class="float-start btn btn-success btn-sm">
                                                <i class="fa-duotone fa-check-double"></i> Save
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row px-2 border-bottom gateway">
                                        <div className="formRow col-xl-4 col-md-4 col-6">
                                            <div className="formLabel">
                                                <label htmlFor="data">Gateway*</label>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="formItem"
                                                    //   value={account?.company_name}
                                                    // value="L0LXDT3$T"
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="formRow col-xl-4 col-md-4 col-6">
                                            <div className="formLabel">
                                                <label htmlFor="data">Username*</label>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="formItem"
                                                    //   value={account?.admin_name}
                                                    // value="L0LXDT3$T"
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="formRow col-xl-4 col-md-4 col-6">
                                            <div className="formLabel">
                                                <label htmlFor="data">Password*</label>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="formItem"
                                                    //   value={account?.email}
                                                    // value="L0LXDT3$T"
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="formRow col-xl-4 col-md-4 col-6">
                                            <div className="formLabel">
                                                <label htmlFor="data">Proxy*</label>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="formItem"
                                                    //   value={account?.contact_no}
                                                    // value="L0LXDT3$T"
                                                    
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="formRow col-xl-4 col-md-4 col-6">
                                            <div className="formLabel">
                                                <label htmlFor="data">From User</label>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="formItem"
                                                    //   value={account?.alternate_contact_no}
                                                    value="L0LXDT3$T"
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div className="formRow col-xl-4 col-md-4 col-6">
                                            <div className="formLabel">
                                                <label htmlFor="data">From Domain</label>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="formItem"
                                                    //   value={account?.timezone.name}
                                                    value="L0LXDT3$T"
                                                    disabled
                                                />
                                            </div>
                                        </div> */}
                                        <div className="formRow col-xl-4 col-md-4 col-6">
                                            <div className="formLabel">
                                                <label htmlFor="data">Realm</label>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="formItem"
                                                    //   value={account?.unit}
                                                    // value="L0LXDT3$T"
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="formRow col-xl-4 col-md-4 col-6">
                                            <div className="formLabel">
                                                <label htmlFor="data">Expire Seconds</label>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="formItem"
                                                    //   value={account?.building}
                                                    // value="L0LXDT3$T"
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="formRow col-xl-4 col-md-4 col-6">
                                            <div className="formLabel">
                                                <label htmlFor="data">Register</label>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="formItem"
                                                    //   value={account?.city}
                                                    // value="L0LXDT3$T"
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="formRow col-xl-4 col-md-4 col-6">
                                            <div className="formLabel">
                                                <label htmlFor="data">Retry Seconds</label>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="formItem"
                                                    //   value={account?.zip}
                                                    // value="L0LXDT3$T"
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="formRow col-xl-4 col-md-4 col-6">
                                            <div className="formLabel">
                                                <label htmlFor="data">Profile</label>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="formItem"
                                                    //   value={account?.state}
                                                    // value="L0LXDT3$T"
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="formRow col-xl-4 col-md-4 col-6">
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
                                        </div>
                                        <div className="formRow col-xl-4 col-md-4 col-6">
                                            <div className="formLabel">
                                                <label htmlFor="data">Description</label>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="formItem"
                                                    //   value={account?.country}
                                                    // value="L0LXDT3$T"
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="formRow col-xl-4 col-md-4 col-6">
                                            <div className="formLabel">
                                                <label htmlFor="data">Set Domain</label>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="formItem"
                                                    //   value={account?.country}
                                                    // value="L0LXDT3$T"
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="formRow col-xl-4 col-md-4 col-6">
                                            <div className="formLabel">
                                                <label htmlFor="data">Set DID</label>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="formItem"
                                                    //   value={account?.country}
                                                    // value="L0LXDT3$T"
                                                    
                                                />
                                            </div>
                                        </div>

                                        {/* <div className="formRow col-xl-4 col-md-4 col-6">
                                           
                                            <div className="col-12">
                                               Get DID
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4'>
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
                                                    {locationData.subscription[0].start_date.split(" ")[0]}
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>Subscription End</label>{" "}
                                                    <label class="details">
                                                    {locationData.subscription[0].end_date.split(" ")[1]}
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
                                                       {locationData?.dids?.length>0?"Success":"Incomplete    "}
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
            </div>:""}
        </>
    )
}

export default ConfigDetails