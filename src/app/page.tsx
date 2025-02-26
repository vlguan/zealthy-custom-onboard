import React, {useEffect, useState} from 'react';
import backgroundImage from './flower.jpg';
import OnboardPage from "../pages/onboard";
export default function Home() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <OnboardPage/>
    </div>
  );
}
