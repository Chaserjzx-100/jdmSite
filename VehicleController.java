package com.example.vehicleProject.vehicleController;

import com.example.vehicleProject.dao.vehicleDAO;
import com.example.vehicleProject.vehicle.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
/*BASE URL*/
public class VehicleController{

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000")
                        .allowedMethods("PUT","POST","DELETE","GET");
            }
        };
    }

    @Autowired
    private vehicleDAO vehicleDAO;

    /**
     * Home page
     * href | http://localhost:8080/home
     */
    @GetMapping ("/home")
    public String main() {
        return "<HTML><h1>JDM Passion</h1></HTML>";
    }

    /**
     * Return the entire list of Vehicles
     * href | http://localhost:8080/inventory
     */
    @GetMapping("/inventory")
    public List<Vehicle> getInventory() {
        return this.vehicleDAO.findAll();
    }

    /**
     * Get a specific Vehicle
     * href | http://localhost:8080/inventory/{vehicleID}
     */
    @GetMapping( "/{vehicleID}")
    public ResponseEntity<Vehicle> getById(@PathVariable long vehicleID) {
        Vehicle vehicle = vehicleDAO.findById(vehicleID)
                .orElseThrow(() -> new NoSuchElementException("Vehicle with id " + vehicleID + " does not exist."));
        return ResponseEntity.ok(vehicle);
    }

    /**
     * Add a Vehicle
     * href | http://localhost:8080/inventory
     */
    @PostMapping("/inventory")
    public Vehicle addVehicle(@RequestBody Vehicle vehicle) {
        return vehicleDAO.save(vehicle);
    }

    /**
     * Update a Vehicle
     * href | http://localhost:8080/inventory/{vehicleID}
     */
    @PutMapping("/inventory/{vehicleID}")
    public ResponseEntity<Vehicle> updateVehicle(@PathVariable long vehicleID, @RequestBody Vehicle newVehicle) {
        Vehicle vehicle = vehicleDAO.findById(vehicleID)
                .orElseThrow(() -> new NoSuchElementException("Vehicle with id " + vehicleID + " does not exist."));

        vehicle.setMake(newVehicle.getMake());
        vehicle.setModel(newVehicle.getModel());
        vehicle.setYear(newVehicle.getYear());

        Vehicle updatedVehicle = vehicleDAO.save(vehicle);
        return ResponseEntity.ok(updatedVehicle);
    }

    /**
     * Delete a Vehicle
     * http://localhost:8080/inventory/{id}
     */
    @DeleteMapping("/inventory/{vehicleID}")
    public ResponseEntity<Map<String, Boolean>> deleteVehicle(@PathVariable long vehicleID) throws NoSuchElementException{

            vehicleDAO.deleteById(vehicleID);


//            vehicleDAO.delete(vehicle);
            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return  ResponseEntity.ok(response);
    }
}
