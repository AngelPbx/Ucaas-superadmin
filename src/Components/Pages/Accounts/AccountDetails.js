import React from 'react'
import Header from '../../CommonComponents/Header'
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useLocation, useNavigate } from 'react-router-dom';

function AccountDetails() {
    const navigate = useNavigate()
    const location = useLocation();
  const locationData = location.state;
  const activeCard = locationData.card_details.filter((item)=>item.default===1)
  console.log("This is location data",activeCard);
    return (
        <>
            <style>
                {`
                .mainContent .itemWrapper{
                    min-height: 190px;
                    max-height: fit-content;
                    transition: 0.3s;
                }
                .billinCardWrapper .rccs{
                    width: 100%;
                    height: 100%;
                }
                .billinCardWrapper .rccs__card{
                    width: 100%;
                    height: 100%;
                }
                .itemWrapper table th, .itemWrapper table td {
                    padding: 5px 5px 0 0;
                }
                .itemWrapper table tr th:first-child, .itemWrapper table tr td:first-child{
                    padding-left: 5px;
                }
                .itemWrapper .data-number{
                    padding: 0;
                }
            `}
            </style>
            <main className="mainContent">
                <section id="phonePage">
                    <div className="container-fluid">
                        <div className="row">
                            <Header title="Account Details" />
                            <div className="col-xl-12 pt-3">
                                <div className="row gy-3">
                                    <div className="col-xl-3 px-2">
                                        <div className="itemWrapper c">
                                            <div className="heading">
                                                <i className="fa-duotone fa-cube"></i> Active
                                                Package
                                            </div>
                                            <div className="data-number">
                                                $ {locationData.package.offer_price.split(".")[0]}.<sub style={{ fontSize: 14 }}>{locationData.package.offer_price.split(".")[1]}</sub>
                                            </div>
                                            <div className="label">
                                                Purchase Date: <span className="float-end">{locationData.subscription[0].start_date.split(" ")[0]}</span>
                                            </div>
                                            <div className="label">
                                                Package Name:{" "}
                                                <span className="float-end">{locationData.package.name} Package</span>
                                            </div>
                                            <div className="label">
                                                Tenure:{" "}
                                                <span className="float-end">{locationData.package.subscription_type} Basis</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 px-2 billinCardWrapper">
                                        <Cards
                                            className="cardWrapper row align-items-center col-12 mx-auto"
                                            number={activeCard?.[0]?.card_number}
                                            expiry={`${Number(activeCard?.[0]?.exp_month)>9?activeCard?.[0]?.exp_month:`0${activeCard?.[0]?.exp_month}`}/${activeCard?.[0]?.exp_year}`}
                                            cvc={activeCard?.[0]?.cvc}
                                            name={activeCard?.[0]?.name}
                                        />
                                    </div>
                                    <div className="col-xl-3 px-2">
                                        <div className="itemWrapper a">
                                            <div className="heading">
                                                <i className="fa-duotone fa-credit-card"></i> Wallet
                                                Balance
                                            </div>
                                            <div className="data-number">
                                                $ {locationData.balance?.amount?.split(".")[0]?locationData.balance?.amount?.split(".")[0]:0}.
                                                <sub style={{ fontSize: 14 }}>
                                                    {locationData.balance?.amount?.split(".")[1]?locationData.balance?.amount?.split(".")[1]:"00"}
                                                </sub>
                                            </div>
                                            <div className="label">
                                                Active Card:{" "}
                                                <span className="float-end">{activeCard?.[0]?.card_number}</span>
                                            </div>
                                            <div className="label">
                                                Holder's Name:{" "}
                                                <span className="float-end">{activeCard?.[0]?.name}</span>
                                            </div>
                                            {/* <div
                                                // onClick={() => setRechargePopUp(true)}
                                                className="cartButton mt-1"
                                            >
                                                Recharge Now
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-xl-3 px-2">
                                        <div className="itemWrapper b">
                                            <div className="heading">
                                                <i className="fa-duotone fa-ballot"></i> Upcoming
                                                Transaction
                                            </div>
                                            <div className="data-number">
                                                $ {locationData.package.regular_price.split(" ")[0]}.<sub style={{ fontSize: 14 }}>{locationData.package.regular_price.split(" ")[1]}</sub>
                                            </div>
                                            <div className="label">
                                                Date: <span className="float-end">{locationData.subscription[0].end_date.split(" ")[0]}</span>
                                            </div>
                                            <div className="label">
                                                Package:{" "}
                                                <span className="float-end">{locationData.package.name} Package</span>
                                            </div>
                                            <div className="label">
                                                Tenure:{" "}
                                                <span className="float-end">{locationData.package.subscription_type} Basis</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gy-3 mt-1">
                                    <div className="col-xl-3 px-2">
                                        <div className="itemWrapper b">
                                            <div className="heading">
                                                <i className="fa-duotone fa-phone-office"></i> Total Extensions
                                            </div>
                                            <div className="data-number">
                                                {locationData.extensions.length}
                                                {/* <span style={{ fontSize: 14 }}>/ 20</span> */}
                                            </div>
                                            <div className="label">
                                                Online Extensions: <span className="float-end">7</span>
                                            </div>
                                            <div className="label">
                                                Extensions On Call:{" "}
                                                <span className="float-end">10</span>
                                            </div>
                                            <div className="label">
                                                Total Extensions:{" "}
                                                <span className="float-end">20</span>
                                            </div>
                                            <div
                                                style={{cursor:"pointer"}}
                                                onClick={()=>navigate("/user-extension",{state:locationData.extensions})}
                                                className="cartButton mt-1"
                                            >
                                                View Details
                                            </div>
                                            {/* <div className='details border-top mt-2'>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Extension</th>
                                                            <th>Status</th>
                                                            <th>On Call</th>
                                                            <th>Minutes Used</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1001</td>
                                                            <td>
                                                                <span className={"extensionStatus online"}></span>
                                                            </td>
                                                            <td>1001</td>
                                                            <td>1001</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-xl-3 px-2">
                                        <div className="itemWrapper d">
                                            <div className="heading">
                                                <i className="fa-duotone fa-signal"></i> Total DIDs
                                            </div>
                                            <div className="data-number">
                                                {locationData.dids.length}
                                                {/* <span style={{ fontSize: 14 }}>/ 20</span> */}
                                            </div>
                                            <div className="label">
                                                Active DIDs: <span className="float-end">7</span>
                                            </div>
                                            <div className="label">
                                                Configured DIDs:{" "}
                                                <span className="float-end">10</span>
                                            </div>
                                            <div className="label">
                                                Total DIDs:{" "}
                                                <span className="float-end">20</span>
                                            </div>
                                            <div
                                                style={{cursor:"pointer"}}
                                                onClick={()=>navigate("/support-ticket-list")}
                                                className="cartButton mt-1"
                                            >
                                                View Details
                                            </div>
                                            {/* <div className='details border-top mt-2'>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>DID</th>
                                                            <th>CNAME</th>
                                                            <th>SMS Status</th>
                                                            <th>e911 Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>999-999-9999</td>
                                                            <td>1001</td>
                                                            <td>1001</td>
                                                            <td>1001</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-xl-3 px-2">
                                        <div className="itemWrapper c">
                                            <div className="heading">
                                                <i className="fa-duotone fa-users"></i> Total Users
                                            </div>
                                            <div className="data-number">
                                                {locationData.users.length}
                                                {/* <span style={{ fontSize: 14 }}>/ 20</span> */}
                                            </div>
                                            <div className="label">
                                                Active Extensions: <span className="float-end">7</span>
                                            </div>
                                            <div className="label">
                                                Registered Extensions:{" "}
                                                <span className="float-end">10</span>
                                            </div>
                                            <div className="label">
                                                Total Extensions:{" "}
                                                <span className="float-end">20</span>
                                            </div>
                                            <div
                                                style={{cursor:"pointer"}}
                                                onClick={()=>navigate("/customer-user",{state:locationData.users})}
                                                className="cartButton mt-1"
                                            >
                                                View Details
                                            </div>
                                            {/* <div className='details border-top mt-2'>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>User ID</th>
                                                            <th>Status</th>
                                                            <th>On Call</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1001</td>
                                                            <td>
                                                                <span className={"extensionStatus online"}></span>
                                                            </td>
                                                            <td>1001</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-xl-3 px-2">
                                        <div className="itemWrapper a">
                                            <div className="heading">
                                                <i className="fa-duotone fa-ticket"></i> Support Tickets
                                            </div>
                                            <div className="data-number">
                                                10<span style={{ fontSize: 14 }}>/ 20</span>
                                            </div>
                                            <div className="label">
                                                Open Tickets: <span className="float-end">10</span>
                                            </div>
                                            <div className="label">
                                                Resolved Tickets:{" "}
                                                <span className="float-end">5</span>
                                            </div>
                                            <div className="label">
                                                Total Tickets:{" "}
                                                <span className="float-end">20</span>
                                            </div>
                                            <div
                                                style={{cursor:"pointer"}}
                                                onClick={()=>navigate("/support-ticket-list")}
                                                className="cartButton mt-1"
                                            >
                                                View Ticket List
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AccountDetails