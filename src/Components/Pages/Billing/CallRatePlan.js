import React, { useEffect, useState } from "react";
import Header from "../../CommonComponents/Header";
import { backToTop, generalDeleteFunction, generalGetFunction } from "../../GlobalFunction/globalFunction";
import ContentLoader from "../Misc/ContentLoader";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PaginationComponent from "../../CommonComponents/PaginationComponent";

function CallRatePlan() {
    const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [destination, seDestination] = useState();
  const [refresh,setRefresh] = useState(0)
  const [pageNumber,setPageNumber] = useState(1)
 
useEffect(()=>{
async function getapiData(){
    const apiData = await generalGetFunction(`/call-rates-plans/all?page=${pageNumber}`)
    if(apiData.status){
        setLoading(false)
        seDestination(apiData.data)
    }else{
        setLoading(false)
    }
}
getapiData()
},[refresh])

async function removeDest(id){
  setLoading(true)
  const apiData = await generalDeleteFunction(`/call-rates-plans/destroy/${id}`)
  if(apiData.status){
    setLoading(false)
    toast.success(apiData.message)
    setRefresh(refresh+1)
  }else{
    setLoading(false)
    toast.error(apiData.message)
  }
}
  return (
    <>
      <main className="mainContent">
        <section id="phonePage">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="row px-xl-0" id="detailsHeader">
                  <Header title="Calling Plans" />
                  <div className="d-flex flex-wrap px-xl-3 py-2" id="detailsHeader">
                <div className="col-xl-4 my-auto">
                  <div className="position-relative searchBox">
                    {/* <input
                      type="search"
                      name="Search"
                      id="headerSearch"
                      placeholder="Search"
                    /> */}
                  </div>
                </div>
                <div className="col-xl-8 pt-3 pt-xl-0">
                  <div className="d-flex justify-content-end">
                    <p

                      onClick={() => { backToTop(); navigate(-1) }}
                      effect="ripple"
                      className="panelButton"
                    >
                      Back
                    </p>
                    <Link
                      to="/calling-plan-add"
                      onClick={backToTop}
                      effect="ripple"
                      className="panelButton"
                    >
                      Add
                    </Link>
                  </div>
                  <div className="col-xl-8 mt-3 mt-xl-0">
                    <div className="d-flex justify-content-end flex-wrap gap-2"></div>
                  </div>
                </div>
              </div>
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
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Destination</th>
                        <th>Billing Block</th>
                        <th>Sell Rate</th>
                        <th>Buy Rate</th>
                        {/* <th>Interval Start</th> */}
                        <th>Delete</th>
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
                          {destination &&
                            destination.data.map((item, index) => {
                              return (
                                <tr
                                 
                                  key={index}
                                >
                                  <td  onClick={() =>
                                    navigate(`/calling-plan-edit`, { state: item })
                                  }>{index + 1}</td>
                                  <td  onClick={() =>
                                    navigate(`/calling-plan-edit`, { state: item })
                                  }>{item.destination_name}</td>
                                  <td  onClick={() =>
                                    navigate(`/calling-plan-edit`, { state: item })
                                  }>{item.destination}</td>   

                                   <td  onClick={() =>
                                    navigate(`/calling-plan-edit`, { state: item })
                                  }>{item.selling_billing_block}</td>   

                                   <td  onClick={() =>
                                    navigate(`/calling-plan-edit`, { state: item })
                                  }>{item.sell_rate}</td>  
                                   <td  onClick={() =>
                                    navigate(`/calling-plan-edit`, { state: item })
                                  }>{item.buy_rate}</td>  
                                  <td onClick={() => removeDest(item.id)}>Delete</td>                           
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
      {destination && destination.data.length > 0 ? (
            <PaginationComponent
              pageNumber={(e) => setPageNumber(e)}
              totalPage={destination.last_page}
              from={(pageNumber - 1) * destination.per_page + 1}
              to={destination.to}
              total={destination.total}
            />
          ) : (
            ""
          )}
    </>
  );
}

export default CallRatePlan;
