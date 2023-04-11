import React from "react"
import HomeView from "../../home/containers/HomeView"
import { Route, Routes } from "react-router-dom"
import { ErrorMessage } from "../shared/ErrorMessage"
import CountryView from "../../country/containers/CountryView"

export const routes = (
	<Routes>
		<Route path="/" element={<HomeView />} />
		<Route path="/country/:code" element={<CountryView />} />

		<Route
			path="*"
			element={
				<ErrorMessage>
					Not Found (404) - the requested webpage was not found.
				</ErrorMessage>
			}
		/>
	</Routes>
)
