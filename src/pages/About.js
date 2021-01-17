import React,{useContext} from "react";
import { Context } from "../context/Context";
const About = (props) => {
    const {test} = useContext(Context)
    return (
      <div>
        <h1>This is about page {test}</h1>
      </div>
    );
};

export default About;
