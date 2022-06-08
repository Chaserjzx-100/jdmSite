import axios from "axios";

const VEHICLE_BASE_REST_API_URL = 'http://localhost:8080/inventory';

class EmployeeService {
    getAllEmployees() {
        return axios.get(VEHICLE_BASE_REST_API_URL)
    }

    createVehicle(vehicle) {
        return axios.post(VEHICLE_BASE_REST_API_URL, vehicle)
    }

    getVehicleById(vehicleId) {
        return axios.get(VEHICLE_BASE_REST_API_URL + '/' + vehicleId)
    }

    updateVehicle(vehicle, vehicleId) {
        return axios.put(VEHICLE_BASE_REST_API_URL + '/' + vehicleId, vehicle)
    }

    deleteVehicle(vehicleId) {
        return axios.delete(VEHICLE_BASE_REST_API_URL + '/' + vehicleId)
    }
}
export default new EmployeeService();