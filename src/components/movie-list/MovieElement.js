import React, { Component } from "react";

export default class MovieElement extends Component {
  render() {
    return (
      <div className="w-25 p-2">
        <div className="card">
          <img
            src="https://thecanniballecteur.files.wordpress.com/2018/05/49226cc2be5cb537218993fa89d075a8.jpg?w=584&h=876"
            alt="film"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">GLADIATOR</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              ullamcorper, ligula vitae pharetra tincidunt, nisi diam interdum
              tellus, at ultrices felis elit vitae ex. Quisque erat arcu,
              laoreet eget consectetur vel, accumsan sit amet neque. Quisque nec
              pharetra risus. Suspendisse ut posuere dui. Ut metus purus, congue
              eget ipsum sed, pulvinar sodales mi. Nullam nec tellus ac lorem
              ornare vulputate eu in magna. Phasellus orci nunc, hendrerit nec
              euismod a, bibendum id metus.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
