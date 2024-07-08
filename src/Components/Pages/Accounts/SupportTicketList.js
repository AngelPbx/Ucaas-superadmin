import React from 'react'
import Header from '../../CommonComponents/Header';
import { backToTop } from '../../GlobalFunction/globalFunction';
import { Link } from 'react-router-dom';

function SupportTicketList() {
    return (
        <main className="mainContent">
            <section id="phonePage">
                <div className="container-fluid">
                    <div className="row">
                        <Header title="Support Tickets" />
                        {/* <div className="row px-xl-3 py-2" id="detailsHeader">
                            <div className="col-xl-4 my-auto">
                                <div className="position-relative searchBox">
                                    <input
                                        type="search"
                                        name="Search"
                                        id="headerSearch"
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-8 pt-3 pt-xl-0">
                                <div className="d-flex justify-content-end">
                                    <Link
                                        to="/"
                                        onClick={backToTop}
                                        effect="ripple"
                                        className="panelButton"
                                    >
                                        Add
                                    </Link>
                                    <div className="my-auto position-relative mx-3">
                                        <label className="switch">
                                            <input type="checkbox" id="showAllCheck" />
                                            <span className="slider round" />
                                        </label>
                                        <span className="position-relative mx-1">Show All</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-12" style={{ overflow: "auto" }}>
                            <div className="tableContainer">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Customer ID</th>
                                            <th>Customer Username</th>
                                            <th>Customer Email</th>
                                            <th>Ticket ID</th>
                                            <th>Ticket Type</th>
                                            <th>Subject</th>
                                            <th>Status</th>
                                            <th>Issue Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                1001
                                            </td>
                                            <td

                                            >
                                                username
                                            </td>
                                            <td

                                            >
                                                username@email.com
                                            </td>
                                            <td

                                            >
                                                1001
                                            </td>
                                            <td

                                            >
                                                Config Help
                                            </td>
                                            <td

                                            >
                                                I need help
                                            </td>
                                            <td


                                            >
                                                <label className={"tableLabel success"}>Resolved</label>
                                            </td>
                                            <td>
                                                10-02-2001
                                            </td>
                                            <td

                                            >
                                                <button className='clearButton text-success'><i class="fa-sharp fa-solid fa-circle-check"></i></button> <button className='clearButton text-danger'><i className="fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                1001
                                            </td>
                                            <td

                                            >
                                                username
                                            </td>
                                            <td

                                            >
                                                username@email.com
                                            </td>
                                            <td

                                            >
                                                1001
                                            </td>
                                            <td

                                            >
                                                Refund
                                            </td>
                                            <td

                                            >
                                                I want a refund
                                            </td>
                                            <td


                                            >
                                                <label className={"tableLabel pending"}>Pending</label>
                                            </td>
                                            <td>
                                                10-02-2001
                                            </td>
                                            <td

                                            >
                                                <button className='clearButton text-success'><i class="fa-sharp fa-solid fa-circle-check"></i></button> <button className='clearButton text-danger'><i className="fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                1001
                                            </td>
                                            <td

                                            >
                                                username
                                            </td>
                                            <td

                                            >
                                                username@email.com
                                            </td>
                                            <td

                                            >
                                                1001
                                            </td>
                                            <td

                                            >
                                                DID Setup
                                            </td>
                                            <td

                                            >
                                                I need help
                                            </td>
                                            <td


                                            >
                                                <label className={"tableLabel fail"}>Canceled</label>
                                            </td>
                                            <td>
                                                10-02-2001
                                            </td>
                                            <td

                                            >
                                                <button className='clearButton text-success'><i class="fa-sharp fa-solid fa-circle-check"></i></button> <button className='clearButton text-danger'><i className="fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* {extension && extension.data.length > 0 ? (
            <PaginationComponent
              pageNumber={(e) => setPageNumber(e)}
              totalPage={extension.last_page}
              from={(pageNumber - 1) * extension.per_page + 1}
              to={extension.to}
              total={extension.total}
            />
          ) : (
            ""
          )} */}
                </div>
            </section>
        </main>
    )
}

export default SupportTicketList