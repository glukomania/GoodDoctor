import React from "react";
import Header from "../Header/header";
import Search from "../Search/search";
import DoctorInfo from "../DoctorInfo/DoctorInfo";
import Feedbacks from "../Feedbacks/Feedbacks";

const Doctor = () => {
  return (
    <div>
      <Header />
      <Search />
      <DoctorInfo />
      <Feedbacks />
    </div>
  );
};

export default Doctor;
