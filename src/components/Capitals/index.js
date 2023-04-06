import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  updateActiveCapitalId = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountryName = () => {
    const {activeCapitalId} = this.state
    const findCountry = countryAndCapitalsList.find(
      each => each.id === activeCapitalId,
    )
    return findCountry.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountryName()
    console.log(activeCapitalId)
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="select"
              onChange={this.updateActiveCapitalId}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachCountryAndCapital => (
                <option
                  className="option"
                  key={eachCountryAndCapital.id}
                  value={eachCountryAndCapital.id}
                >
                  {eachCountryAndCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="paragraph">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
