import React from 'react'

const Footer = () => {
    return (
        <div className='footer' >
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="footer1">
                            <div className="footer_brand">NEXTDRIO</div>
                            <div className="footer_brand_desc">NextDrio is India’s largest and smartest <br /> student community that enables students to learn <br /> new skills, grow their network, and get amazing <br /> opportunities in careers.</div>
                            <div className="footer_copywrite">© 2022, Nextdrio Pvt. Ltd. All Rights Reserved.</div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="footer2">
                            <div className="footer_company">COMPANY</div>
                            <div className="footer_company_list">
                                <ul>
                                    <li>About</li>
                                    <li>Privacy Policy</li>
                                    <li>Term Condition</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="footer3">
                            <div className="footer_other">OTHER LINK</div>
                            <div className="footer_other_list">
                                <ul>
                                    <li>Community</li>
                                    <li>Events</li>
                                    <li>Find Work</li>
                                    <li>Blogs</li>
                                    <li>Talk</li>
                                </ul>
                            </div>
                            <div className="footer_social">
                                <div className="twitter"><i class="fa fa-twitter"></i></div>
                                <div className="facebook"><i class="fa fa-facebook-f"></i></div>
                                <div className="instagram"><i class="fa fa-instagram"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer