import React from 'react';


class Title extends React.Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div className = "TitleMainContainer">
				<div className = "TitleMainTextContainer">
				 	Mixogism
				</div>
			</div>

			)
	}
}

class SearchContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
    	<div className ="SearchMainContainer">
    		<div className = "SearchContainer"> 
					<div>Search Here</div>
					<input type="text" value={this.props.inputbox_text} onChange={this.props.handleInputChange}/>
					<div className="submitIngredient"onClick={this.props.addIngredient}>add ingredient</div>
				</div>
    	</div>
   )
  }
}

class DrinksCard extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			 <div className = "drinkIconPictureContainer">
			 </div>

		)
	}
}



class App extends React.Component {
  constructor() {
    super()
    this.state = {
			inputbox_text:"",
			userSelectedIngredients_arrString: [],
			ingredient_arrString: ["sweet vermouth", "orange juice", "simple syrup", "lime juice", "lemon juice", "london dry gin", "vodka", "rum", "dry vermouth", "bourbon whiskey", "rye whiskey", "irish whiskey", "scotch whisky", "japanese whiskey", "whiskey", "whisky", "gin", "campari", "brandy", "cognac", "tequila", "sherry", "7-up", "tonic water", "soda water", "ginger beer", "pisco", "coke", "sake", "ginger ale", "irish cream", "chartreuse", "milk", "eggs", "cranberry jiuce", "triple sec", "beer", "mezcal", "champagne", "white wine", "red wine", "port wine", "sprite", "prosecco", "campari", "bitters", "lime wedge", "ice cube", "olive"],

		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.addIngredient = this.addIngredient.bind(this)
  }

	handleInputChange(event) {
		this.setState({inputbox_text: event.target.value})
	}

	addIngredient() {
		let temp = [...this.state.userSelectedIngredients_arrString];
		if (this.state.ingredient_arrString.indexOf(this.state.inputbox_text) >= 0) {
		console.log()
		temp.push(this.state.inputbox_text);
		this.setState({userSelectedIngredients_arrString: temp});
		this.setState({inputbox_text: ""})
		} else {
			console.log('no drinks has this ingredient')
		}
	}

  render() {
    return (
	  <div>
	  	<Title />
			<SearchContainer 
				inputbox_text={this.state.inputbox_text} 
				handleInputChange={this.handleInputChange}
				addIngredient = {this.addIngredient}
				/>
				<div className = "drinksMainContainer">
				<div className = "drinksIconPicturesFlexContainer">
					<DrinksCard />
					<DrinksCard />
					<DrinksCard />
					<DrinksCard />
					<DrinksCard />
					<DrinksCard />
					<DrinksCard />
					<DrinksCard />
					<DrinksCard />
				</div>
				</div>
	  </div>
    )
  }
}

export default App;