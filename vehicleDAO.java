package com.example.vehicleProject.dao;

import com.example.vehicleProject.vehicle.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface vehicleDAO extends JpaRepository<Vehicle, Long> {
}
