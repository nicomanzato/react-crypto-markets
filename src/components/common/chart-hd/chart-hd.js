import React, { Component } from "react";
import Chart from "react-apexcharts";

export class ChartHD extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar",
                    animations: {
                        enabled: false
                    },
                    toolbar: {
                        show: false
                    }
                },
                xaxis: {
                    categories: props.data.map((day) => day.date)
                },
                yaxis: {
                    labels: {
                      formatter: (value) => Number.parseFloat(value).toFixed(2)
                    },
                  },
            },
            series: [
                {
                    name: "Price USD",
                    data: props.data.map((day) => day.price)
                }
            ]
        };
    }

    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
            />
        );
    }
}

export default ChartHD;