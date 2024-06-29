import React from 'react'
import Header from '../../CommonComponents/Header'
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

function AccountDetails() {
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
                    padding: 5px 5px 0;
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
                                    <div className="col-xl-3">
                                        <div className="itemWrapper c">
                                            <div className="heading">
                                                <i class="fa-duotone fa-cube"></i> Active
                                                Package
                                            </div>
                                            <div className="data-number">
                                                $ 200.<sub style={{ fontSize: 14 }}>00</sub>
                                            </div>
                                            <div className="label">
                                                Purchase Date: <span className="float-end">16-01-2024</span>
                                            </div>
                                            <div className="label">
                                                Package Name:{" "}
                                                <span className="float-end">Basic Package</span>
                                            </div>
                                            <div className="label">
                                                Tenure:{" "}
                                                <span className="float-end">Yearly Basis</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 billinCardWrapper">
                                        <Cards
                                            className="cardWrapper row align-items-center col-12 mx-auto"
                                            number="4242424242424242"
                                            expiry="02/26"
                                            cvc="585"
                                            name="Test card"
                                        />
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="itemWrapper a">
                                            <div className="heading">
                                                <i className="fa-duotone fa-credit-card"></i> Wallet
                                                Balance
                                            </div>
                                            <div className="data-number">
                                                $ 123456.
                                                <sub style={{ fontSize: 14 }}>
                                                    00
                                                </sub>
                                            </div>
                                            <div className="label">
                                                Active Card:{" "}
                                                <span className="float-end">**** **** **** 4444</span>
                                            </div>
                                            <div className="label">
                                                Holder's Name:{" "}
                                                <span className="float-end">John Adam Eve Smith</span>
                                            </div>
                                            <div
                                                // onClick={() => setRechargePopUp(true)}
                                                className="cartButton mt-1"
                                            >
                                                Recharge Now
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="itemWrapper b">
                                            <div className="heading">
                                                <i className="fa-duotone fa-ballot"></i> Upcoming
                                                Transaction
                                            </div>
                                            <div className="data-number">
                                                $ 200.<sub style={{ fontSize: 14 }}>00</sub>
                                            </div>
                                            <div className="label">
                                                Date: <span className="float-end">16-01-2024</span>
                                            </div>
                                            <div className="label">
                                                Package:{" "}
                                                <span className="float-end">Basic Package</span>
                                            </div>
                                            <div className="label">
                                                Tenure:{" "}
                                                <span className="float-end">Yearly Basis</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gy-3 mt-1">
                                    <div className="col-xl-3">
                                        <div className="itemWrapper b">
                                            <div className="heading">
                                                <i class="fa-duotone fa-phone-office"></i> Total Extensions
                                            </div>
                                            <div className="data-number">
                                                10<span style={{ fontSize: 14 }}>/ 20</span>
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
                                            <div className='details border-top mt-2 pt-1'>
                                                <table>
                                                    <tr>
                                                        <th>Extension</th>
                                                        <th>Status</th>
                                                        <th>On Call</th>
                                                        <th>Minutes Used</th>
                                                    </tr>
                                                    <tr>
                                                        <td>1001</td>
                                                        <td>
                                                            <span className={"extensionStatus online"}></span>
                                                        </td>
                                                        <td>1001</td>
                                                        <td>1001</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="itemWrapper d">
                                            <div className="heading">
                                                <i class="fa-duotone fa-signal"></i> Total DIDs
                                            </div>
                                            <div className="data-number">
                                                10<span style={{ fontSize: 14 }}>/ 20</span>
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
                                            <div className='details border-top mt-2 pt-1'>
                                                <table>
                                                    <tr>
                                                        <th>DID</th>
                                                        <th>CNAME</th>
                                                        <th>SMS Status</th>
                                                        <th>e911 Status</th>
                                                    </tr>
                                                    <tr>
                                                        <td>1001</td>
                                                        <td>1001</td>
                                                        <td>1001</td>
                                                        <td>1001</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="itemWrapper c">
                                            <div className="heading">
                                                <i class="fa-duotone fa-users"></i> Total Users
                                            </div>
                                            <div className="data-number">
                                                10<span style={{ fontSize: 14 }}>/ 20</span>
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
                                            <div className='details border-top mt-2 pt-1'>
                                                <table>
                                                    <tr>
                                                        <th>User ID</th>
                                                        <th>Status</th>
                                                        <th>On Call</th>
                                                    </tr>
                                                    <tr>
                                                        <td>1001</td>
                                                        <td>
                                                            <span className={"extensionStatus online"}></span>
                                                        </td>
                                                        <td>1001</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="itemWrapper a">
                                            <div className="heading">
                                                <i class="fa-duotone fa-ticket"></i> Support Tickets
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