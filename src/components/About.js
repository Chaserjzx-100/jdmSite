import React from 'react';

export default function About() {
    return (
        <div class=" container-fluid">

            <h1 class="display-4 text-center">About Page </h1>

            <div class="alert alert-primary text-center" role="alert">Quick overview of the site, explore!
                <button aria-label="close" data-dismiss="alert" class="close"> <span
                    aria-hidden="true">&times;</span></button>
            </div>

            <p class="lead">
                Welcome to my website.Thank you for checking it out.
                This site is focused around Japanese Domestic Cars, hence the acronym(JDM).
                The website mainly just lists some of my favorite vehicles manufactured from
                japan along with cars in the same family, and some of the specifications on them.
                Specific links include a gallary of pictures with highly modified vehicles and more
                links to further information about the motors used in the vehicles. I also included an option to
                add some of your favorite vehicles. And no it does not have to be a japanese vehicle
                lol. I will make separate pages for the American and European spec vehicles.
                There's a lot more to add to the site and is still in development. But have fun and look around!


            </p>
            <blockquote class="blockquote text-center text-muted ">
                <p class="itachi mb-2">"People's lives don't end when they die. It ends when they lose faith."
                </p>
                <footer class="blockquote-footer">Uchiha Itachi</footer>
            </blockquote>


        </div>
    )
}