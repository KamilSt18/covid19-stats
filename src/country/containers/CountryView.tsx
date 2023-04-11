import React from 'react'
import { useParams } from 'react-router-dom';

type Props = {}

const CountryView = (props: Props) => {
    const { code } = useParams();
  return (
    <div>CountryView {code}</div>
  )
}

export default CountryView