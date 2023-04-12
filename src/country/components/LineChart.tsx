import React from "react"
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
import { DatasetType } from "../../core/models/DatasetType"

type Props = { dataset: DatasetType; labels: string[] }

const LineChart = ({ dataset, labels }: Props) => {
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
				display: false,
				text: "Line Chart",
			},
		},
	}

	const data = {
		labels,
		datasets: dataset,
	}

	return <Line options={options} data={data} className="my-3 mb-5" />
}

export default LineChart
