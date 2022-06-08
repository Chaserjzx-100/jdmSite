import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PopularVehiclesList from './PopularVehicles'
import EmployeeService from '../service/EmployeeService'
import S180sx from './S180sx'

export const Update = () => {

    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [carID, setID] = useState('')
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

    // currentCar(){
    //     EmployeeService.getVehicleById(carID).then((res) => {
    //         let vehicle = res.data;

    //     })
    // }


    const updateVehicle = (e) => {
        e.preventDefault();

        let vehicle = { make, model, year }
        EmployeeService.updateVehicle(vehicle, carID).then(() => {
            navigate('/inventory')
        }).catch(error => {
            console.log(error + 'vehicle => ' + JSON.stringify(vehicle))
        })


    }
    return (
        <div className="container text-left">
            <h2 className='updateVehicle text-center'>Update Vehicle</h2>
            <PopularVehiclesList />
            <S180sx
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
                                <label className='makeinput' for="make">Change make to:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Make"
                                    onChange={changeMake}
                                >
                                </input>
                            </div>


                            <div className='form-group text-center col-md-12 col-lg-12'>
                                <label for="model" id="model">Change model to:</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Model"
                                    onChange={changeModel}
                                ></input>
                            </div>

                        </div>
                    </div>

                    <div class="text-center col-md-12 col-lg-12">

                        <div class="form-group text-center">
                            <label for="exampleFormControlSelect1">Change year to:</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder='Year'
                                value={year}
                                onChange={changeYear}
                            ></input>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button class="updatebtn btn btn-success me-md-2" onClick={updateVehicle} type="submit">Save</button>
                            <button class="cancelbtn btn btn-danger" onClick={cancel} type="submit">Cancel</button>
                        </div>
                    </div>
                </form>

            </div >
        </div >
    )
}

