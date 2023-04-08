import React from "react"

import logo from "../../assets/icons/logo.svg"

import { Container, Navbar } from "react-bootstrap"

type Props = {}

const NavBar = (props: Props) => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="#home">
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
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				{/* <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse> */}
			</Container>
		</Navbar>
	)
}

export default NavBar
