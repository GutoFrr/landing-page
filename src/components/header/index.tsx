/* eslint-disable quotes */
/* eslint-disable semi */
// eslint-disable-next-line no-use-before-define
import React from "react";
import Container from "./styles";
import Navbar from "../navbar/index";
import Link from "next/link";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Layout from "../layout/styles";

// import HandsImage from "assets/images/hands.png";

const Header = () => {
  return (
    <Container>
      <Layout>
        <Navbar />
        <main>
          <div>
            <h1>Managing freelance payments has never been easier</h1>
          </div>
          <div>
            <p className="main-txt">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing.
            </p>
          </div>
          <div className="start">
            <button className="get-started-btn">Get Started</button>
            <div className="play-icon">
              <AiFillPlayCircle size={60} />
            </div>
            <Link href="_blank">See How It Works</Link>
          </div>
          <div className="benefits">
            <BsFillCheckCircleFill size={18} />
            <p className="benefits-txt">Free Register</p>
            <BsFillCheckCircleFill size={18} />
            <p className="benefits-txt">Great Service</p>
          </div>
        </main>

        <div>
          <div>
            {/* <img
            src={HandsImage}
          ></img> */}
          </div>
        </div>
      </Layout>
    </Container>
  );
};

export default Header;
