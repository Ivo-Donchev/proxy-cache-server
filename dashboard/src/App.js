import React from 'react';
import _ from 'lodash';

import {Menu, JsonPreviewer} from './components';

import './App.css';

const OPTIONS = [
  {
    value: '/api/v1/living/booking/1',
    payload: {bookingId: 1},
  },
  {
    value: '/api/v1/living/booking/1/kycs',
    payload: {primaryTenant: {passed: false}, secondaryTenant: {passed: true}},
  }
]

class App extends React.Component {
  state = {
    options: OPTIONS, 
    selectedOption: null
  }

  onOptionSelect = ({id}) => {
    const selectedOption = _.findLast(this.state.options, ({value}) => value === id);
    this.setState({selectedOption})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Proxy Cache Server</h1>
        </header>
        <div className="Container">
          <Menu 
            options={this.state.options}
            onOptionSelect={this.onOptionSelect}
          />
          <JsonPreviewer
            jsonObject={_.get(this.state.selectedOption, 'payload', {})}
          />
        </div>
      </div>
    );
  }
}

export default App;
