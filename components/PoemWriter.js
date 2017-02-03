const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {poem: ""}
    this.handlePoem = this.handlePoem.bind(this)
    this.validPoem = this.validPoem.bind(this)
  }

  handlePoem(event){
    var poemText = event.target.value
    this.setState({poem: poemText})

  }

  validPoem(){

    var lines = (this.state.poem.length !== 0 || this.state.poem.length !== undefined) ? this.state.poem.trim().split("\n") : false
    var firstLine = (lines[0] !== undefined) ? lines[0].trim().split(' ') : false
    var secondLine = (lines[1] !== undefined) ? lines[1].trim().split(' ') : false
    var thirdLine = (lines[2] !== undefined) ? lines[2].trim().split(' ') : false


    return (lines.length === 3 && firstLine.length === 5 && secondLine.length === 3 && thirdLine.length === 5) ? true : false
  }


  render() {


    return (
      <div>
        <textarea rows="3" cols="60" value={ this.state.poem} onChange={ this.handlePoem }/>
        {this.validPoem() ? <p></p> : <div id="poem-validation-error" style={{color: 'red'}}> This poem is not written in the right structure! </div>}
      </div>
    )
  }
}

module.exports = PoemWriter;
