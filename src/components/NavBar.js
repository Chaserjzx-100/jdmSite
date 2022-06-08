import React from 'react';
import ReactSwitch from 'react-switch';


export default function Navbar() {

    return (
        <nav id="mainNavbar" class="navbar navbar-dark bg-dark navbar-expand-md">
            <a className="navTitle navbar-brand mb-0 h1">
                JDM_Passion
            </a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navLinks">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="/home">Home</a>
                    <a class="nav-link" href="/contact">| Contact</a>
                    <a class="nav-link" href="/about">| About</a>
                    <a class="nav-link" href='/inventory'>| Dream Garage</a>
                    <a class="nav-link" href='/addVehicle/:carID'>| Add Vehicle</a>
                    <a class="nav-link" href='/wheels'>| Wheel Gallery</a>
                </div>
            </div>

            {/* <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch1"></input>
                <label class="custom-control-label" for="customSwitch1">Dark</label>
            </div> */}
        </nav>
    )
}

