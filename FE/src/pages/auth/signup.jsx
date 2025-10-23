import React from 'react'
import SignUp from '../../components/auth/signup'
import InventoShoot from "../../assets/auth/inventoshoot.mp4"
const SignUpPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        src={InventoShoot}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay hitam dengan opacity */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-60"></div>
      {/* Login Form */}
      <div className="relative z-20 w-full flex items-center justify-center">
        <SignUp />
      </div>
    </div>
  );
}

export default SignUpPage;