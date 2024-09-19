import React from "react";


function Index() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white p-0">
                <div className="container-fluid">
                    <div>
                        <span className="navbar-brand mb-0 h1 ps-5 text-black fs-3 fw-bolder"
                        >natasha.</span
                        >
                    </div>
                    <div
                        className="collapse navbar-collapse d-flex justify-content-center"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0 py-lg-3 fw-bold">
                            <li className="nav-item px-lg-3">
                                <a
                                    className="nav-link active border-bottom border-3 border-dark"
                                    aria-current="page"
                                    href="#home"
                                >portfolio</a
                                >
                            </li>
                            <li className="nav-item px-lg-3 fs-6">
                                <a className="nav-link active" aria-current="page" href="#about"
                                >about me</a
                                >
                            </li>
                            <li className="nav-item px-lg-3 fs-6">
                                <a className="nav-link active" aria-current="page" href="#feature"
                                >my blog</a
                                >
                            </li>
                            <li className="nav-item px-lg-3 fs-6">
                                <a className="nav-link active" aria-current="page" href="#services"
                                >reviews</a
                                >
                            </li>
                            <li className="nav-item px-lg-3 fs-6">
                                <a className="nav-link active" aria-current="page" href="#faq"
                                >contact me</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div>
                        <i className="fab fa-twitter pe-3"></i>
                        <i className="fab fa-chrome pe-3"></i>
                        <i className="fab fa-linkedin pe-3"></i>
                        <i className="fab fa-instagram pe-3"></i>
                        <i className="fab fa-facebook-square pe-3"></i>
                    </div>
                </div>
            </nav>

            <div className="bg-white" id="home">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-3 pt-5">
                                    <div className="a fw-bold" style={{fontSize: "small"}}>
                                        download cv
                                    </div>
                                    <br />
                                    <div className="a fw-bold" style={{fontSize: "small"}}>
                                        client review
                                    </div>
                                    <br />
                                    <div className="a fw-bold" style={{fontSize: "small"}}>
                                        my process
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="container">
                                        <div className="black-box bg-info"></div>
                                        <div className="gray-box Drop-shadow">
                                            <img src="./assets/images/img3.png" alt="hero-1" />
                                        </div>
                                        <div className="green-box">
                                            <img src="./assets/images/img5.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-1 pb-0 pt-5">
                                    <div className="b text-nowrap mt-5" style={{fontSize: "small"}}>
                                        missed advice my it no sister
                                    </div>

                                    <div className="pt-3" style={{paddingLeft: "12px"}}>
                                        <img
                                            height="70px"
                                            width="2px"
                                            src="./assets/images/img6.jpeg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="col-11 p-0">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="fw-bold fs-6 pt-2 pb-1">Why Me</div>
                                            <div className="fw-small pb-3" style={{fontSize: "small"}}>
                                                Whether article spirits new her covered hastily sitting
                                                her. Money witty books nor son add. Chicken age had
                                                evening believe but proceed pretend mrs.
                                            </div>

                                            <div className="fw-small pb-2" style={{fontSize: "small"}}>
                                                At missed advice my it no sister. Miss told ham dull knew
                                                see she spot near can. Spirit her entire her called.
                                                Detract yet delight written farther his general.
                                            </div>
                                            <span
                                                className="badge border border-dark border-2 text-black bg-light fw-bold mt-3 p-3 fs-small rounded-0"
                                            >schedule a call</span
                                            >
                                        </div>
                                        <div className="col-4"></div>
                                    </div>

                                    <br />

                                    <div className="fw-bold fs-4">Latest Work</div>
                                    <br />
                                    <div className="row">
                                        <div className="col-4 d-flex justify-content-around p-0">
                                            <div className="card rounded-5" style={{width: "10rem"}}>
                                                <img
                                                    src="./assets/images/img1.jpeg"
                                                    className="card-img-top"
                                                    alt="..."
                                                />
                                            </div>
                                        </div>
                                        <div className="col-4 d-flex justify-content-start p-0">
                                            <div className="card rounded-5" style={{width: "10rem"}}>
                                                <img
                                                    src="./assets/images/img4.jpeg"
                                                    className="card-img-top"
                                                    alt="..."
                                                />
                                            </div>
                                        </div>
                                        <div className="col-4 d-flex justify-content-start ps-4 p-0">
                                            <div className="card rounded-5" style={{width: "5rem"}}>
                                                <img
                                                    src="./assets/images/img7.jpeg"
                                                    className="card-img-top" height="114px" width="80px"
                                                    alt="..."
                                                />
                                            </div>
                                        </div>
                                        <p className="text-info pt-2 m-0">view all</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
