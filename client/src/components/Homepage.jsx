import React, { useEffect } from 'react'
import network from '../images/network.json'
import community from '../images/community.json'
import Lottie from 'react-lottie';
import pdiscuss from '../images/programme.svg'
import vision from '../images/vision.png'
import profile1 from '../images/profile1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { NavLink } from 'react-router-dom';

const Homepage = () => {


    useEffect(() => {
        AOS.init();
    }, [])

    // slider tech stuff
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     cssEase: "linear",
    //     autoplaySpeed: 2000,
    // };
    // End slider

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: network,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const communityOptions = {
        loop: true,
        autoplay: true,
        animationData: community,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };




    return (
        <>

            <div className='landing_content'>

                {/* HERO */}
                <div className="hero_main">
                    <div className="hero_img">
                        <div className="content">
                            <div className="hero_content_title">
                                <span className='hero_content' >India’s most active <br />student community with <br /><span className='hero_content_number' >100,000+</span> members.</span>
                            </div>
                            <div className="hero_content_desc">
                                <span className='hero_content_sub_desc' >Learn from experts and network through events, join clubs and learn <br /> real life skills, hang out on our discord server to make new friends and have fun!

                                </span>
                            </div>
                            <div className="hero_content_action">
                                <div className="hero_action1">Download the App</div>
                                <div className="hero_action2">Continue in Browser</div>
                            </div>
                        </div>
                        <div className="hero_content_lottie">
                            <Lottie
                                options={defaultOptions}
                                height={400}
                                width={400}
                            />
                        </div>
                    </div>
                </div>

                {/* END HERO */}

                {/* CARD */}
                <div className="home_card">
                    <div className="container overflow-hidden card_combine">
                        <div className="row gy-5">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title p-3 p-3">Community</h5>
                                        {/* <h6 className="card-subtitle mb-2 text-muted card_sub">Card subtitle</h6> */}
                                        <p className="card-subtitle mb-2 text-muted"><span className='card_sub'><span className='card_sub'>Some quick example text to build on the card title and make up the bulk of the card's content.</span></span></p>
                                        {/* <a href="#" className="card-link">Card link</a> */}
                                        {/* <a href="#" className="card-link">Another link</a> */}
                                        <NavLink exact to="/" className="card_arrow"><i class="fa fa-arrow-right"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title p-3">Scale Up</h5>
                                        {/* <h6 className="card-subtitle mb-2 text-muted card_sub">Card subtitle</h6> */}
                                        <p className="card-subtitle mb-2 text-muted card_sub"><span className='card_sub'>Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
                                        <NavLink exact to="/" className="card_arrow"><i class="fa fa-arrow-right"></i></NavLink>
                                        {/* <a href="#" className="card-link">Another link</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title p-3">Automation</h5>
                                        {/* <h6 className="card-subtitle mb-2 text-muted card_sub">Card subtitle</h6> */}
                                        <p className="card-subtitle mb-2 text-muted card_sub"><span className='card_sub'>Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
                                        <NavLink exact to="/" className="card_arrow"><i class="fa fa-arrow-right"></i></NavLink>
                                        {/* <a href="#" className="card-link">Another link</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title p-3">Resources</h5>
                                        {/* <h6 className="card-subtitle mb-2 text-muted card_sub">Card subtitle</h6> */}
                                        <p className="card-subtitle mb-2 text-muted card_sub"><span className='card_sub'>Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
                                        <NavLink exact to="/" className="card_arrow"><i class="fa fa-arrow-right"></i></NavLink>
                                        {/* <a href="#" className="card-link">Another link</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title p-3">Build</h5>
                                        {/* <h6 className="card-subtitle mb-2 text-muted card_sub">Card subtitle</h6> */}
                                        <p className="card-subtitle mb-2 text-muted card_sub"><span className='card_sub'>Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
                                        <NavLink exact to="/" className="card_arrow"><i class="fa fa-arrow-right"></i></NavLink>
                                        {/* <a href="#" className="card-link">Another link</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title p-3">Project</h5>
                                        {/* <h6 className="card-subtitle mb-2 text-muted card_sub">Card subtitle</h6> */}
                                        <p className="card-subtitle mb-2 text-muted card_sub"><span className='card_sub'>Some quick example text to build on the card title and make up the bulk of the card's content.</span></p>
                                        <NavLink exact to="/" className="card_arrow"><i class="fa fa-arrow-right"></i></NavLink>
                                        {/* <a href="#" className="card-link">Another link</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END CARD */}

                {/* Provide Section */}

                <div className="provides">
                    <div className="row">
                        <div className="sectionL col-12  col-md-6">
                            <img src={pdiscuss} alt="" />
                        </div>
                        <div className="sectionR col-12 col-md-6">
                            <div className="sectionR_head">What we Do</div>
                            <div className="sectionR_border"></div>
                            <p className="sectionR_desc">Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type and scrambled it to make a <br /> type specimen book.</p>
                            <div className="sectionR_action">Check it Out</div>
                        </div>
                    </div>
                </div>

                {/* END povide section*/}
                {/* VISION SECTION */}

                <div className="vision">
                    <div className="sectionL">
                        <span className='sectionL_head'>feel special more often.</span>
                    </div>
                    <div className="sectionR" data-aos="fade-left">
                        <img src={vision} alt="" />
                    </div>
                </div>


                {/* END VISION SECTION */}

                {/* FOCUS */}

                <div className="focus">
                    <div className="focus_L">
                        <div className="focusL_content">
                            <Lottie
                                options={communityOptions}
                                height={400}
                                width={400}
                            />
                        </div>
                    </div>
                    <div className="focus_R">
                        <div className="focusR_content">
                            <span className='focusR_head'>Why you should join <br /> the community!</span>
                            <p className="focusR_desc">Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type and scrambled it to make a <br /> type specimen book.</p>
                            <div className="focusR_action">Check Out Blogs</div>
                        </div>
                    </div>
                </div>



                {/* END FOCUS */}


                {/* FORM & TESTIMONIAL */}


                <div className="container-fluid testimonial">
                    <div className="row testimoial_row">
                        <div className="sectionL col-12 col-lg-6">
                            <div className="sectionL_form">
                                <div className="contactus">Get Touch</div>
                                <div className="contactus_border"></div>
                                <form className='sectionL_form_sub'>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Full Name</label>
                                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Full Name" />

                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Phone</label>
                                        <input type="text" className="form-control" id="phone" placeholder="Enter Phone" />
                                    </div>
                                    <button type="submit" className="contact_btn">Get Touch</button>
                                </form>
                            </div>
                        </div>
                        <div className="sectionR col-12 col-lg-6">
                            <div className="setionR_testimonial">
                                <Swiper
                                    effect={"cards"}
                                    grabCursor={true}
                                    modules={[EffectCards]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="test_card">
                                            <div className="profile_photo">
                                                <img src={profile1} alt="" />
                                                <div className="profile_desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                                                <p className='profile_name' >~ Alex John</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide><div className="test_card">
                                        <div className="profile_photo">
                                            <img src={profile1} alt="" />
                                            <div className="profile_desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                                            <p className='profile_name' >~ Alex John</p>
                                        </div>
                                    </div></SwiperSlide>
                                    <SwiperSlide><div className="test_card">
                                        <div className="profile_photo">
                                            <img src={profile1} alt="" />
                                            <div className="profile_desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                                            <p className='profile_name' >~ Alex John</p>
                                        </div>
                                    </div></SwiperSlide>
                                    <SwiperSlide><div className="test_card">
                                        <div className="profile_photo">
                                            <img src={profile1} alt="" />
                                            <div className="profile_desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                                            <p className='profile_name' >~ Alex John</p>
                                        </div>
                                    </div></SwiperSlide>
                                    <SwiperSlide><div className="test_card">
                                        <div className="profile_photo">
                                            <img src={profile1} alt="" />
                                            <div className="profile_desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                                            <p className='profile_name' >~ Alex John</p>
                                        </div>
                                    </div></SwiperSlide>
                                    <SwiperSlide><div className="test_card">
                                        <div className="profile_photo">
                                            <img src={profile1} alt="" />
                                            <div className="profile_desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                                            <p className='profile_name' >~ Alex John</p>
                                        </div>
                                    </div></SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

                {/* End FORM & TESTIMONIAL */}

                {/* END CROUSEL */}
            </div>

        </>
    )
}

export default Homepage