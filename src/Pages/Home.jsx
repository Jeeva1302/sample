import React from 'react'
import logo from '../Assests/Kanini-Logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBox } from 'react-icons/fa'
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import firstslide from '../Assests/Kanini-Banner_Mobile-View-2.jpg'
import secondslide from '../Assests/Kanini-home-healthcare-Banner_Mobile-View.jpg'
import './Home.css'


function Home() {
    return (
        <div className='container-fluid'>
            {/* nav part */}
            <div className='entire-nav-links bg-light px-5'>
                <nav className='d-flex justify-content-between fixed-top'>
                    <div className='normal-nav-links px-5'>
                        <img src={logo} width={200} height={80} />
                    </div>
                    <div className='normal-nav-links'>
                        <ul className='d-flex pt-4'>
                            <li> <a href='#'> What We Do<IoIosArrowDown /></a></li>
                            <li> <a href='#'>Who We are<IoIosArrowDown /></a> </li>
                            <li> <a href='#'>Join Us<IoIosArrowDown /></a> </li>
                            <li> <a href='#'>Our Insights<IoIosArrowDown /></a> </li>
                            <li className='px-3'><button type="button" class="btn btn-dark butons text-center py-0">Login</button></li>
                        </ul>
                    </div>

                    {/* min content*/}
                    <nav class="responsivenavs navbar fixed-top">
                        <div class="container-fluid">
                            <div className='px-5'>
                                <img src={logo} width={200} height={80} />
                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Link</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li>
                                                    {/* <hr class="dropdown-divider"> */}
                                                </li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <form class="d-flex mt-3" role="search">
                                        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                                        <button class="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </nav>
                </nav>
            </div>
            {/* image carosel */}
            <div id="carouselExampleAutoplaying" class="carousel slide carslas" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='d-flex justify-content-evenly'>
                            <div>
                                    <h4 className='main-head'>Trilblazors of the <br />DGITAL 2.0 <br />Transformation</h4>
                                    <p className='sub-head'>Charting the roadmapfor the business to be truly digital with <br />Data analytics & AI , Product Engineering,Automation, and <br />Connectivity - allacelerated through flexible Engagements <br />to shape the future  of  customer experiance </p>
                                    <button type="button" class="btn btn-dark text-center py-2 px-3">Talk to anExpert <IoIosArrowForward/></button>
                            </div>
                            <div>
                            <img src={firstslide} class="d-block images" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={secondslide} class="d-block images" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon " aria-hidden="true"><IoIosArrowBack className='arrowicons'/></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"><IoIosArrowForward className='arrowicons'/></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Home