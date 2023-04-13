import { WorldResponse } from "../models/WorldResponse"

export function totalHomeDatasets(worldData: WorldResponse[] | undefined) {
	return [
		{
			label: "Total Confirmed",
			data: (worldData || []).map(el => el.TotalConfirmed),
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
		{
			label: "Total Deaths",
			data: (worldData || []).map(el => el.TotalDeaths),
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Total Recovered",
			data: (worldData || []).map(el => el.TotalRecovered),
			borderColor: "rgb(191, 255, 0)",
			backgroundColor: "rgba(191, 255, 0, 0.5)",
		},
	]
}
