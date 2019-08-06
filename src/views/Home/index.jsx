import React, { Component } from 'react';
import { connect } from 'react-redux';
import MODULE_CURRENCY from 'modules/currency';
import './style.css';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favorites: [],
    }
  }

  componentDidMount() {
    const { getCurrency } = this.props;

    getCurrency();
  }



  handleChangeBase = (e) => {

    const { getCurrency } = this.props;

    getCurrency(e.target.value);
  }

  onClickAdd = (curr) => () => {
    const { favorites } = this.state;

    if (favorites.indexOf(curr) < 0) {
      const new_array = [...favorites];
      new_array.push(curr);
      new_array.sort();

      this.setState({ favorites: new_array });
    }
  }


  onClickDelete = (curr) => () => {
    const { favorites } = this.state;

    const currency_index = favorites.indexOf(curr);
    const new_array = [...favorites];

    if (currency_index !== -1) {

      new_array.splice(currency_index, 1);

      this.setState({ favorites: new_array });
    }
  }


  render() {
    const { currency, base } = this.props;
    const { favorites } = this.state;

    return (
      <div className="page-home">
        <div className="container">

          <div className="home-container-top">
            <label>Виберіть відносну валюту</label>
            <select value={base} onChange={this.handleChangeBase}>
              {Object.keys(currency).map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>


          {favorites.length !== 0 ? (
            <div className="home-head">
              {favorites.map((item, index) => (
                <div key={index} className="home-head-item">
                  <div className="info">
                    {item}
                  </div>
                  <div className="icon" onClick={this.onClickDelete(item)}>X</div>
                </div>
              ))}
            </div>
          ) : null}

          <div className="home-table">
            {Object.keys(currency).map((item, index) => (
              <div className="home-table-box" key={index} onClick={this.onClickAdd(item)}>
                {`${item} : ${currency[item]}`}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}


export default connect(
  state => ({
    currency: state.currency.list,
    base: state.currency.base,
  }),
  dispatch => ({
    getCurrency: (val) => dispatch(MODULE_CURRENCY.getCurrency(val))
  })
)(Home);