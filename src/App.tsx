import React from "react"

import "./App.css"

import NavBar from "./core/shared/NavBar"
import Footer from "./core/shared/Footer"
import { routes } from "./core/routes/routes"

import { Container } from "react-bootstrap"

type Props = {}

const App = (props: Props) => {
	return (
		<>
			<NavBar />
			<Container className="my-5">{routes}</Container>
			<Footer />
		</>
	)
}

export default App
