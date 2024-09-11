import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { generalGetFunction, generalPostFunction } from '../../GlobalFunction/globalFunction';
import CircularLoader from '../Misc/CircularLoader';

function CallRatePlanAdd() {
    const navigate = useNavigate()
    const [gateway,setGateway]=useState()
    // const [name,setName]=useState("")
    const [destination_name,setdestination_name]=useState("")
    const [destination,setdestination]=useState("")
    const [selling_billing_block,setselling_billing_block]=useState("")
    const [sell_rate,setsell_rate]=useState("")
    const [buy_rate,setbuy_rate]=useState("")
    const [gateway_id,setgateway_id]=useState("")
    const [loading,setLoading]=useState(false)
    async function handleSubmit(){
        if(destination_name===""){
            toast.error("Please enter a Destination name")
        }else if(destination===""){
            toast.error("Please enter destination")
        }else if(selling_billing_block===""){
            toast.error("Please enter selling billing block")
        }else if(sell_rate===""){
            toast.error("Please enter sell rate")
        }else if(buy_rate===""){
            toast.error("Please enter buy rate")
        }else if(gateway_id===""){
            toast.error("Please enter gateway id")
        }
        
        else{
            setLoading(true)
            const parsedData ={
                destination_name:destination_name,
                destination:destination,
                selling_billing_block:selling_billing_block,
                sell_rate:sell_rate,
                gateway_id:gateway_id,
                buy_rate:buy_rate,
            //   GroupIntervalStart:GroupIntervalStart
            }

            const apiData = await generalPostFunction("/call-rates-plans/store",parsedData)
            if(apiData.status){
                setLoading(false)
                toast.success(apiData.message)
                setdestination_name("")
                setdestination("")
                setselling_billing_block("")
                setsell_rate("")
                setbuy_rate("")
                setgateway_id("")
               
            }else{
                setLoading(false)
                toast.error(apiData.message)
            }
        }
    }

    useEffect(()=>{
        async function getData(){
            setLoading(true)
            const apiData = await generalGetFunction("/gateway/all")
            if(apiData.status){
                setGateway(apiData.data)
                setLoading(false)
            }else{
                setLoading(false)
                toast.error(apiData.message)
            }
        }
        getData()
    },[])
  return (
    <>
    <main className="mainContent">
      <section id="phonePage">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12" id="subPageHeader">
              <div className="row px-xl-3">
                <div className="col-xl-9 my-auto">
                  <h4 className="my-auto">Add new Rate</h4>
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
                          value={destination_name}
                          onChange={(e) =>
                            setdestination_name(e.target.value)
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
                          Set prefix of destination .
                        </label>
                      </div>
                    </div>
                    <div className="col-3 pe-2">
                      <div className="formLabel">
                      </div>
                      <div className="col-12">
                        <input
                          type="number"
                          name="extension"
                          className="formItem"
                          value={destination}
                          onChange={(e) =>
                            setdestination(e.target.value)
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
                        <label className="text-dark">Billing Blocks</label>
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
                          Set a Rate for billing blocks .
                        </label>
                      </div>
                    </div>
                    <div className="col-3 pe-2">
                      <div className="formLabel">
                      </div>
                      <div className="col-12">
                        <input
                          type="number"
                          name="extension"
                          className="formItem"
                          value={selling_billing_block}
                          onChange={(e) =>
                            setselling_billing_block(e.target.value)
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
                        <label className="text-dark">Sell Rate</label>
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
                          Set Sell rate .
                        </label>
                      </div>
                    </div>
                    <div className="col-3 pe-2">
                      <div className="formLabel">
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          name="extension"
                          className="formItem"
                          value={sell_rate}
                          onChange={(e) =>
                            setsell_rate(e.target.value)
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
                        <label className="text-dark">Buy Rate</label>
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
                          Buy Rate of given plan .
                        </label>
                      </div>
                    </div>
                    <div className="col-3 pe-2">
                      <div className="formLabel">
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          name="extension"
                          className="formItem"
                          value={buy_rate}
                          onChange={(e) =>
                            setbuy_rate(e.target.value)
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
                        <label className="text-dark">Gateway</label>
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
                          Choose a gateway .
                        </label>
                      </div>
                    </div>
                    <div className="col-3 pe-2">
                      <div className="formLabel">
                      </div>
                      <div className="col-12">
                        <select className="formItem"
                          value={gateway_id}
                          onChange={(e) =>
                            setgateway_id(e.target.value)
                          }>
                            <option>Choose a gateway</option>
                            {gateway && gateway.map((item, index) => (
                              <option key={index} value={item.id}>{item.name}</option>
                            ))}
                        </select>
                        {/* <input
                          type="text"
                          name="extension"
                          className="formItem"
                          value={GroupIntervalStart}
                          onChange={(e) =>
                            setGroupIntervalStart(e.target.value)
                          }
                        /> */}
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

export default CallRatePlanAdd
