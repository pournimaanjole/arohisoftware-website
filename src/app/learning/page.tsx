'use client'

import React from 'react';
import Header from "../components/Learnings";
import Footer from '../components/Footer';
import LearningHero from '../components/LearningHero';
import Services from '../components/ServiceList';
import ReinventLearning from '../components/ReinventLearning';
import LearningNavbar from '../components/LearningNavbar';
import Partners from '../components/Partners';
import Leaders from '../components/Leaders';
import Feedform from '../components/Feedform';
import CareersComponent from '../components/CareersComponent';

const App: React.FC = () => {
  return (
    <div className="App bg-black ">
      <Header />
      <main className="pt-20">
        {/* <LearningNavbar /> */}
        <div className="px-12 py-10">
           <LearningNavbar/>
         <Services />
          <ReinventLearning />
          <Partners />
          <Leaders />
          <CareersComponent />
          <Feedform title="Contact Us" /> 
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default App;
