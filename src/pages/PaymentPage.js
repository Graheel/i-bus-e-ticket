import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PaymentPage.css';
import jsPDF from 'jspdf';
import QRCode from 'qrcode';
import PropTypes from 'prop-types';

const PaymentPage = ({ setShowNavbar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { ticketDetails } = location.state || {}; 
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    if (setShowNavbar) setShowNavbar(false);
    return () => setShowNavbar && setShowNavbar(true);
  }, [setShowNavbar]);

  const generatePDF = useCallback(async () => {
    if (!ticketDetails) return;

    const { username, source, destination, date, price } = ticketDetails;

    const doc = new jsPDF();
    doc.text(`Ticket Details`, 20, 20);
    doc.text(`Username: ${username}`, 20, 30);
    doc.text(`Source: ${source}`, 20, 40);
    doc.text(`Destination: ${destination}`, 20, 50);
    doc.text(`Date: ${date}`, 20, 60);
    doc.text(`Total Price: ₹${price}`, 20, 70);

    const qrCodeData = `${username}_${source}_${destination}_${date}_${price}`;
    const qrCodeDataUrl = await QRCode.toDataURL(qrCodeData);

    doc.addImage(qrCodeDataUrl, 'PNG', 20, 80, 50, 50);

    const pdfOutput = doc.output('blob');
    const url = URL.createObjectURL(pdfOutput);
    setPdfUrl(url);
  }, [ticketDetails]);

  useEffect(() => {
    if (!ticketDetails) {
      alert('No ticket details found!');
      navigate('/');
    } else {
      generatePDF();
    }
  }, [ticketDetails, navigate, generatePDF]);

  const handlePayment = (method) => {
    alert(`Payment via ${method} successful!`);
    if (pdfUrl) window.open(pdfUrl, '_blank');
    navigate('/'); 
  };

  if (!ticketDetails) return null; 

  return (
    <div className="payment-page">
      <h1>Payment Portal</h1>
      <h3>Total Amount: ₹{ticketDetails.price}</h3>
      <div className="payment-methods">
        <button onClick={() => handlePayment('Credit Card')} className="payment-btn">
          Pay with Credit Card
        </button>
        <button onClick={() => handlePayment('Debit Card')} className="payment-btn">
          Pay with Debit Card
        </button>
        <button onClick={() => handlePayment('UPI')} className="payment-btn">
          Pay with UPI
        </button>
      </div>
      <div className="ticket-info">
        <h3>Your Ticket</h3>
        <p><strong>Username:</strong> {ticketDetails.username}</p>
        <p><strong>Source:</strong> {ticketDetails.source}</p>
        <p><strong>Destination:</strong> {ticketDetails.destination}</p>
        <p><strong>Date:</strong> {ticketDetails.date}</p>
        <p><strong>Total Price:</strong> ₹{ticketDetails.price}</p>
      </div>
    </div>
  );
};

PaymentPage.propTypes = {
  setShowNavbar: PropTypes.func.isRequired,
};

export default PaymentPage;
