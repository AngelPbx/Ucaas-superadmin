import React, { useEffect, useState } from "react";
import Header from "../../CommonComponents/Header";
import { backToTop, generalDeleteFunction } from "../../GlobalFunction/globalFunction";
import ContentLoader from "../Misc/ContentLoader";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

function BillingDestination() {
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState();
  const [refresh,setRefresh] = useState(0)
  const billingDestRefresh = useSelector((state) => state.billingDestRefresh);
  const billingDest = useSelector((state) => state.billingDest);
  const dispatch = useDispatch();
console.log("This is billing refresh",billingDestRefresh);

  const navigate = useNavigate();
  // Getting packes value from inital state
  useEffect(() => {
    if(billingDestRefresh===0){
      setLoading(true)
      dispatch({type:"SET_BILLINGDESTREFRESH",billingDestRefresh:billingDestRefresh+1})
    }else{
      setDestination(billingDest)
      setLoading(false)
    }
  }, [billingDest, billingDestRefresh, dispatch]);

  async function removeDest(id){
    setLoading(true)
    const apiData = await generalDeleteFunction(`/destination/destroy/${id}`);
    if(apiData.status){
      setLoading(false)
      toast.success(apiData.message)
      dispatch({type:"SET_BILLINGDESTREFRESH",billingDestRefresh:billingDestRefresh+1})
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
                  <Header title="Billing Destination" />
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
                      to="/billing-destination-add"
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
                        <th>Destination Name</th>
                        <th>Destination Prefix</th>
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
                            destination.map((item, index) => {
                              return (
                                <tr
                                 
                                  key={index}
                                >
                                  <td  onClick={() =>
                                    navigate(`/billing-destination-edit`, { state: item })
                                  }>{index + 1}</td>
                                  <td  onClick={() =>
                                    navigate(`/billing-destination-edit`, { state: item })
                                  }>{item.name}</td>
                                  <td  onClick={() =>
                                    navigate(`/billing-destination-edit`, { state: item })
                                  }>{item.prefix}</td>      
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
    </>
  );
}

export default BillingDestination;
