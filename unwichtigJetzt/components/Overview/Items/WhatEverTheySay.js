import React, { Component } from 'react'
import Cover from './../../../bilder/Cover.png'
import PopUp from '../../PopUp/PopUp'
import PropTypes from 'prop-types';
/*
function WhatEverTheySay(props) {

  return (
    <div className="whatever-they-say" onClick={props.onClick}>
      <img src={Cover} alt='Cover' id='WhateverTheySay'></img>
      <div className="side-information">
        <PopUp>Autorin: Charlize Ravelo</PopUp>
        <p className="textnorm">Titel: Whatever They Say</p>
        <p className="textnorm">Genre: Komödie</p>
        <p className="textnorm">Zusammenfassung:<br></br>
          <br></br>
          Die siebzehnjährige Allie Martin hat genau zwei wichtige Regeln aufgestellt. Eine davon Lautet: lass dich niemals von deinen Gefühlen leiten. Eigentlich ist sie auch verdammt gut darin, bis sie von ihren Eltern gezwungen wird, im Kinderheim von Springfield auszuhelfen. Dort arbeitet Luke. Der Junge, der ständig am Lachen ist und überall seine gute Laune verbreitet. Einer der Gründe, warum Allie ihn nicht leiden kann. Leider ist Luke aber auch außerordentlich attraktiv mit seinen eisblauen Augen und diesem perfekten Lächeln. Je besser sich die beiden kennenlernen, desto schwerer fällt es Allie sich an ihre Regeln zu halten. Soll sie es wirklich wagen, sie zu brechen und somit riskieren, dass sich die Vergangenheit wiederholt?
        </p>
        <p className="textnorm">Preis: 5000€</p>
      </div>
    </div>
  )
}
*/

class WhatEverTheySay extends Component{
render(){
  return(
    <div className="whatever-they-say" onClick={this.props.onClick}>
      <img src={Cover} alt='Cover' id='WhateverTheySay'></img>
      <div className="side-information">
        <PopUp>Autorin: Charlize Ravelo</PopUp>
        <p className="textnorm">Titel: {this.props.title}</p>
        <p className="textnorm">Genre: Komödie</p>
        <p className="textnorm">Zusammenfassung:<br></br>
          <br></br>
          Die siebzehnjährige Allie Martin hat genau zwei wichtige Regeln aufgestellt. Eine davon Lautet: lass dich niemals von deinen Gefühlen leiten. Eigentlich ist sie auch verdammt gut darin, bis sie von ihren Eltern gezwungen wird, im Kinderheim von Springfield auszuhelfen. Dort arbeitet Luke. Der Junge, der ständig am Lachen ist und überall seine gute Laune verbreitet. Einer der Gründe, warum Allie ihn nicht leiden kann. Leider ist Luke aber auch außerordentlich attraktiv mit seinen eisblauen Augen und diesem perfekten Lächeln. Je besser sich die beiden kennenlernen, desto schwerer fällt es Allie sich an ihre Regeln zu halten. Soll sie es wirklich wagen, sie zu brechen und somit riskieren, dass sich die Vergangenheit wiederholt?
        </p>
        <p className="textnorm">Preis: 5000€</p>
      </div>
    </div>
    )
  }
}
WhatEverTheySay.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  }

export default WhatEverTheySay