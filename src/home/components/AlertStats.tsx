import React from "react"
import { Alert } from "react-bootstrap"

type Props = {
	lastUpdated: string | undefined
	confirmedCases: string | undefined
	totalDeaths: string | undefined
	totalRecovered: string | undefined
}

const AlertStats = ({
	lastUpdated,
	confirmedCases,
	totalDeaths,
	totalRecovered,
}: Props) => {
	return (
		<Alert key="danger" variant="danger">
			<Alert.Heading>
				<h2>Global COVID-19 Stats</h2>
				<p className="fs-6 fw-light">Last updated: {lastUpdated}</p>
			</Alert.Heading>
			<hr />
			<h4 className="text-dark">Total confirmed cases: {confirmedCases}</h4>
			<p className="mb-0">
				This is the total number of people who have tested positive for COVID-19
				worldwide. It includes both active cases and those who have recovered.
			</p>
			<hr />
			<h4 className="text-dark">Total deaths: {totalDeaths}</h4>
			<p className="mb-0">
				This is the total number of deaths that have occurred as a result of
				COVID-19 worldwide. It includes deaths of both confirmed and probable
				cases.
			</p>
			<hr />
			<h4 className="text-dark">
				Total recovered: {parseInt(totalRecovered!) || "Not available"}
			</h4>
			<p className="mb-0">
				This is the total number of people who have recovered from COVID-19
				worldwide. It includes both confirmed and probable cases.
			</p>
		</Alert>
	)
}

export default AlertStats
