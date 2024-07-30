import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { generalGetFunction, generalPostFunction } from '../../GlobalFunction/globalFunction';
import CircularLoader from '../Misc/CircularLoader';

function RatingProfileAdd() {
    const navigate = useNavigate()
    const [Tenant,setTenant]=useState("")
    const [Category,setCategory]=useState("call")
    const [Subject,setSubject]=useState("")
    const [RatingPlanId,setRatingPlanId]=useState("")
    const [RatesFallbackSubject,setRatesFallbackSubject]=useState("")
    const [rateDest,setRateDest]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        async function getData(){
            const apiData = await generalGetFunction("/rating-plan/all")
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
        if(Tenant===""){
            toast.error("Please enter a tenant")
        }
        else if(Category===""){ 
            toast.error("Please select a category") 
        }
        else if(Subject===""){ 
            toast.error("Please enter a subject") 
        }
        else if(RatingPlanId===""){ 
            toast.error("Please select a rating plan") 
        }
        else if(RatesFallbackSubject===""){ 
            toast.error("Please enter a fallback subject")
        }
        
        else{
            setLoading(true)
            const parsedData ={
              Tenant:Tenant,
              Category:Category,
              Subject:Subject,
              RatingPlanId:RatingPlanId,
              RatesFallbackSubject:RatesFallbackSubject
            }

            const apiData = await generalPostFunction("/rating-profile/store",parsedData)
            if(apiData.status){
                setLoading(false)
                toast.success(apiData.message)
               setTenant("")
               setCategory("call")
               setSubject("")
               setRatingPlanId("")
               setRatesFallbackSubject("")
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
                        <label className="text-dark">Tenant</label>
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
                          value={Tenant}
                          onChange={(e) =>
                            setTenant(e.target.value)
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
                        <label className="text-dark">Rating Plan</label>
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
                          Choose Rating Plan.
                        </label>
                      </div>
                    </div>
                    <div className="col-3 pe-2">
                      <div className="formLabel">
                      </div>
                      <div className="col-12">
                        <select className="formItem" value={RatingPlanId} onChange={(e)=>setRatingPlanId(e.target.value)}>
                            <option value="">Select Rating Plan</option>
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
                        <label className="text-dark">Category</label>
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
                          Choose Category.
                        </label>
                      </div>
                    </div>
                    <div className="col-3 pe-2">
                      <div className="formLabel">
                      </div>
                      <div className="col-12">
                        <select className="formItem" value={Category} onChange={(e)=>setCategory(e.target.value)}>
                            <option value="call">Call</option>
                            <option value="sms">SMS</option>
                            <option value="data">Data</option>
                            <option value="custom">Custom</option>
                        </select>
                       
                      </div>
                    </div>
                  </div>
                </div>

                <div className="formRow col-xl-12 px-xl-4">
                  <div className="col-12 d-flex justify-content-start">
                    <div className="formLabel pe-2 col-5">
                      <div>
                        <label className="text-dark">Subject</label>
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
                          Subject.
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
                          value={Subject}
                          onChange={(e) =>
                            setSubject(e.target.value)
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
                        <label className="text-dark">Rates Fallback Subject</label>
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
                          Rates Fallback Subject.
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
                          value={RatesFallbackSubject}
                          onChange={(e) =>
                            setRatesFallbackSubject(e.target.value)
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

export default RatingProfileAdd
