import { DatasetType } from "../models/DatasetType"
import { WorldResponse } from "../models/WorldResponse"

export function newHomeDatasets(newArray: WorldResponse[] | undefined) {
	let newDeathsDataset: DatasetType = [
		{
			label: "New Deaths",
			data: (newArray || []).map(el => el.NewDeaths),
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
	]
	let newConfirmedDataset: DatasetType = [
		{
			label: "New Confirmed",
			data: (newArray || []).map(el => el.NewConfirmed),
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	]

	let newRecoveredDataset: DatasetType = [
		{
			label: "New Recovered",
			data: (newArray || []).map(el => el.NewRecovered),
			borderColor: "rgb(191, 255, 0)",
			backgroundColor: "rgba(191, 255, 0, 0.5)",
		},
	]
	return { newConfirmedDataset, newRecoveredDataset, newDeathsDataset }
}
