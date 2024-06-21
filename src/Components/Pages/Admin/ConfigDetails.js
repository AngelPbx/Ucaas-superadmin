import React from 'react'
import Header from "../../CommonComponents/Header";

function ConfigDetails() {
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
                                                    disabled
                                                />
                                            </div>
                                        </div>
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
                                                        {/* {account?.package.name} */}
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>Package Price</label>{" "}
                                                    <label class="details">
                                                        {/* ${account?.package.offer_price} */}
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>Package Type</label>{" "}
                                                    <label class="details">
                                                        {/* {account?.package.subscription_type} */}
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>Subscription Start</label>{" "}
                                                    <label class="details">
                                                        {/* {account?.payments[0].subscription.start_date} */}
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>Subscription End</label>{" "}
                                                    <label class="details">
                                                        {/* {account?.payments[0].subscription.end_date} */}
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>Time of Payment</label>{" "}
                                                    <label class="details">
                                                        {/* {
                                                        account?.payments[0].transaction_date
                                                    } */}
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>Payment Status</label>{" "}
                                                    <label class="details">
                                                        {/* {account?.payments[0].payment_status} */}
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>Transaction Id</label>{" "}
                                                    <label class="details">
                                                        {/* {account?.payments[0].transaction_id} */}
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
        </>
    )
}

export default ConfigDetails