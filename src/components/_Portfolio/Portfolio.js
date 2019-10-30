import React, { Component } from "react";
import style from "./Portfolio.module.scss";
export class Portfolio extends Component {
    render() {
        return (
            <div className={style.myWork} id="Portfolio">
                <div>
                    <div className="twelve columns collapsed">
                        <h1>
              Currently using React {React.version}
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default Portfolio;
