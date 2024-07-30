import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { generalGetFunction, generalPostFunction } from '../../GlobalFunction/globalFunction';
import CircularLoader from '../Misc/CircularLoader';

function RatePlansAdd() {
    const navigate = useNavigate()
    const [name,setName]=useState("")
    const [DestinationRatesId,setDestinationRatesId]=useState("")
    const [TimingTag,setTimingTag]=useState("")
    const [Weight,setWeight]=useState("")
    const [rateDest,setRateDest]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        async function getData(){
            const apiData = await generalGetFunction("/destination-rate/all")
            if(apiData.status){
                setRateDest(apiData.data)
                if(apiData.data.length===0){
                    toast.error("Add Destination Rate first")
                }
            }
        }
        getData()
    },[])
    async function handleSubmit(){
        if(name===""){
            toast.error("Please enter a name")
        }else if(DestinationRatesId===""){
            toast.error("Please select a destination rate")
        }else if(TimingTag===""){
            toast.error("Please select a timing tag")
        }else if(Weight===""){
            toast.error("Please enter a weight")
        }
        
        else{
            setLoading(true)
            const parsedData ={
              name:name,
              DestinationRatesId:DestinationRatesId,
              TimingTag:TimingTag,
              Weight:Weight
            }

            const apiData = await generalPostFunction("/rating-plan/store",parsedData)
            if(apiData.status){
                setLoading(false)
                toast.success(apiData.message)
                setName("")
                setDestinationRatesId("")
                setTimingTag("")
                setWeight("")
            }else{
                setLoading(false)
                toast.error(apiData.message)
            }
        }
    }
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
                        <label className="text-dark">Destination Rates</label>
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
                          Choose Destination Rates.
                        </label>
                      </div>
                    </div>
                    <div className="col-3 pe-2">
                      <div className="formLabel">
                      </div>
                      <div className="col-12">
                        <select className="formItem" value={DestinationRatesId} onChange={(e)=>setDestinationRatesId(e.target.value)}>
                            <option value="">Select Destination Rates</option>
                            {rateDest.map((rate)=>{
                                return(
                                    <option value={rate.id}>{rate.name}</option>
                                )
                            })}
                        </select>
                       
                      </div>
                    </div>
                  </div>
                </div>

                <div className="formRow col-xl-12 px-xl-4">
                  <div className="col-12 d-flex justify-content-start">
                    <div className="formLabel pe-2 col-5">
                      <div>
                        <label className="text-dark">TimingTag</label>
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
                          Timing Tag.
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
                          value={TimingTag}
                          onChange={(e) =>
                            setTimingTag(e.target.value)
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
                        <label className="text-dark">Weight</label>
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
                          Weight.
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
                          value={Weight}
                          onChange={(e) =>
                            setWeight(e.target.value)
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

export default RatePlansAdd
