package com.example.vehicleProject.vehicleService;

import com.example.vehicleProject.dao.vehicleDAO;
import com.example.vehicleProject.vehicle.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class VehicleImp implements VehicleService, CommandLineRunner {
    @Autowired
    public vehicleDAO vehicleDAO;

//    public Vehicle vehicle;

    @Override
    public List<Vehicle> getAllVehicles() {
        return
                vehicleDAO.findAll();
    }

    @Override
    public Vehicle getById(long vehicleID) throws NoSuchElementException{

        Optional<Vehicle> car = vehicleDAO.findById(vehicleID);
        Vehicle v = null;
        try{
            if (car.isPresent()){
                v = car.get();
            }
        } catch (NoSuchElementException e){
            System.out.println("Person not in Database for ID of " + vehicleID);
        }
        return this.vehicleDAO.getById(vehicleID);
    }

    @Override
    public Vehicle addVehicle(Vehicle car) {
        return this.vehicleDAO.save(car);
    }

    @Override
    public Vehicle updateVehicle(Vehicle car) {
        return this.vehicleDAO.save(car);
    }

    @Override
    public String deleteVehicle(long vehicleID) {
        vehicleDAO.deleteById(vehicleID);
        return "Vehicle Deleted.";
    }

    @Override
    public void run(String... args) throws Exception {
        this.vehicleDAO.save(new Vehicle());
    }
}
