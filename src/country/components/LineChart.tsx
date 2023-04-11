import React from "react"
import { TotalByCountryResponse } from "../../core/models/TotalByCountryResponse"
import {
	Chart,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

type Props = { data: TotalByCountryResponse[]; label: string; }

const LineChart = ({ data: response, label }: Props) => {
	Chart.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	)

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Line Chart",
			},
		},
	}

	const labels = response.map(el =>
		new Date(el.Date).toLocaleDateString("en-US")
	)

	const data = {
		labels,
		datasets: [
			{
				label: label,
				data: response.map(el => el.Confirmed),
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	}

	return <Line options={options} data={data} />
}

export default LineChart
