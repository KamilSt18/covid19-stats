import React from "react"

import logo from "../../assets/icons/logo.svg"

import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

type Props = {}

const NavBar = (props: Props) => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
					<Link to={'/'} className="text-decoration-none">
					<Navbar.Brand>
						<img
							alt=""
							src={logo}
							width="30"
							height="30"
							className="d-inline-block align-top me-3"
						/>
						<span className="text-danger h5">COVID19</span>{" "}
						<sup>
							<i className="text-info">Stats</i>
						</sup>
					</Navbar.Brand>
					</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
			</Container>
		</Navbar>
	)
}

export default NavBar
