// App.js
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar'; // Adjust the path as necessary
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Client from './pages/Client'; // Import the Client component
import ManageUsers from './pages/ManageUsers'; // Import the ManageUsers component
import TrackPayments from './pages/TrackPayments'; // Import the TrackPayments component
import ManageRates from './pages/ManageRates'; // Import the ManageRates component
import ScheduleCollections from './pages/ScheduleCollections'; // Import the ScheduleCollections component
import PassParcel from './pages/PassParcel'; // Import the PassParcel component
import EditProfile from './pages/EditProfile'; // Import the EditProfile component
import ViewInvoices from './pages/ViewInvoices'; // Import the ViewInvoices component
import RecordPayment from './pages/RecordPayment'; // Import the RecordPayment component
import TrackParcels from './pages/TrackParcels'; // Import the TrackParcels component
import CreateColis from './pages/CreateColis';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    return (
            <div className='App'>
                <Navbar />
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/pass-parcel" element={<CreateColis />} />

                    {/* Add routes for components related to different user roles */}
                    <Route path="/client-area" element={<Client />} />
                    <Route path="/manage-users" element={<ManageUsers />} />
                    <Route path="/track-payments" element={<TrackPayments />} />
                    <Route path="/manage-rates" element={<ManageRates />} />
                    <Route path="/schedule-collections" element={<ScheduleCollections />} />
                    <Route path="/pass-parcel" element={<PassParcel />} />
                    <Route path="/edit-profile" element={<EditProfile />} />
                    <Route path="/view-invoices" element={<ViewInvoices />} />
                    <Route path="/record-payment" element={<RecordPayment />} />
                    <Route path="/track-parcels" element={<TrackParcels />} />
                </Routes>
            </div>
    );
};

export default App;
