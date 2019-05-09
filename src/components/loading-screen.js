import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    const { text } = this.props;
    this.state = {
      text,
    };
  }

  componentDidMount() {
    const { text: propsText, speed } = this.props;
    const { text: stateText } = this.state;
    this.interval = window.setInterval(() => {
      stateText === `${propsText}...`
        ? this.setState(() => ({ text: propsText }))
        : this.setState(prevState => ({ text: `${prevState.text}.` }));
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const { text } = this.state;
    return <p>{text}</p>;
  }
}

LoadingScreen.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
};

LoadingScreen.defaultProps = {
  text: 'Loading',
  speed: 300,
};

export default LoadingScreen;
