import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import cards from "./cards.json";
import Container from "./components/Container";

class App extends Component {

  state = {
    cards,
    score : 0,
    TopScore : 0
  };

gameOver = () => {
  if (this.state.score > this.state.TopScore){
    this.setState({TopScore: this.state.score}, function() {
      console.log(this.state.TopScore);
    });
  }
    this.state.cards.forEach(card => {
      card.count = 0;
    });

    alert(`Game Over  \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }


clickCount = id =>{
  this.state.cards.find((o, i) => {
    if (o.id === id) {
      if(cards[i].count === 0){
        cards[i].count = cards[i].count + 1;
        this.setState({score : this.state.score + 1}, function(){
          console.log(this.state.score);
        });
        this.state.cards.sort(() => Math.random() - 0.5)
        return true; 
      } else {
        this.gameOver();
      }

    }
  });
}

  render() {
    return (
    <Container>
      <Header score={this.state.score} TopScore={this.state.TopScore}>Clicky Game</Header>
     
      {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
    </Container>
      
    );
  }
}


export default App;
