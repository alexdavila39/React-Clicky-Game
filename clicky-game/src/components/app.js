import React, { Component } from 'react';
import Navbar from "./navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./cards";
import Characters from "./characters.json"

class app extends Component {
    state = {
     Characters,
     alreadyChosen: [],
     result: "You Guessed Correctly!",
     score: 0

    }

    checkAnswer = id =>{
        if(this.state.alreadyChosen.indexOf(id)!== -1){
            this.setState({result: "You Guessed incorrect"});
            
        }else{
            this.setState({
            alreadyChosen: this.state.alreadyChosen.concat(id),
            result: "You Guessed Correctly",
            score : this.state.score +1

            })
        }
    }




    render() {
        return (
            <div>
                <Navbar 
                result = {this.state.result}
                score = {this.state.score}
                />
                <Jumbotron/>
                <div className = "container">
                <div className = "row">
                {this.state.Characters.sort(() => (.5 - Math.random())).map( character =>
                <Cards
                checkAnswer ={this.checkAnswer}
                id ={character.id}
                image = {character.image}
                 />
                )}
                </div>
                </div>
            </div>
        );
    }
}

export default app;

