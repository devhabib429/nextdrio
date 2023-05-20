import React from 'react'
import Lottie from 'react-lottie';
import Typical from "react-typical";
import techanime from '../images/techanime.json'
// import paytm from '../images/paytm-icon.png'
// import stack from '../images/stack.png'
// import twitter from '../images/twitter.png'
// import linkedin from '../images/linkedin.png'
import tweet1 from '../images/tweet1.png'
import tweet2 from '../images/tweet2.png'


const Community = () => {


    const techanimeOptions = {
        loop: true,
        autoplay: true,
        animationData: techanime,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            <div className="community_hero">
                <div className="communityL_hero">
                    <Lottie
                        options={techanimeOptions}
                        height={400}
                        width={400}
                    />
                </div>
                <div className="communityR_hero">
                    <div className="communityR_head">Smartest Student Community of
                        <Typical
                            steps={[
                                "Java",
                                1000,
                                "Python",
                                1000,
                                "Javascript",
                                1000,
                                "Flutter",
                                1000,
                                "Django",
                                1000,
                                "Flask",
                                1000,
                                "C/C++",
                                1000,
                                "Devops",
                                1000,
                                "Cloud",
                                1000,
                                "Ever Exists :)"
                            ]}
                        />
                    </div>
                    <div className="communityR_btn">
                        <div className="communityR_btn1">Join WhatsApp</div>
                        <div className="communityR_btn2">Join Discord</div>
                    </div>
                </div>
                <div className="community_strip">
                    {/* <div className="community_strip_head">Our Top Member</div> */}
                    <div className="tweet">
                        <img src={tweet1} alt="" className='tweetpost' />
                    </div>
                    <div className="tweet">
                        <img src={tweet2} alt="" className='tweetpost' />
                    </div>
                    {/* <div className="community_strip_list">
                        <div className="community_strip_ls">
                            <div className="community_strip_icon">
                                <img src={paytm} alt="" width={70} height={20} />
                            </div>
                        </div>
                        <div className="community_strip_ls"><div className="community_strip_icon">
                            <img src={stack} alt="" width={140} height={30} />
                        </div>
                        </div>
                        <div className="community_strip_ls"><div className="community_strip_icon">
                            <img src={twitter} alt="" width={60} height={50} />
                        </div>
                        </div>
                        <div className="community_strip_ls"><div className="community_strip_icon">
                            <img src={linkedin} alt="" width={60} height={50} />
                        </div>
                        </div>
                        <div className="community_strip_ls"><div className="community_strip_icon">
                            <img src={paytm} alt="" width={70} height={20} />
                        </div>
                        </div>

                    </div> */}
                </div>
            </div>
            <div className="community_stepper">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="communityL_stepper">
                            <div className="communityL_stepper_head">Why you should join the community!</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="communityR_stepper">
                            <div className="communityR_stepper_card">
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-6 g-5 gx-1">
                                        <div className="communityR_stepper_card1"></div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6 g-5 gx-1">
                                        <div className="communityR_stepper_card2"></div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6 g-5 gx-1">
                                        <div className="communityR_stepper_card3"></div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6 g-5 gx-1">
                                        <div className="communityR_stepper_card4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Community

