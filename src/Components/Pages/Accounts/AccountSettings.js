import React, { useState } from 'react'
import Header from '../../CommonComponents/Header'
import ContentLoader from '../Misc/ContentLoader'
import { backToTop } from '../../GlobalFunction/globalFunction'
import { Link } from 'react-router-dom'

function AccountSettings() {
    const [extensions, setExtensions] = useState(true)
    const [group, setGroup] = useState(false)
    const [queue, setQueue] = useState(false)
    const [loading, setLoading] = useState(false);
    return (
        <>
            <main className="mainContent">
                <section id="phonePage">
                    <div className="container-fluid">
                        <div className="row ">
                            <Header title="User Account Setting" />
                            <div className='col-12 mt-3 tangoNavs'>
                                <div className="col-12 mt-3">
                                    <div className="row">
                                        <div className="col-xl-4 tabButtonParent">
                                            <button
                                                className={extensions ? "tabButton active" : "tabButton"}
                                                onClick={() => setExtensions(!extensions)}
                                                data-id={1}
                                            >
                                                Extensions
                                            </button>
                                        </div>
                                        <div className="col-xl-4 tabButtonParent">
                                            <button
                                                className={group ? "tabButton active" : "tabButton"}
                                                onClick={() => setGroup(!group)}
                                                data-id={2}
                                            >
                                                Ring Group
                                            </button>
                                        </div>
                                        <div className="col-xl-4 tabButtonParent">
                                            <button
                                                className={queue ? "tabButton active" : "tabButton"}
                                                onClick={() => setQueue(!queue)}
                                                data-id={3}
                                            >
                                                Call Queue
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {extensions ? (
                                    <div
                                        className="tabGroupDetails"
                                        data-id={1}
                                    >
                                        <div className="col-12">
                                            <div
                                                className="callItemWrapper"
                                                data-id={1}
                                                style={{ height: "auto" }}
                                            >
                                                <div className="tableContainer">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Extensions</th>
                                                                <th>Domains</th>
                                                                <th>Effective CID Name</th>
                                                                <th>Outbound CID Name</th>
                                                                <th>Call Group</th>
                                                                <th>Call Screen</th>
                                                                <th>Description</th>
                                                                <th>Status</th>
                                                                <th>Setting</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr >
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    <label className={"tableLabel success"}>Enable</label>
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    <span
                                                                        className={"extensionStatus online"}
                                                                    ></span>
                                                                </td>
                                                                <td>
                                                                    <i className="fa-duotone fa-gear text-success"></i>
                                                                </td>
                                                            </tr>
                                                            <tr >
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    <label className={"tableLabel success"}>Enable</label>
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    <span
                                                                        className={"extensionStatus online"}
                                                                    ></span>
                                                                </td>
                                                                <td>
                                                                    <i className="fa-duotone fa-gear text-success"></i>
                                                                </td>
                                                            </tr>
                                                            <tr >
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    <label className={"tableLabel success"}>Enable</label>
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    <span
                                                                        className={"extensionStatus online"}
                                                                    ></span>
                                                                </td>
                                                                <td>
                                                                    <i className="fa-duotone fa-gear text-success"></i>
                                                                </td>
                                                            </tr>
                                                            <tr >
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    <label className={"tableLabel success"}>Enable</label>
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    <span
                                                                        className={"extensionStatus online"}
                                                                    ></span>
                                                                </td>
                                                                <td>
                                                                    <i className="fa-duotone fa-gear text-success"></i>
                                                                </td>
                                                            </tr>
                                                            <tr >
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    <label className={"tableLabel success"}>Enable</label>
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    <span
                                                                        className={"extensionStatus online"}
                                                                    ></span>
                                                                </td>
                                                                <td>
                                                                    <i className="fa-duotone fa-gear text-success"></i>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : ""}
                                {group ? (
                                    <div
                                        className="tabGroupDetails"
                                        data-id={2}
                                    >
                                        <div className="col-12">
                                            <div
                                                className="callItemWrapper"
                                                data-id={2}
                                                style={{ height: "auto" }}
                                            >
                                                <div className="tableContainer">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Extension</th>
                                                                <th>Strategy</th>
                                                                <th>Members</th>
                                                                <th>Status</th>
                                                                <th>Description</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr >
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                            </tr>
                                                            <tr >
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                            </tr>
                                                            <tr >
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                            </tr>
                                                            <tr >
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                            </tr>
                                                            <tr >
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : ""}
                                {queue ? (
                                    <div
                                        className="tabGroupDetails"
                                        data-id={3}
                                    >
                                        <div className="col-12">
                                            <div
                                                className="callItemWrapper"
                                                data-id={3}
                                                style={{ height: "auto" }}
                                            >
                                                <div className="tableContainer">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Queue Name</th>
                                                                <th>Extension</th>
                                                                <th>Strategy</th>
                                                                <th>Timeout Action</th>
                                                                <th>Prefix</th>
                                                                <th>Total Agents</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr >
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                            </tr>
                                                            <tr >
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                            </tr>
                                                            <tr >
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                            </tr>
                                                            <tr >
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                            </tr>
                                                            <tr >
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                                <td>
                                                                    123123
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : ""}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AccountSettings