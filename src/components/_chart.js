import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


class Chart extends React.Component {
state = {
  dataDoughnut: {

    datasets: [
      {
        data: [45, 15],
        backgroundColor: ["#F7464A", "#46BFBD"],
        hoverBackgroundColor: [
          "#A8B3C5",
          "#616774"
        ]
      }
    ]
  }
}

render() {
    return (
    <MDBContainer>
     
      <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
    </MDBContainer>
    );
  }
}

export default Chart;