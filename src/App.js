import React,{Component} from 'react'
import styled from 'styled-components'

const Div = styled.div`
height: 100vh;
color: #ffffff;
display: flex;
justify-content: center;
align-items: center; 
flex-direction: column;
font-size: 2.5rem;
text-shadow: #fff x;
background: linear-gradient(to right, #13ac99, #101290);

`;
const H1 = styled.h1`
font-size: 2.5rem;
` 

const Button = styled.button`
height: 3rem;
width: 3rem;
margin: 2ren;
font-size: 2rem;
border-radius: 50px;
background: transparent ; 
`
class Contador extends Component{
  state= {
    count:0
  };

  add = () => {
    if (this.state.count < 10) {
      this.setState({
        count: this.state.
          count + 1
      });
    }
  };

  remove = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.
          count - 1
      });
    }
  };

  render() {
    return (
      <Div>
        <H1>Contador</H1>
        <Button onClick={this.add}>+</Button>
        <h2>{this.state.count}</h2>
        <Button onClick={this.remove}>-</Button>
      </Div>
    )
  }
}

export default Contador;