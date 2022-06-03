package com.example.vehicleProject;


import com.example.vehicleProject.dao.vehicleDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class VehicleProjectApplication implements CommandLineRunner {

	public static void main(String[] args) {

		SpringApplication.run(VehicleProjectApplication.class, args);

	}

	@Autowired
	private vehicleDAO vehicleDAO;

	@Override
	public void run(String... args) throws Exception {
	}

}
