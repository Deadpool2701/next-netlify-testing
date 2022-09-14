import styles from "./styles/Tool.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Featured from "./Featured";

const Tool = (props) => {
  const inputTextData = {
    txt: props.Data,
  };

  const [TextData, setTextData] = useState([]);

  const kdaOutput = async () => {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API_URL,
      inputTextData
    );
    setTextData(res.data);
    console.log(TextData);
  };
  useEffect(() => {
    kdaOutput();
  }, []);

  const dataDisplay = () => {
    if (!TextData.length) return;

    const oneWordLength = TextData[2].OneWord.length;
    console.log(oneWordLength);
    const DisplayDataOne = TextData[2].OneWord.map((info) => {
      return (
        <>
          <tr class={styles.tablerow}>
            <td>{info.keyword}</td>
            <td>{info.count}</td>
            <td>{info.density.toFixed(2)}%</td>
          </tr>
        </>
      );
    });
    const DisplayDataTwo = TextData[3].TwoWord.map((info) => {
      return (
        <>
          <tr class={styles.tablerow}>
            <td>{info.keyword}</td>
            <td>{info.count}</td>
            <td>{info.density.toFixed(2)}%</td>
          </tr>
        </>
      );
    });
    const DisplayDataThree = TextData[4].ThreeWord.map((info) => {
      return (
        <>
          <tr class={styles.tablerow}>
            <td>{info.keyword}</td>
            <td>{info.count}</td>
            <td>{info.density.toFixed(2)}%</td>
          </tr>
        </>
      );
    });

    return (
      <div className={styles.table_style}>
        <table class={styles.analysis_table}>
          <thead>
            <tr class={styles.tableheader}>
              <th>One Word</th>
              <th>Count</th>
              <th>Density</th>
            </tr>
          </thead>

          <tbody>{DisplayDataOne}</tbody>
        </table>
        <table class={styles.analysis_table}>
          <thead>
            <tr class={styles.tableheader}>
              <th>Two Word</th>
              <th>Count</th>
              <th>Density</th>
            </tr>
          </thead>
          <tbody>{DisplayDataTwo}</tbody>
        </table>
        <table class={styles.analysis_table}>
          <thead>
            <tr class={styles.tableheader}>
              <th>Three Word</th>
              <th>Count</th>
              <th>Density</th>
            </tr>
          </thead>
          <tbody>{DisplayDataThree}</tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      {TextData.length && (
        <div>
          <div className={styles.container}>
            <div class={styles.heading}>
              <h1>Keyword Density Analyser</h1>
            </div>
            <div class={styles.frequency}>
              <div class={styles.frequency_text}>
                <h2>
                  {TextData[0].no_of_words} Words , {TextData[1].no_of_chars}{" "}
                  Characters
                </h2>
              </div>
            </div>
            <div class={styles.textbox}>
              <div class={styles.textbox_text}>
                <p>{props.Data}</p>
              </div>
            </div>
            <div class={styles.analysis}>
              <div>
                {dataDisplay()}
                {}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tool;
