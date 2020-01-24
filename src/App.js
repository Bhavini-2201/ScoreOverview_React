import React from 'react';
import './App.css';
import {BarGraphView} from './BarGraphView'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      valueCurrentQuant: '',
      valueTargetQuant: '',
      valueCurrentVerbal: '',
      valueTargetVerbal: '',
      bShowCharts: false,
      targetTotalScore: 0,
      currTotalScore: 0,
      storevalueCurrentQuant: 0,
      storevalueTargetQuant: 0,
      storevalueCurrentVerbal: 0,
      storevalueTargetVerbal: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    document.getElementsByClassName("button")[0].disabled = false;
    let nCount = 0;
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("form")[0].elements.length; i++) {
      if (document.getElementsByClassName("form")[0].elements[i].value !== "") {
        nCount++;
      }
    }
    if ((!isNaN(event.target.value) || (event.target.value == "")) && (nCount == 5) && (parseInt(event.target.value) >= 1 && parseInt(event.target.value) <= 60)) {
      this.setState({
        [event.target.name]: event.target.value
      });
      document.getElementsByClassName("button")[0].disabled = false;
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
      document.getElementsByClassName("button")[0].disabled = true;
    }
  }


  handleSubmit(event) {
    //   document.getElementsByClassName("form")[0].reset();
    this.setState({
      bShowCharts: true,
      currTotalScore: 200 + (parseInt(this.state.valueCurrentQuant) + parseInt(this.state.valueCurrentVerbal)) * 5,
      targetTotalScore: (parseInt(this.state.valueTargetQuant) + parseInt(this.state.valueTargetVerbal)) * 5 + 200,
      storevalueCurrentQuant: parseInt(this.state.valueCurrentQuant),
      storevalueCurrentVerbal: parseInt(this.state.valueCurrentVerbal),
      storevalueTargetQuant: parseInt(this.state.valueTargetQuant),
      storevalueTargetVerbal: parseInt(this.state.valueTargetVerbal),
      valueCurrentQuant: "", valueCurrentVerbal: "", valueTargetQuant: "", valueTargetVerbal: ""
    });
    event.preventDefault();
    document.getElementsByClassName("quantCurrId")[0].value = "";
    document.getElementsByClassName("quantTarId")[0].value = "";
    document.getElementsByClassName("verbalCurrId")[0].value = "";
    document.getElementsByClassName("verbalTarId")[0].value = "";
    document.getElementsByClassName("button")[0].disabled = true;


  }

  render() {
    return (
      <div>
        <GMATScoreForm inputName={this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <br></br>
        <div>
          <BarGraphView showCharts={this.state.bShowCharts} params={this.state} />
          <br></br>
        </div>
      </div>
    );
  }
}

class GMATScoreForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="splitRow">
          <form className="form" onSubmit={this.props.onSubmit}>
            <div className="column">
              <br></br>
              <h3 className="headingId">Quant</h3>
              <label className="lblId">
                Current
          <input className="quantCurrId" name={'valueCurrentQuant'} type="text" maxLength="2" value={this.props.inputName.valueCurrentQuant} onChange={this.props.onChange} />
              </label>
              <label className="lblId">
                Target
          <input className="quantTarId" name={'valueTargetQuant'} type="text" maxLength="2" value={this.props.inputName.valueTargetQuant} onChange={this.props.onChange} />
              </label>
            </div>
            <div className="column1">
              <br></br>
              <h3 className="headingId">Verbal</h3>
              <label className="lblId">
                Current
          <input className="verbalCurrId" name={'valueCurrentVerbal'} type="text" maxLength="2" value={this.props.inputName.valueCurrentVerbal} onChange={this.props.onChange} />
              </label>
              <label className="lblId">
                Target
          <input className="verbalTarId" name={'valueTargetVerbal'} type="text" maxLength="2" value={this.props.inputName.valueTargetVerbal} onChange={this.props.onChange} />
              </label>
            </div>
            <br></br>
            <input className="button" type="submit" value="Submit and Refresh" />
          </form>
        </div>
      </div>
    );
  }
}
export default App;
