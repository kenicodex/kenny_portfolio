import React, { useEffect } from 'react'
import './ecomnav.css'
import $ from 'jquery'
import { ecomroutes } from './route'
function EcomNav(params) {
    useEffect(() => {
        $(document).ready(function () {
            $("#sidebarCollapse").on("click", function () {
                $("#sidebar").addClass("active");
            });

            $("#sidebarCollapseX").on("click", function () {
                $("#sidebar").removeClass("active");
            });

            $("#sidebarCollapse").on("click", function () {
                if ($("#sidebar").hasClass("active")) {
                    $(".overlay").addClass("visible");
                    console.log("it's working!");
                }
            });

            $("#sidebarCollapseX").on("click", function () {
                $(".overlay").removeClass("visible");
            });
        });

    })

    return (
        <>
            <div className="overlay"></div>

            <div className="utility-nav d-none d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p className="small"><i className="bx bx-envelope"></i> kehindesalaudeen222@gmail.com | <i className="bx bx-phone"></i> +234 805 649 9531
                            </p>
                        </div>

                        <div className="col-12 col-md-6 text-right">
                            <p className="small">Sample Ecommerce Website developed by Kenny Inc</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-md navbar-light bg-light main-menu" style={{ boxShadow: "none" }}>
                <div className="container">

                    <button type="button" id="sidebarCollapse" className="btn btn-link d-block d-md-none">
                        <i className="bx bx-menu icon-single"></i>
                    </button>

                    <a className="navbar-brand" href="/">
                        <h4 className="font-weight-bold">Kenny Inc.</h4>
                    </a>

                    <ul className="navbar-nav ml-auto d-block d-md-none">
                        <li className="nav-item">
                            <a className="btn btn-link" href="/"><i className="bx bxs-cart icon-single"></i> <span className="badge badge-danger">3</span></a>
                        </li>
                    </ul>

                    <div className="collapse navbar-collapse">
                        <form className="form-inline my-2 my-lg-0 mx-auto d-flex">
                            <input className="form-control" type="search" placeholder="Search for products..." aria-label="Search" />
                            <button className="btn btn-primary my-2 my-sm-0" type="submit"><i className="bx bx-search"></i></button>
                        </form>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="btn btn-link" href="/"><i className="bx bxs-cart icon-single"></i> <span className="badge badge-danger">3</span></a>
                            </li>
                            <li className="nav-item ml-md-3">
                                <a className="btn btn-primary" href="/"><i className="bx bxs-user-circle mr-1"></i> Log In / Register</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

            <nav className="navbar navbar-expand-md navbar-light bg-light sub-menu">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            {ecomroutes.map(({ page, link, icon }, i) => {
                                return (
                                    <li className="nav-item" key={i}>
                                        <a className="nav-link" href={link}>{page}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="search-bar d-block d-md-none">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form className="form-inline mb-3 mx-auto d-flex">
                                <input className="form-control" type="search" placeholder="Search for products..." aria-label="Search" />
                                <button className="btn btn-primary" type="submit"><i className="bx bx-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Sidebar --> */}
            <nav id="sidebar">
                <div className="sidebar-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-10 pl-0">
                                <a className="btn btn-primary" href="/"><i className="bx bxs-user-circle mr-1"></i> Log In</a>
                            </div>

                            <div className="col-2 text-left">
                                <button type="button" id="sidebarCollapseX" className="btn btn-link">
                                    <i className="bx bx-x icon-single"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="list-unstyled components links">
                    {ecomroutes.map(({ page, link, icon },i) => {
                        return (<>
                            <li className="" key={i}>
                                <a href={link}><i className={"'bx bx-" + icon + " mr-3'"} ></i> {page}</a>
                            </li></>)
                    })}
                </ul>

                <h6 className="text-uppercase mb-1">Categories</h6>
                <ul className="list-unstyled components mb-3">
                    <li>
                        <a href="/">Category 1</a>
                    </li>
                    <li>
                        <a href="/">Category 1</a>
                    </li>
                    <li>
                        <a href="/">Category 1</a>
                    </li>
                    <li>
                        <a href="/">Category 1</a>
                    </li>
                    <li>
                        <a href="/">Category 1</a>
                    </li>
                    <li>
                        <a href="/">Category 1</a>
                    </li>
                </ul>

                <ul className="social-icons">
                    <li><a href="/" target="_blank" title=""><i className="bx bxl-facebook-square"></i></a></li>
                    <li><a href="/" target="_blank" title=""><i className="bx bxl-twitter"></i></a></li>
                    <li><a href="/" target="_blank" title=""><i className="bx bxl-linkedin"></i></a></li>
                    <li><a href="/" target="_blank" title=""><i className="bx bxl-instagram"></i></a></li>
                </ul>

            </nav>

            {/* <section></section>
            <section></section>
            <section></section>
            <section></section> */}
        </>
    )
}
export default EcomNav;