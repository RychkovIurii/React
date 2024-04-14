import React, { Component } from 'react'
import "./CardStyles.css";

export default class CardItems extends Component {
  render() {
	return (
		<div className="card-div">
			<div className="card-image">
				<img alt="img" src={this.props.img}/>
			</div>
			<h2>{this.props.title}</h2>
			<p>
				{this.props.text}
			</p>
		</div>
	)
  }
}