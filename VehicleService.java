package com.example.vehicleProject.vehicleService;

import com.example.vehicleProject.vehicle.Vehicle;
import org.springframework.stereotype.Component;
import java.util.List;
@Component
public interface VehicleService {
     List<Vehicle> getAllVehicles();
     Vehicle getById(long vehicleID);
     Vehicle addVehicle(Vehicle vehicle);
     Vehicle updateVehicle(Vehicle vehicle);
     String deleteVehicle(long vehicleID);
}
