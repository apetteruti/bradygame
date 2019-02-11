import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import cards from "./cards.json";
import "./App.css"


class App extends React.Component {
  state = {
    cards, //remember this creates an array, so you don't need to make an empty array
    correct: 0,
    total: 0,
    clickedid: []
  };

  //Fisher-Yates shuffle: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array (Thanks to Rafael Trevino for his help)
  shuffleCards = () => {
    let cardArray = this.state.cards;
    function shuffle (array){
      var i = 0, j = 0, temp = null
      for(i = array.length - 1; i > 0; i -= 1){
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
      array[j] = temp      
    }
    }
    shuffle (cardArray)
    // this.setState ({cards:cardArray})
  } ;


  //create a function to change "clicked" to true if it's clicked. 
clickedFunction = id => {

  console.log(id);
  // const cards = this.state.cards;
  console.log(this.state.clickedid);

  //go ahead with the game if less than 12 (the number of the cards)
  if(this.state.correct !== 12){
    //if the card has already been clicked, you find it in the array of ids
    if(this.state.clickedid.includes(id)){
    
    alert (`You already clicked that Brady! Please start over.`)

    //reset correct to 0
    this.setState ({correct: 0})
    //reset the clicked id array
    this.setState ({clickedid: []})
  
    //then shuffle per the function above
    this.shuffleCards();
    }

    //if the id isn't in the array, then go ahead with pushing the id, etc.
    else {

    //if the card hasn't been clicked, push the id into the array
    this.state.clickedid.push(id);

    //add one to correct
    let newCorrect = (this.state.correct) +1;
    console.log(newCorrect);

    //add one to the correct score
    this.setState ({correct: newCorrect})
  
    //shuffle game again
    this.shuffleCards();
    }
  }

  //if the correct score is greater than 11, then add one to the total score...
  else {
  //send alert
  alert (`Groovy! You clicked all the Bradys! Let's try again.`)

  //add one to the total score
    let newTotal = (this.state.total) +1;
    this.setState ({total: newTotal});

  //set correct back to zero
  this.setState({correct: 0});

  //set the total to the new score

  //reset the clicked id array
  this.setState ({clickedid: []})

  //shuffle the game game again
  this.shuffleCards();
   }
}

  render(){  
    return (
      <div>
        <Navbar>
         correct = {this.state.correct}
         total = {this.state.total}
        </Navbar>
      <Jumbotron></Jumbotron>
      <Wrapper>
      {this.state.cards.map (cards => {
        return (
        <Card
          clickedFunction={this.clickedFunction}
          image={cards.image}
          clicked={cards.clicked}
          id={cards.id}
          key={cards.id}
        />
        )
      })}
    </Wrapper>
      </div>
    )
  }
}




export default App;
