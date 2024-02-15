import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

const Home = () => {
    return (
        <div>
            {/* NavBar */}
            <nav className="navbar bg-dark border-body" data-bs-theme="dark">
                <div className="container-fluid"> 
                    <a className="navbar-brand" href="#">Bootstrap</a>
                    <form className="d-flex" role="search">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>

            <div className="container">
                {/* Jumbotron */}
                <div className="jumbotron m-5">
                    <h1 className="display-4">A Warm Welcome!</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat laborum saepe cupiditate aliquid optio dicta minus, eaque libero aperiam deserunt impedit error? Error eveniet quidem alias inventore ad magni aliquam?</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Card to action!</a>
                </div>

                {/* Cards */}
                <div className="row m-5 p-0">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card">
                            <img src="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" className="card-img-top" alt="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, praesentium consequuntur magni reiciendis commodi ratione eum aspernatur corrupti non tempore odit ad dolor eaque possimus tempora mollitia obcaecati ullam corporis?</p>
                                <a href="#" className="btn btn-primary">Find out More!</a>
                            </div>
                        </div>
                    </div>
					<div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card">
						<img src="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" className="card-img-top" alt="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, praesentium consequuntur magni reiciendis commodi ratione eum aspernatur corrupti non tempore odit ad dolor eaque possimus tempora mollitia obcaecati ullam corporis?</p>
                                <a href="#" className="btn btn-primary">Find out More!</a>
                            </div>
                        </div>
                    </div>
					<div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card">
						<img src="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" className="card-img-top" alt="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, praesentium consequuntur magni reiciendis commodi ratione eum aspernatur corrupti non tempore odit ad dolor eaque possimus tempora mollitia obcaecati ullam corporis?</p>
                                <a href="#" className="btn btn-primary">Find out More!</a>
                            </div>
                        </div>
                    </div>
					<div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card">
						<img src="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" className="card-img-top" alt="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40179869-stock-photo-hiker.jpg" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, praesentium consequuntur magni reiciendis commodi ratione eum aspernatur corrupti non tempore odit ad dolor eaque possimus tempora mollitia obcaecati ullam corporis?</p>
                                <a href="#" className="btn btn-primary">Find out More!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
