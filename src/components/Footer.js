const FooterLinks = [
    {
        headers: [
            "Shop and Learn"
        ],
        links: [
            [
                "Store",
                "Mac",
                "iPad",
                "iPhone",
                "Watch",
                "AirPods",
                "TV & Home",
                "AirTag",
                "Accessories",
                "Gift Cards"
            ] 
        ]
    },
    {
        headers: [
            "Services",
            "Account"
        ],
        links: [
            [
               "Apple Music",
               "Apple TV+",
               "Apple Fitness+",
               "Apple News+",
               "Apple Arcade",
               "iCloud",
               "Apple One",
               "Apple Pay",
               "Apple Books",
               "Apple Podcasts",
               "App Store"
            ],
            [
                "Manage your Apple ID",
                "Apple Store Account",
                "iCloud.com"
            ] 
        ]
    },
    {
        headers: [
            "Apple Store"
        ],
        links: [
            [
               "Find a Store",
               "Genius Bar",
               "Today at Apple",
               "Apple Camp",
               "Apple Store App",
               "Refurbished and Clearance",
               "Financing",
               "Apple Trade In",
               "Order Status",
               "Shopping Help",
               "Consumer Law"
            ]
        ]
    },
    {
        headers: [
            "For Business",
            "For Education",
            "For Healthcare"
        ],
        links: [
            [
               "Apple and Business",
               "Shop for Business"
            ],
            [
               "Apple and Education",
               "Shop for K-12",
               "Shop for Universities"
            ],
            [
               "Apple in Healthcare"
            ]
        ]
    },
    {
        headers: [
            "Apple Values",
            "About Apple"
        ],
        links: [
            [
               "Accessibility",
               "Environment",
               "Privacy",
               "Supplier Responsibility"
            ],
            [
               "Newsroom",
               "Apple Leadership",
               "Career Opportunities",
               "Investors",
               "Ethics & Compliance",
               "Events",
               "Contact Apple"
            ]
        ]
    }
]

const Footer = () => {

    return (
        <div className="footer mt-2 bg-light">
            <div className="container py-3 px-5 text-dark">
                <p className="text-secondary">Apple TV+ requires a subscription.</p>
                <hr />
                <div className="row justify-content-between">
                    {FooterLinks.map(item => {
                        return (
                            <div className="col-2">
                                {item.headers.map((header, i) => {
                                    return (
                                        <div className="d-flex flex-column mb-3">
                                            <p className="mb-1 fw-bold">{header}</p>
                                            {item.links[i].map(link => (
                                                <p className="text-secondary mb-1">{link}</p>
                                            ))}
                                        </div>
                                    )
                                })}
                            </div>
                            
                        )
                     })}
                </div>
                <p className="text-secondary mt-4">More ways to shop: <span className="text-primary">Find an Apple Store</span> or <span className="text-primary">other retailer</span> near you. Or call 133-622.</p>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <p className="text-secondary mb-0">Copyright © 2022 Apple Inc. All rights reserved.</p>
                    <p className="text-dark mb-0">Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map</p>
                    <p className="text-secondary mb-0">Australia</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;