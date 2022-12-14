 import React from 'react';
import "./Header.css";
import logo from "../images/logoblack.svg";

import { AiOutlineHome } from "react-icons/ai";

import { SiPlatformdotsh } from "react-icons/si";

import { MdWorkspacesFilled } from "react-icons/md";

import { GrResources } from "react-icons/gr";
import { BsPeople } from "react-icons/bs";

import { FaBars} from "react-icons/fa";
import Drop from "../Drop/drop"


const Header = () => {
  return (
    <div className='Mainheader'>
      <div className='Headerholder'>
        <div className='Logodiv'>
          <img src={logo} alt='logo'/>
`     `        </div>
        <div className='Navdiv'>
          <div className='Navigation'>
            <AiOutlineHome color='white' />
            <span className='spann'>Home</span>
          </div>
          <div className='Navigation'>
            <SiPlatformdotsh color='white' />
            <span className='spann'>PLATFORM</span>
          </div>
          <div className='Navigation'>
            <MdWorkspacesFilled color='white' />
            <span className='spann'>COMPANY</span>
          </div>
          <div className='Navigation'>
            <GrResources color='white' />
            <span className='spann'>RESOURCES</span>
          </div>
          <div className='Navigation'>
            <BsPeople color='white' />
            <span className='spann'>CUSTOMER</span>
          </div>
        </div>

        <div className='mybars'>
          <FaBars color='white' size= "30px" />
        </div>
        <Drop className='dropbar' />
      </div>
    </div>
  )
}

export default Header;