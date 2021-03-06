import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AddressBar from '../AddressBar/AddressBar';
import Classes from '../Classes/Classes';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import DrawingEvent from '../DrawingEvent/DrawingEvent';
import Teachers from '../Teachers/Teachers';
import Quotes from '../Quotes/Quotes';
import Picture from '../Picture/Picture';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <AddressBar />
            <Navbar />
            <Header />
            <Welcome />
            <Classes />
            <DrawingEvent />
            <Teachers />
            <Quotes />
            <Picture />
            <Footer />
        </div>
    );
};

export default Home;