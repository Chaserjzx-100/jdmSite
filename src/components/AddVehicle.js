import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PopularVehiclesList from './PopularVehicles'
import A80 from './A80'
import EmployeeService from '../service/EmployeeService'


export const AddVehicle = () => {

    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const navigate = useNavigate();

    const changeMake = (e) => {
        setMake(e.target.value);
    }
    const changeModel = (e) => {
        setModel(e.target.value);
    }

    const changeYear = (e) => {
        setYear(e.target.value);
    }

    const cancel = (e) => {
        navigate('/inventory')
    }


    const saveVehicle = (e) => {
        e.preventDefault();

        const vehicle = { make, model, year }
        EmployeeService.createVehicle(vehicle).then(() => {
            navigate('/inventory')
        }).catch(error => {
            console.log(error + JSON.stringify(vehicle))
        })

    }
    return (
        <div className="container text-left">
            <h2 className='addVehicle text-center'>Add a Vehicle</h2>

            <PopularVehiclesList />
            <img onMouseOver={() => console.log("Nissan Silvia s15")} className='silvia img-fluid' src='red180.jpg' alt='S15' />

            <A80
                photo={{
                    carName: "Toyota Supra A80",
                    imgPath: "red180.jpg"
                }}
            />

            <div className="container-fluid" >
                <form className="demo" action="/car" id="carForm">
                    <div className=''>
                        <div className=''>

                            <div className='form-group text-center col-md-12 col-lg-12'>
                                <label className='makeinput' for="make">Enter a make:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Make"
                                    onChange={changeMake}
                                    autoFocus
                                >
                                </input>
                            </div>

                            <div className='form-group text-center col-md-12 col-lg-12'>
                                <label for="model" id="model">Enter a model:</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Model"
                                    name='model'
                                    required='model'
                                    onChange={changeModel}
                                    autoFocus
                                ></input>
                            </div>

                        </div>
                    </div>

                    <div class="text-center col-md-12 col-lg-12">
                        <div class="form-group text-center">
                            <label for="exampleFormControlSelect1">Enter a year:</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder='Year'
                                onChange={changeYear}
                            ></input>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button class="addbtn btn btn-success me-md-2" onClick={saveVehicle} type="submit">Add</button>
                            <button class="cancelbtn btn btn-danger" onClick={cancel} type="submit">Cancel</button>
                        </div>



                    </div>
                </form>

            </div >
        </div >
    )
}
