"use client";
import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Carosello from "./components/Carosello";
import anime from "animejs";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/data";
import About from "./components/About";
import Footer from "./components/Footer";

const Home = () => {
  useEffect(() => {
    // The animation code goes here
    var textWrapper = document.querySelector(".ml2");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime.timeline({ loop: false }).add({
        targets: ".ml2 .letter",
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i,
      });
    }
    AOS.init();
  }, []);

  return (
    <div>
      <div className="container-fluid mt-md-5">
        <div className="row d-flex align-items-center ">
          <div className="col-12 mt-5">
            <h1 className=" ml2  name">Giovanni Luca Felli</h1>
          </div>

          <div className="container-fluid mt-3">
            <div className="row mt-md-5 d-flex justify-content-center align-items-center ">
              <div
                className="col-4"
                data-aos="fade-right"
              >
                <h2 className="myWorks ">W<span className="filter">orks</span> W<span className="filter">eb</span> W<span className="filter">ide</span></h2>
              </div>
              <div className="col-7 " data-aos="fade-left">
                <div className="row d-flex align-items-center m-auto">
                  {data.map((data, index) => (
                    <div className="col-md col-5 p-2 " key={index}>
                      <Link target="_blank" href={data.website}>
                        <Image
                          src={data.img}
                          width={1000}
                          height={1000}
                          alt=""
                          className="imgCarousel rounded"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <About />
        </div>
        <div className="container-fluid contacts" data-aos="fade-left">
      <h1 className=" pt-3">Contacts</h1>
     <Link href={'mailto:info@studioalive.it'} style={{textDecoration:'none'}}> <p>Email: info@studioalive.it</p></Link>
      <p>Phone: +39 351 354 3765</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
