import React from 'react';

export default function Home() {
    return (

        <body className='App'>
            <div className='heading text-left border-top-0 border-left-0 border-right-0'>
                <h1 className='h1 text-left'><b>JDM_Passion</b></h1>
                <h4 className='text-left'><i>(Japanese Domestic Market)</i></h4>
            </div>


            <div className='container homePics text-center'>
                <div className='row '>
                    <div className='container text-center row-md-6'>
                        <img class="s15" src="red s15.jpg" alt="red Silvia s15"></img>
                        <div><i class="S">1999 Nissan S15</i></div>
                    </div>
                    <div className='col-md-6 text-center'>
                        <img class="chaser" src="jzx90_black.jpg" alt="Black jzx 90 Chaser"></img>
                        <div><i class="T">1993 Toyota JZX90</i></div>
                    </div>
                    <div className='col-md-6 text-center'>
                        <img class="s2k" src="blkS2k.jpg" alt="black s2000"></img>
                        <div><i class="K">2000 Honda S2000</i></div>
                    </div>
                </div>

            </div>
            <div class="container-fluid text-center col">
                <section class="catagory">
                    <h2 class="headings">Most Popular JDM Cars</h2>

                    <ul>
                        <li>BNR R34 GTR</li>
                        <li>MK4 A80 Supra</li>
                        <li>R35 GTR</li>
                        <li>Silvia s13
                            <li>S15</li>
                            <li>S14 kouki</li>
                        </li>
                        <li>Jzx100 Chaser
                            <li>Jzx100 Mark ii</li>
                        </li>
                    </ul>

                    <h2 class="headings">Runner Ups</h2>
                    <ul>
                        <li>MR2</li>
                        <li>R32 GTR</li>
                        <li>GT350R</li>
                        <li>JZX90 Chaser</li>
                    </ul>

                    <h2 class="headings">Favorite Motors</h2>
                    <ul>
                        <li><a href="https://www.topspeed.com/cars/car-news/the-science-behind-nissan-s-vq-engine-is-beyond-a-stroke-of-genius-ar188993.html"
                            target="_blank" rel="noopener noreferrer">VQ
                            Family</a>
                            <ul>
                                <li>- VQ35DE</li>
                            </ul>
                        </li>
                        <li><a href="https://www.engine-specs.net/toyota/2jz-gte.html" target="_blank"
                            rel="noopener noreferrer">Jz
                            Family</a>
                            <ul>
                                <li>- 2jz GTE</li>
                                <li>- 1jz GTE</li>
                            </ul>
                        </li>
                        <li> <a href="https://nissanclub.cz/engines_family.php?id=36" target="_blank"
                            rel="noopener noreferrer">RB
                            Family</a>
                            <ul>
                                <li>- RB25DET</li>
                                <li>- RB26DETT</li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
            <article class="catagory">
                <div class="supraDiv"><img className="A90"
                    src="https://s1.cdn.autoevolution.com/images/news/slammed-2020-toyota-supra-has-air-suspension-looks-glued-to-the-road-136778_1.jpg"
                    alt="White A90 Supra with White wheels"></img>

                    <div>
                        <i class="soup">2020 Toyota A90 Supra</i>
                    </div>

                </div>

            </article>

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
                crossorigin="anonymous"></script>
        </body>
    )
}