import React, { useEffect, useState } from "react";
import Header from "../../CommonComponents/Header";
import { generalGetFunction } from "../../GlobalFunction/globalFunction";
import ContentLoader from "../Misc/ContentLoader";
import { useNavigate } from "react-router-dom";

function ApprovedCustomer() {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState();
  const navigate = useNavigate()

  // Getting packes value from inital state
  useEffect(() => {
    async function getData() {
      const apiData = await generalGetFunction(`/account/all?company_status=5`);
      if (apiData.status) {
        console.log("This is api data", apiData.data);
        setLoading(false);
        setAccount(apiData.data);
      }
    }
    getData();
  }, []);
  return (
    <>
      <main className="mainContent">
        <section id="phonePage">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="row px-xl-0" id="detailsHeader">
                  <Header title="Accounts" />
                  {/* <div className="mt-4" /> */}
                  <div className="col-xl-8 mt-3 mt-xl-0">
                    <div className="d-flex justify-content-end flex-wrap gap-2"></div>
                  </div>
                </div>
              </div>
              <div className="col-12" style={{ overflow: "auto" }}>
                <div className="mx-2 tableContainer">
                  <table>
                    <thead>
                      <tr>
                        <th>Company Name</th>
                        <th>Admin Name</th>
                        <th>Package</th>
                        <th>Subscription Type</th>
                        <th>Subscription Start</th>
                        <th>Subscription End</th>
                        <th>
                          Balance
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan={99}>
                            <ContentLoader />
                          </td>
                        </tr>
                      ) : (
                        <>
                          {account &&
                            account.map((item, index) => {
                              return (
                                <tr
                                  onClick={()=>navigate("/customer-details",{
                                    state: item,
                                  })}
                                  key={index}
                                >
                                  <td>{item.company_name}</td>
                                  <td>{item.admin_name}</td>
                                  <td>{item.package.name}</td>
                                  <td>{item.package.subscription_type}</td>
                                  <td>{item.subscription[0].start_date.split(" ")[0]}</td>
                                  <td>
                                    {item.subscription[0].end_date.split(" ")[0]}
                                  </td>
                                  <td>
                                    {item?.balance?.amount}
                                  </td>
                                </tr>
                              );
                            })}
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ApprovedCustomer;
