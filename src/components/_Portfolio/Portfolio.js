import React, { Component } from "react";
import style from "./Portfolio.module.scss";
console.log(style);
export class Portfolio extends Component {
  render() {
    return (
      <section className={style.myWork} id="Portfolio">
        <div>
          <div className="twelve columns collapsed">
            <h1>
              Check Out Some of My Works.Currently using React {React.version}
            </h1>
          </div>
        </div>
      </section>
    );
  }
}
export default Portfolio;
