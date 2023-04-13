import axios from "axios"
import { SummaryResponse } from "../models/SummaryResponse"
import { TotalByCountryResponse } from "../models/TotalByCountryResponse"
import { WorldResponse } from "../models/WorldResponse"

export const fetchSummary = async () => {
	const { data } = await axios.get<SummaryResponse>(
		"https://api.covid19api.com/summary"
	)
	return data
}

export const fetchTotalByCountry = async (country: string) => {
	const { data } = await axios.get<TotalByCountryResponse[]>(
		`https://api.covid19api.com/total/country/${country}`
	)
	return data
}
export const fetchWorld = async () => {
	const { data } = await axios.get<WorldResponse[]>(
		"https://api.covid19api.com/world"
	)
	return data.sort(
		(a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime()
	)
}
