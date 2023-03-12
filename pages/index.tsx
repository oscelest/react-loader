import React, {useState} from "react";
import {Loader} from "../src";
import Style from "./index.module.css";

function IndexPage() {
  
  const [loading, setLoading] = useState<boolean>(false);
  
  return (
    <div className={Style.Component}>
      <div className={Style.Loader}>
        <Loader loading={loading} content={"Hello World"}>
          Hello World
        </Loader>
      </div>
      <div>
        <button className={Style.Button} onClick={onButtonClick}>Set loading</button>
      </div>
    </div>
  );
  
  function onButtonClick() {
    setLoading(!loading);
  }
}

export default IndexPage;
