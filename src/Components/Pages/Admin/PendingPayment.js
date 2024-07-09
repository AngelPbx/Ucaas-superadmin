import React, { useEffect, useState } from "react";
import Header from "../../CommonComponents/Header";
import { generalGetFunction } from "../../GlobalFunction/globalFunction";
import ContentLoader from "../Misc/ContentLoader";
import { useNavigate } from "react-router-dom";

function PaymentVerification() {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState();


  const navigate = useNavigate();
  // Getting packes value from inital state
  useEffect(() => {
    async function getData() {
      const apiData = await generalGetFunction(`/accounts?company_status=1`);
      if (apiData.status) {
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
                  <Header title="Payment Verification Pending" />
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
                        <th>Phone Number</th>
                        <th>Transaction id</th>
                        <th>Amount</th>
                        <th>Payment Status</th>
                        <th>
                        Transaction Date
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
                                  onClick={() =>
                                    navigate(`/user-details`, { state: item.id })
                                  }
                                  key={index}
                                >
                                  <td>{item.company_name}</td>
                                  <td>{item.admin_name}</td>
                                  <td>{item.contact_no}</td>
                                  <td>{item.payments[0].transaction_id}</td>
                                  <td>{item.payments[0].amount_subtotal}</td>
                                  <td>{item.payments[0].payment_status}</td>
                                  <td>{item.payments[0].transaction_date.split(" ")[0]}</td>
                                
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

export default PaymentVerification;
