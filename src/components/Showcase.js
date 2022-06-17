const Showcase = () => {
    
    return (
        <div className="showcase">
            <div className="content d-flex flex-wrap justify-content-center w-100 py-2 mx-auto">
                <div className="macbook w-50 bg-white p-2">
                    <div className="image-container d-flex justify-content-center align-items-center h-100 w-100">
                        <img src="/images/showcase/macbook.jpg" alt="" className="h-100 w-100"/>
                    </div>
                    <div className="container w-100 d-flex align-items-center flex-column text-light p-5">
                        <h1 className="text-poppins-600 mb-1">MacBook Pro 13"</h1>
                        <img src="/images/showcase/macbook_supercharged.png" alt="" className="mb-1" />
                        <p className="text-secondary mb-1 text-poppins-300">Order starting at 10:00 pm AEST on 17.6</p>
                        <p className="text-secondary mb-2 text-poppins-300">Available starting 24.6</p>
                        <div className="d-flex align-items-center">
                            <p className="text-primary text-poppins-300 mx-3 mb-0">Learn More <i className="fa fa-angle-right fa-md ms-1"></i></p>
                            <p className="text-primary text-poppins-300 mx-3 mb-0">View Pricing <i className="fa fa-angle-right fa-md ms-1"></i></p>
                        </div>
                    </div>
                </div>
                <div className="iphone w-50 bg-white p-2">
                    <div className="image-container d-flex justify-content-center align-items-center h-100 w-100">
                        <img src="/images/showcase/iphone.jpg" alt="" className="h-100 w-100"/>
                    </div>
                    <div className="container w-100 d-flex align-items-center flex-column text-dark p-5">
                        <h1 className="text-poppins-600 mb-1">iPhone 13 Pro</h1>
                        <p className="lead mb-2 text-poppins-300">Oh. So. Pro.</p>
                        <div className="d-flex align-items-center">
                            <p className="text-primary text-poppins-300 mx-3 mb-0">Learn More <i className="fa fa-angle-right fa-md ms-1"></i></p>
                            <p className="text-primary text-poppins-300 mx-3 mb-0">Buy <i className="fa fa-angle-right fa-md ms-1"></i></p>
                        </div>
                    </div>
                </div>
                <div className="watch w-50 bg-white p-2">
                    <div className="image-container d-flex justify-content-center align-items-center h-100 w-100">
                        <img src="/images/showcase/watch.jpg" alt="" className="h-100 w-100"/>
                    </div>
                    <div className="container w-100 d-flex align-items-center flex-column text-dark p-5">
                        <img src="/images/showcase/watch_img.png" alt="" className="mb-1"/>
                        <p className="lead mb-2">It's our largest display yet.</p>
                        <div className="d-flex align-items-center">
                            <p className="text-primary text-poppins-300 mx-3 mb-0">Learn More <i className="fa fa-angle-right fa-md ms-1"></i></p>
                            <p className="text-primary text-poppins-300 mx-3 mb-0">Buy <i className="fa fa-angle-right fa-md ms-1"></i></p>
                        </div>
                    </div>
                </div>
                <div className="ipad w-50 bg-white p-2">
                    <div className="image-container d-flex justify-content-center align-items-center h-100 w-100">
                        <img src="/images/showcase/ipad.jpg" alt="" className="h-100 w-100"/>
                    </div>
                    <div className="container w-100 d-flex align-items-center flex-column text-light p-5">
                        <img src="/images/showcase/ipad_air_logo.png" alt=""/>
                        <p className="lead mb-2">Light. Bright. Full of might.</p>
                        <div className="d-flex align-items-center">
                            <p className="text-primary text-poppins-300 mx-3 mb-0">Learn More <i className="fa fa-angle-right fa-md ms-1"></i></p>
                            <p className="text-primary text-poppins-300 mx-3 mb-0">Buy <i className="fa fa-angle-right fa-md ms-1"></i></p>
                        </div>
                    </div>
                </div>
                <div className="airpods w-50 bg-white p-2">
                    <div className="image-container d-flex justify-content-center align-items-end h-100 w-100 bg-black">
                        <img src="/images/showcase/airpods.jpg" alt="" className="h-50"/>
                    </div>
                    <div className="container w-100 d-flex align-items-center flex-column text-light p-5">
                        <h1 className="text-poppins-600 mb-1">AirPods Pro</h1>
                        <p className="lead mb-2 text-poppins-300">Magic like you've never heard.</p>
                        <div className="d-flex align-items-center">
                            <p className="text-primary text-poppins-300 mx-3 mb-0">Learn More <i className="fa fa-angle-right fa-md ms-1"></i></p>
                            <p className="text-primary text-poppins-300 mx-3 mb-0">Buy <i className="fa fa-angle-right fa-md ms-1"></i></p>
                        </div>
                    </div>
                </div>
                <div className="apple-tv w-50 bg-white p-2">
                    <div className="image-container d-flex justify-content-center align-items-center h-100 w-100">
                        <img src="/images/showcase/tv.jpg" alt="" className="h-100 w-100"/>
                    </div>
                    <div className="container w-100 d-flex justify-content-end align-items-center flex-column text-light p-5 h-100">
                        <img src="/images/showcase/apple_tv_logo.png" alt="" className="logo mt-5"/>
                        <img src="/images/showcase/for_all_mankind.png" alt="" className="mb-2 w-25"/>
                        <img src="/images/showcase/mars-1995.png" alt="" className="mb-2 w-25"/>
                        <p className="lead">Stream new episodes <i className="fa fa-circle-play fa-md"></i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase;