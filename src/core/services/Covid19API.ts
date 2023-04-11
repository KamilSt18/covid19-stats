import axios from "axios"
import { SummaryResponse } from "../models/SummaryResponse"
import { TotalByCountryResponse } from "../models/TotalByCountryResponse"

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
