const navLinks = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Only on Apple",
    "Accessories",
    "Support"
];

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="text-poppins-200 text-apple-white py-1 d-flex justify-content-center align-items-center w-100 h-100">
                <img src="/images/apple_logo.svg" alt="" className="mx-3" />
                {navLinks.map(item => (
                    <p className="mx-3 mb-0">{item}</p>
                ))}
                <i className="fa fa-magnifying-glass fa-md mx-3"></i>
                <img src="/images/icons/bag.svg" alt="" className="mx-3" />
            </div>
        </nav>
    )
}

export default Navbar;