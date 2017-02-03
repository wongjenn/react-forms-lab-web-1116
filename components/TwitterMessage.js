const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)

    this.state = {message: "", count: 0};
  }

  handleChange(event){
    var messageContent = event.target.value
    var remaining = this.props.maxChars - messageContent.length
    this.setState({
      message: messageContent,
      count: remaining
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={ this.state.message } onChange={this.handleChange}/>
        <p> {this.props.maxChars}</p>
        <p> remaining characters: {this.state.count}</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
