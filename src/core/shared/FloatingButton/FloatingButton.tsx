import React, { useState } from "react"

import "./FloatingButton.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

type Props = {}

const FloatingButton = (props: Props) => {
	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop
		scrolled > 1000 ? setVisible(true) : setVisible(false)
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "auto",
		})
	}
	window.addEventListener("scroll", toggleVisible)
	return (
		<button
			type="button"
			className="btn btn-danger btn-floating btn-lg btn-back-to-top"
			style={{display: visible ? 'block' : 'none'}}
			onClick={scrollToTop}>
			<FontAwesomeIcon icon={faArrowUp} />
		</button>
	)
}

export default FloatingButton
