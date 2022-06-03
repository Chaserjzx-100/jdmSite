package com.example.vehicleProject.vehicle;
import com.fasterxml.jackson.annotation.JsonGetter;
import net.bytebuddy.implementation.bind.annotation.AllArguments;

import javax.persistence.*;

@Entity
@Table(name = "inventory")
public class Vehicle {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "make")
    private String make;
    @Column(name = "model")
    private String model;
    @Column(name = "year")
    private Integer year;

    public Vehicle(long carID, String make, String model, Integer year) {
        this.id = carID;
        this.make = make;
        this.model = model;
        this.year = year;
    }
    public Vehicle() {
    }

    public long getCarID() {
        return id;
    }

    public void setCarID(long carID) {
        this.id = carID;
    }


    public String getMake(){
        return this.make;
    }
    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    @Override
    public String toString() {
        return "Vehicle{" +
                "id=" + id +
                ", make='" + make + '\'' +
                ", model='" + model + '\'' +
                ", year=" + year +
                '}';
    }
}
