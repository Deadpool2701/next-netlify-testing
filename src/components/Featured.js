import styles from "./styles/Featured.module.css";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import Tool from "./Tool";

const Featured = () => {
  const [inputText, setinputText] = useState("");
  const [toolView, settoolView] = useState("MainTool");


  const postData = async (event) => {
    event.preventDefault();
    const inputTextData = {
      
        "txt":inputText  
    
    };
    //  await axios.post(process.env.NEXT_PUBLIC_API_URL, inputTextData)

    // console.log(inputText);

    viewChange();
  };

  const viewChange = () => {
    settoolView("DetailTool");
  };

  return ( <>
    {toolView === "MainTool" &&
    <div className={styles.container}>
      <div class={styles.heading}>
        <h1>Keyword Density Analyser</h1>
      </div>
      <div class={styles.para}>
        <div class={styles.subheading}>
          <h2>
            Lorem Ipsum is simply<br></br>
            text of the printing
          </h2>

          <div class={styles.text}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
        <div class={styles.pic}>
          <Image src="../img/img1.png" alt="" width="600px" height="350px" />
        </div>
      </div>
      
        <div class={styles.keyword}>
          <div class={styles.subheading}>
            <h2>Type your text or paste here(ctrl+v) </h2>
          </div>

          <form>
            <textarea
              class={styles.textbox}
              type="textarea"
              value={inputText}
              
              onChange={(e) => setinputText(e.target.value)}
              name=""
              id=""
              placeholder="Enter your text"
            />
            <button className={styles.submitButton} onClick={postData}>EVALUATE</button>
          </form>
        </div>
      
    </div>
    }
    {toolView === "DetailTool" && <Tool Data= {inputText} />}
    </>
  );
};

export default Featured;
