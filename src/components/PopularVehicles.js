import React from 'react';


export default function PopularVehiclesList() {
    return (
        <div class="row list container">
            <div className='col'>
                <h3 class="text-center">Most Popular Honda's</h3>
                <ul class="hondaList text-center">
                    <li>Honda NSX</li>
                    <li>Honda Civic Type R</li>
                    <li>Honda Civic EK9</li>
                    <li>Honda S2000</li>
                </ul>
            </div>
            <div className='col-sm-6'>
                <h3 class="text-center">Most Popular Toyota's</h3>
                <ul class="hondaList text-center">
                    <li>Toyota Supra(A80)</li>
                    <li>Toyota AE86</li>
                    <li>Toyota MR2</li>
                    <li>Toyota GT86</li>
                </ul>
            </div>
        </div>
    )
}