import React, { useState } from 'react'

const AddPatient = () => {
    const [input,setInput]=new useState({
        patientName:String,
        patientAddress:String,
        patientMobile:String,
        patientSymptom:String,
        patientStatus:String
    })
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValues=()=>{
        console.log(input)
        axios.post("").then(
            (response)=>{
                console.log(response.data)
                if(respponse.data.status=="success"){
                    alert("successfully added")
                    setInput({
                        patientName:String,
                        patientAddress:String,
                        patientMobile:String,
                        patientSymptom:String,
                        patientStatus:String
                    })
                }else{
                    alert("something wrong")
                }
            }
        )
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Patient name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Address</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Phone</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Symphtoms</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Status</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success">submit</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPatient