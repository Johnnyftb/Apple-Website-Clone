const Hero = () => {

    return (
        <div className="hero">
            <div className="macbook my-3">
                <div className="image-container d-flex justify-content-center align-items-center h-100 w-100">
                    <img src="/images/hero_macbook_air.png" alt="" className="h-100" />
                </div>
                <div className="container p-5 d-flex align-items-center text-poppins-200 text-dark h-100 w-50">
                    <div className="text-center">
                        <h1 className="text-poppins-600 display-4 mb-3">Macbook Air</h1>
                        <img src="/images/supercharged.png" alt="" className="mb-3" />
                        <p className="lead text-secondary text-poppins-300 mb-3">Available next month</p>
                        <div className="d-flex align-items-center">
                            <p className="lead text-primary text-poppins-300 mx-3 fw-bold mb-0">Learn More <i className="fa fa-angle-right fa-md ms-1"></i></p>
                            <p className="lead text-primary text-poppins-300 mx-3 fw-bold mb-0">View Pricing <i className="fa fa-angle-right fa-md ms-1"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="iphone my-3">
                <div className="image-container d-flex justify-content-center align-items-center h-100 w-100">
                    <img src="/images/hero_iphone13.png" alt="" className="h-100" />
                </div>
                <div className="container p-5 d-flex flex-column align-items-center text-poppins-200 text-dark h-100">
                    <div className="text-center">
                        <h1 className="text-poppins-600 display-4 mb-3">iPhone 13</h1>
                        <h3 className="text-secondary text-poppins-300 mb-3">Your new superpower.</h3>
                        <div className="d-flex align-items-center">
                            <p className="lead text-primary text-poppins-300 mx-3 fw-bold mb-0">Learn More <i className="fa fa-angle-right fa-md ms-1"></i></p>
                            <p className="lead text-primary text-poppins-300 mx-3 fw-bold mb-0">Buy <i className="fa fa-angle-right fa-md ms-1"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="airpods my-3 mb-0">
                <div className="image-container d-flex justify-content-center align-items-center h-100 w-100">
                    <img src="/images/hero_airpods.jpg" alt="" className="h-100" />
                </div>
                <div className="container p-4 d-flex flex-column align-items-center justify-content-end text-poppins-200 text-light h-100">
                    <div className="text-center">
                        <h1 className="text-poppins-600 display-4 mb-3">AirPods</h1>
                        <h3 className="text-poppins-300 mb-3">with Spatial Audio</h3>
                        <div className="d-flex align-items-center">
                            <p className="lead text-poppins-300 mx-3 fw-bold mb-0">Learn More <i className="fa fa-angle-right fa-md ms-1"></i></p>
                            <p className="lead text-poppins-300 mx-3 fw-bold mb-0">Buy <i className="fa fa-angle-right fa-md ms-1"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Hero;