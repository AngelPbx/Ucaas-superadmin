import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { generalPutFunction } from '../../GlobalFunction/globalFunction';
import CircularLoader from '../Misc/CircularLoader';
import { useDispatch, useSelector } from 'react-redux';

function DestRateEdit() {
    const location = useLocation()
    const locationData = location.state
    const navigate = useNavigate()
    const [dest,setDest]=useState([])
    const [rate,setRate]=useState([])
    const [name,setName]=useState(locationData.name)
    const [DestinationId,setDestinationId]=useState(locationData.DestinationId)
    const [RatesTag,setRatesTag]=useState(locationData.RatesTag)
    const [RoundingMethod,setRoundingMethod]=useState(locationData.RoundingMethod)
    const [RoundingDecimals,setRoundingDecimals]=useState(locationData.RoundingDecimals)
    const [MaxCost,setMaxCost]=useState(locationData.MaxCost)
    const [MaxCostStrategy,setMaxCostStrategy]=useState(locationData.MaxCostStrategy)
    const [loading,setLoading]=useState(false)

    const dispatch = useDispatch();
    const billingRatesRefresh = useSelector((state) => state.billingRatesRefresh);
    const billingRates = useSelector((state) => state.billingRates);
    const billingDestRefresh = useSelector((state) => state.billingDestRefresh);
    const billingDest = useSelector((state) => state.billingDest);
  
    useEffect(() => {
      if (billingRatesRefresh === 0) {
        setLoading(true);
        dispatch({
          type: "SET_BILLINGRATESREFRESH",
          billingRatesRefresh: billingRatesRefresh + 1,
        });
      } else {
        setRate(billingRates);
        setLoading(false);
      }
  
      if (billingDestRefresh === 0) {
        setLoading(true);
        dispatch({
          type: "SET_BILLINGDESTREFRESH",
          billingDestRefresh: billingDestRefresh + 1,
        });
      } else {
        setDest(billingDest);
        setLoading(false);
      }
    }, [
      billingRates,
      billingRatesRefresh,
      billingDestRefresh,
      billingDest,
      dispatch,
    ]);
    async function handleSubmit(){
        if(name===""){
            toast.error("Please enter a name")
        }else if(DestinationId===""){
            toast.error("Please select a destination")
        }else if(RatesTag===""){
            toast.error("Please select a rate")
        }else if(RoundingMethod===""){
            toast.error("Please select a rounding method")  
        }else if(RoundingDecimals===""){
            toast.error("Please enter a rounding decimals")
        }else if(MaxCost===""){
            toast.error("Please enter a max cost")
        }else if(MaxCostStrategy===""){
            toast.error("Please select a max cost strategy")
        }else if(loading){
            toast.error("Please wait a moment")
        }else if(dest.length===0){
            toast.error("Please add a destination first")
        }else if(rate.length===0){
            toast.error("Please add a rate first")
        }
        else{
            setLoading(true)
            const parsedData ={
             name:name,
             DestinationId:DestinationId,
             RatesTag:RatesTag,
             RoundingMethod:RoundingMethod,
             RoundingDecimals:RoundingDecimals,
             MaxCost:MaxCost,
             MaxCostStrategy:MaxCostStrategy
            }

            const apiData = await generalPutFunction(`/destination-rate/update/${locationData.id}`,parsedData)
            if(apiData.status){
                setLoading(false)
                toast.success(apiData.message)
              
            }else{
                setLoading(false)
                toast.error(apiData.message)
            }
        }
    }

    useEffect(()=>{
        if(!locationData){
            navigate(-1)
        }
    },[locationData, navigate])
  return (
    <>
    <main className="mainContent">
      <section id="phonePage">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12" id="subPageHeader">
              <div className="row px-xl-3">
                <div className="col-xl-9 my-auto">
                  <h4 className="my-auto">Add new Destination</h4>
                  <p className="pt-2 mt-1 mb-0"></p>
                </div>
                <div className="col-xl-3 ps-2">
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      effect="ripple"
                      className="panelButton"
                      onClick={() => navigate(-1)}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      effect="ripple"
                      className="panelButton"
                      onClick={handleSubmit}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-2" id="detailsContent">
              <form className="row">
               
                <div className="formRow col-xl-12 px-xl-4">
                  <div className="col-12 d-flex justify-content-start">
                    <div className="formLabel pe-2 col-5">
                      <div>
                        <label className="text-dark">Name</label>
                      </div>
                      <div>
                        <label
                          htmlFor="data"
                          className="formItemDesc"
                          style={{
                            fontSize: 12,
                            lineHeight: "18px",
                            marginTop: 5,
                          }}
                        >
                          Name of the Destination.
                        </label>
                      </div>
                    </div>
                    <div className="col-3 pe-2">
                      <div className="formLabel">
                        {/* <label htmlFor="">Destinations</label> */}
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          name="extension"
                          className="formItem"
                          value={name}
                          onChange={(e) =>
                            setName(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="formRow col-xl-12 px-xl-4">
                  <div className="col-12 d-flex justify-content-start">
                    <div className="formLabel pe-2 col-5">
                      <div>
                        <label className="text-dark">Destination</label>
                      </div>
                      <div>
                        <label
                          htmlFor="data"
                          className="formItemDesc"
                          style={{
                            fontSize: 12,
                            lineHeight: "18px",
                            marginTop: 5,
                          }}
                        >
                          Select Destination .
                        </label>
                      </div>
                    </div>
                    <div className="col-3 pe-2">
                      <div className="formLabel">
                      </div>
                      <div className="col-12">

                    <select
                    value={DestinationId}
                    onChange={(e) => setDestinationId(e.target.value)}
                      className="formItem">
                        <option value="">Select Destination</option>
                        {dest.map((item, index) => (
                          <option
                            key={index}
                            value={item.id}
                          >
                            {item.name}
                          </option>
                        ))}
                      </select>
                       
                      </div>
                    </div>
                  </div>
                </div>

                <div className="formRow col-xl-12 px-xl-4">
                  <div className="col-12 d-flex justify-content-start">
                    <div className="formLabel pe-2 col-5">
                      <div>
                        <label className="text-dark">Rates tag</label>
                      </div>
                      <div>
                        <label
                          htmlFor="data"
                          className="formItemDesc"
                          style={{
                            fontSize: 12,
                            lineHeight: "18px",
                            marginTop: 5,
                          }}
                        >
                          Select Rate tags .
                        </label>
                      </div>
                    </div>
                    <div className="col-3 pe-2">
                      <div className="formLabel">
                      </div>
                      <div className="col-12">

                    <select
                    value={RatesTag}
                    onChange={(e) => setRatesTag(e.target.value)}
                      className="formItem">
                        <option value="">Select Rate tag</option>
                        {rate.map((item, index) => (
                          <option
                            key={index}
                            value={item.id}
                          >
                            {item.name}
                          </option>
                        ))}
                      </select>
                       
                      </div>
                    </div>
                  </div>
                </div>

                <div className="formRow col-xl-12 px-xl-4">
                  <div className="col-12 d-flex justify-content-start">
                    <div className="formLabel pe-2 col-5">
                      <div>
                        <label className="text-dark">Rounding Method</label>
                      </div>
                      <div>
                        <label
                          htmlFor="data"
                          className="formItemDesc"
                          style={{
                            fontSize: 12,
                            lineHeight: "18px",
                            marginTop: 5,
                          }}
                        >
                          Rounding Method.
                        </label>
                      </div>
                    </div>
                    <div className="col-3 pe-2">
                      <div className="formLabel">
                        {/* <label htmlFor="">Destinations</label> */}
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          name="extension"
                          className="formItem"
                          value={RoundingMethod}
                          onChange={(e) =>
                            setRoundingMethod(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="formRow col-xl-12 px-xl-4">
                  <div className="col-12 d-flex justify-content-start">
                    <div className="formLabel pe-2 col-5">
                      <div>
                        <label className="text-dark">Rounding Decimals</label>
                      </div>
                      <div>
                        <label
                          htmlFor="data"
                          className="formItemDesc"
                          style={{
                            fontSize: 12,
                            lineHeight: "18px",
                            marginTop: 5,
                          }}
                        >
                          Rounding Decimals.
                        </label>
                      </div>
                    </div>
                    <div className="col-3 pe-2">
                      <div className="formLabel">
                        {/* <label htmlFor="">Destinations</label> */}
                      </div>
                      <div className="col-12">
                        <input
                          type="number"
                          name="extension"
                          className="formItem"
                          value={RoundingDecimals}
                          onChange={(e) =>
                            setRoundingDecimals(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>


                <div className="formRow col-xl-12 px-xl-4">
                  <div className="col-12 d-flex justify-content-start">
                    <div className="formLabel pe-2 col-5">
                      <div>
                        <label className="text-dark">Max Cost</label>
                      </div>
                      <div>
                        <label
                          htmlFor="data"
                          className="formItemDesc"
                          style={{
                            fontSize: 12,
                            lineHeight: "18px",
                            marginTop: 5,
                          }}
                        >
                          MaxCost.
                        </label>
                      </div>
                    </div>
                    <div className="col-3 pe-2">
                      <div className="formLabel">
                        {/* <label htmlFor="">Destinations</label> */}
                      </div>
                      <div className="col-12">
                        <input
                          type="number"
                          name="extension"
                          className="formItem"
                          value={MaxCost}
                          onChange={(e) =>
                            setMaxCost(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>


                <div className="formRow col-xl-12 px-xl-4">
                  <div className="col-12 d-flex justify-content-start">
                    <div className="formLabel pe-2 col-5">
                      <div>
                        <label className="text-dark">Max Cost Strategy</label>
                      </div>
                      <div>
                        <label
                          htmlFor="data"
                          className="formItemDesc"
                          style={{
                            fontSize: 12,
                            lineHeight: "18px",
                            marginTop: 5,
                          }}
                        >
                          Max Cost Strategy.
                        </label>
                      </div>
                    </div>
                    <div className="col-3 pe-2">
                      <div className="formLabel">
                        {/* <label htmlFor="">Destinations</label> */}
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          name="extension"
                          className="formItem"
                          value={MaxCostStrategy}
                          onChange={(e) =>
                            setMaxCostStrategy(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </form>
            </div>
            {loading ? <CircularLoader /> : ""}
          </div>
        </div>
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  </>
  )
}

export default DestRateEdit
