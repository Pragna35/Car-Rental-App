import { useState } from "react";
import "../../styles/findCarForm.css";
import { Form, FormGroup, Toast, ToastBody, ToastHeader } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const FindCarForm = () => {
  const [selectedCar, setSelectedCar] = useState("");
  const [fromAdddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [journeyTime, setJourneyTime] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const navigate = useNavigate();

  const handleCarSelect = (e) => {
    setSelectedCar(e.target.value);
  };

  const handleFromAdddress = (e) => {
    setFromAddress(e.target.value);
  };
  const handleToAddress = (e) => {
    setToAddress(e.target.value);
  };
  const handleJourneyDate = (e) => {
    setJourneyDate(e.target.value);
  };
  const handleJourneyTime = (e) => {
    setJourneyTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !selectedCar ||
      !fromAdddress ||
      !toAddress ||
      !journeyDate ||
      !journeyTime
    ) {
      setShowNotification(true);
      return; // Prevent form submission and page navigation
    }
    navigate(`/cars/${selectedCar}`);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="select__group">
          <label htmlFor="car-select">
            Select a Car &nbsp; <b>*</b>
          </label>
          <select
            id="car-select"
            value={selectedCar}
            onChange={handleCarSelect}
          >
            <option value="select">select a car</option>
            <option value="Tesla Malibu">Tesla malibu</option>
            <option value="Toyota Aventador">Toyota Aventador</option>
            <option value="BMW X3">BMW X3</option>
            <option value="Nissan Mercielago">Nissan Mercielago</option>
            <option value="Ferrari Camry">Ferrari Camry</option>
            <option value="Mercedes Benz XC90">Mercedes Benz XC90</option>
            <option value="Audi Fiesta">Audi Fiesta</option>
            <option value="Rolls Royce Colorado">Rolls Royce Colorado</option>
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <label htmlFor="pick-up">
            From Address &nbsp; <b>*</b>
          </label>
          {/* <input type="text" placeholder="pick up location" required /> */}
          <select
            id="pick-up"
            value={fromAdddress}
            onChange={handleFromAdddress}
          >
            <option value="">Pick-up</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <label htmlFor="drop-off">
            To Address &nbsp; <b>*</b>
          </label>
          {/* <input type="text" placeholder="drop location" required /> */}
          <select id="drop-off" value={toAddress} onChange={handleToAddress}>
            <option value="">drop-off</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <label htmlFor="">
            Journey Date &nbsp; <b>*</b>
          </label>
          <input
            type="date"
            placeholder="Journey date"
            value={journeyDate}
            onChange={handleJourneyDate}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <label htmlFor="">
            Journey Time &nbsp; <b>*</b>
          </label>
          <input
            className="journey__time"
            type="time"
            value={journeyTime}
            onChange={handleJourneyTime}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <button className=" find__car-btn">Find Car</button>
        </FormGroup>
      </div>

      {showNotification && (
        <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 13 }}>
          <Toast>
            {/* <ToastHeader icon="warning">Form Incomplete</ToastHeader> */}
            <ToastBody className="notification_body">
              Please fill in all the required details.
              <button
                className="notification_btn"
                onClick={handleCloseNotification}
              >
                <i class="ri-close-fill"></i>
              </button>
            </ToastBody>
          </Toast>
        </div>
      )}
    </Form>
  );
};

export default FindCarForm;
