import React, { useState, useEffect, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService'

export const ListEmployees = () => {

    const [employees, setState] = useState([])
    const navigate = useNavigate();

    useEffect(() => {

        EmployeeService.getAllEmployees().then((response) => {
            setState(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }, [])

    //Implemented
    const addVehicle = (e) => {
        navigate('/addVehicle/-1')
    }

    //In Progress
    const editVehicle = (carID) => {
        navigate(`/update/${carID}`);
    }

    //Implemented almost
    //Had to use the Response Entity along with a Map object in SpringBoot.
    const deleteVehicle = (carID) => {
        const newEmployees = employees.filter((employee) => employee.carID !== carID);
        EmployeeService.deleteVehicle(carID).then(() => {
            navigate('/inventory')
        });
        setState(newEmployees);
        console.log('Removed vehicle ID: ' + carID)

    }

    return (
        <div className='container'>
            <h2 className='title text-center'>Dream Garage</h2>
            <div>
                <button className='btn btn-primary mb-2' onClick={addVehicle}>Add Vehicle</button>
            </div>
            <table class="table text-center table-hover table-dark table-bordered">
                <thead>
                    <th>ID</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                                /*MUST MATCH THE RETURN OF JSON OBJECT FIELD*/
                                <tr key={employee.carID}>
                                    <td>{employee.carID}</td>
                                    <td>{employee.make}</td>
                                    <td>{employee.model}</td>
                                    <td>{employee.year}</td>
                                    <td>
                                        <button to='/update/:carID' onClick={() => editVehicle(employee.carID)} className='update_ btn btn-info mb-2'>Update</button>
                                        <button onClick={() => deleteVehicle(employee.carID)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                        )}
                </tbody>
            </table>
        </div>
    )
}

