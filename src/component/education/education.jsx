import React from "react";
import SubTitle from "../subtitle/subTitle";

const Education = ({ state }) => {
  return (
    <>
      {state && state.subject === "교육" ? (
        <SubTitle name="교육" active={true}></SubTitle>
      ) : (
        <SubTitle name="교육" active={false}></SubTitle>
      )}
      <div>asdfasdfsafasfsafsaf</div>
    </>
  );
};

export default Education;
