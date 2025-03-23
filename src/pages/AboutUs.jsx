import React from 'react';
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faGlobe, faAward, faRocket } from "@fortawesome/free-solid-svg-icons"; 
import "../assets/css/About.css"


function AboutUs() {

    const stats = [
        { icon: <FontAwesomeIcon icon={faHeart} />, value: 159, label: "Satisfied Clients" },
        { icon: <FontAwesomeIcon icon={faGlobe} />, value: 68, label: "Projects a Year" },
        { icon: <FontAwesomeIcon icon={faAward} />, value: 88, label: "Awards Won" },
        { icon: <FontAwesomeIcon icon={faRocket} />, value: 668, label: "Support Tickets" },
      ];




  return (
    <>
        <div className='shop-main'>
            <h1 className='shop-title'>ABOUT US</h1>
            <ul className='breadcurm'>
                <li className='breadcurm-item'><Link rel="stylesheet" to="/" >Home</Link></li>
                <li className='breadcurm-item active'>About Us</li>
            </ul>
        </div>
        <div className="about-details">
            <h2>Amino is largest Organic store</h2>
            <p>Great theme, excellent support. We had a few small issues with getting the dropdown menus to work and support fixed them and let us know which files were changed so that we could replicate from dev to production.</p>
            <img src="https://wp-react-store.aayurfarms.com/wp-content/uploads/2025/03/img_about-scaled-1-2048x1400-1.jpg" alt="" />
        </div>
        <div className="who-we-are">
            <h2>Who We Are ?</h2>
            <p>After every trip to Hawaii, I always have a few DMs asking where we stayed, our favorite beaches, etc. Especially with spring break around the corner, I wanted to share a recap of our trip a couple weeks ago. (I’ve shared a few recaps of where we’ve stayed and our favorite activities when we went as a family – this trip was more of an adult trip but I have multiple posts with guides on past Hawaii trips: a Maui Travel</p>
            <div className="who-we-are-box">
                <h3>Our Values</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis faucibus scelerisque fermentum dui faucibus in. Id diam vel quam elementum pulvinar etiam non. Integer eget aliquet nibh praesent tristique pulvinar etiam. In nibh mauris cursus mattis molestie a iaculis leo.</p>
            </div>
            <div className="who-we-are-box">
                <h3>Our Mission</h3>
                <p>Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Lacus luct us accumsan tortor posuere. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Nec tincidunt praesent semper feugiat. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. In nibh mauris cursus mattis molestie a iaculis. Id diam vel quam elementum non.</p>
            </div>
        </div>
        <div className="counter-boxs">
            {stats.map((stat, index) => (
                <div className='counter-box' key={index}>
                <div className='counter-icon'>{stat.icon}</div>
                <div className="counter-text">
                    <CountUp start={0} end={stat.value} duration={30} delay={0} className='counter-no' />
                    <p>{stat.label}</p>
                </div>
                </div>
            ))}
        </div>
    
    </>
  )
}

export default AboutUs
