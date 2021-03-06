import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { DetailedInfoContainer } from './detailed-info.styles'

import DetailedInfoCard from '../detailed-info-card/detailed-info-card.component'

import {
  selectCurrentWeather,
  selectUnits
} from '../../redux/weather/weather.selectors'

const DetailedInfo = ({
  units,
  currentWeather = {
    precipProbability: '',
    windSpeed: '',
    humidity: '',
    visibility: '',
    uvIndex: '',
    pressure: ''
  }
}) => {
  const {
    precipProbability,
    windSpeed,
    humidity,
    visibility,
    uvIndex,
    pressure
  } = currentWeather

  return currentWeather ? (
    <DetailedInfoContainer>
      <DetailedInfoCard
        title={`${Number.parseFloat(precipProbability * 100).toFixed(1)}%`}
        subtitle="Chance of rain"
      />
      <DetailedInfoCard
        title={`${windSpeed} ${units === 'si' ? 'mps' : 'mph'}`}
        subtitle="Wind"
      />
      <DetailedInfoCard
        title={`${Number.parseFloat(humidity * 100).toFixed(1)}%`}
        subtitle="Humidity"
      />
      <DetailedInfoCard
        title={`${Number.parseFloat(visibility).toFixed(2)} ${
          units === 'si' ? 'km' : visibility > 1 ? 'miles' : 'mile'
        }`}
        subtitle="Visibility"
      />
      <DetailedInfoCard title={uvIndex} subtitle="UV Index" />
      <DetailedInfoCard
        title={`${pressure} ${units === 'si' ? 'hPa' : 'mb'}`}
        subtitle="Pressure"
      />
    </DetailedInfoContainer>
  ) : (
    ''
  )
}

const mapStateToProps = createStructuredSelector({
  currentWeather: selectCurrentWeather,
  units: selectUnits
})

export default connect(mapStateToProps)(DetailedInfo)
