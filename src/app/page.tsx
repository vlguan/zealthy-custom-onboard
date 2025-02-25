import React, {useEffect, useState} from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import adminPage from '../components/admin';
import OnboardPage from "../pages/onboard";
export default function Home() {
  return (
    <div>
      {/* <Route path='/admin' elements={<adminPage/>}/> */}
      {/* <Route path='/' elements={<onboardPage/>}/> */}
      <OnboardPage/>
    </div>

    
  );
}
