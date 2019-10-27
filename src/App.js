import React, { Component } from 'react';
import Header from './components/_Header/Header';
import Experience from './components/_Experience/Experience';
import Portfolio from './components/_Portfolio/Portfolio';
import Testimonials from './components/_Testimonials/Testimonials';
import ContactUs from './components/_ContactUs/ContactUs';
import Footer from './components/_Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Experience />
        <Testimonials />
        <Portfolio />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;