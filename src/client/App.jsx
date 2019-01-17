import React from 'react';
import Autosuggest from 'react-autosuggest';

// const getSuggestions = value => {
//   const inputValue = value.trim().toLowerCase();
//   const inputLength = inputValue.length;

//   return inputLength === 0 ? [] : ingredients.filter(ingredient =>
//     ingredient.name.toLowerCase().slice(0, inputLength) === inputValue
//   );
// };

// const getSuggestionValue = suggestion => suggestion;

// const renderSuggestion = suggestion => (
//   <div>
//     {suggestion}
//   </div>
// );


class Title extends React.Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div className = "TitleMainContainer">
				<div className = "TitleMainTextContainer">
				 	Cocktail Guru
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
    const ingredients = this.props.userIngredient.join(', ');
    // const { value, suggestions } = this.state;
    // Autosuggest will pass through all these props to the input.
    // const inputProps = {
    //   placeholder: 'Type in a drink',
    //   value,
    //   onChange: this.onChange
    // };
    return (
    	<div className ="SearchMainContainer">
    		<div className = "SearchContainer"> 
					<div>Search Here</div>
					<input type="text" value={this.props.inputbox_text} onChange={this.props.handleInputChange}/>
					<div className="submitIngredient"onClick={this.props.addIngredient}>add ingredient</div>
				</div>
        <div>
          { ingredients }
        </div>
        {/* <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        /> */}
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
			 <div className="flip-cards">
			 	<div className="frontCard">
				 	<img src="https://s3.us-east-2.amazonaws.com/db-cocktail/images/negroni.jpg" />
				</div>
				 <div className="backCard">
				 	<div className="horizontalContainer">
						 <div className="verticalContainer">
								<div>Ingredients</div>
								<div>Apple</div>
								<div>Bananna</div>
								<div className="button" onClick={() => console.log('hi')}>Find out more</div>
						 </div>
					 </div>
				 </div>
				 </div>
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
			recipes_arrObject:[],
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.addIngredient = this.addIngredient.bind(this)
	}
	
	componentDidMount() {
		fetch('http://cocktail-gurus.com:3000/recipes')
			.then(data => data.JSON())
			.then(data => console.log(data))
	}

	handleInputChange(event) {
		this.setState({inputbox_text: event.target.value})
	}

	addIngredient() {
		let temp = [...this.state.userSelectedIngredients_arrString];
		if (this.state.ingredient_arrString.indexOf(this.state.inputbox_text) >= 0) {
    // console.log()
      if (this.state.userSelectedIngredients_arrString.indexOf(this.state.inputbox_text) < 0) {
        temp.push(this.state.inputbox_text);
        this.setState({userSelectedIngredients_arrString: temp});
        this.setState({inputbox_text: ""})
      } else {
        alert('drink already added')
      }
		} else {
			alert('no drinks has this ingredient')
		}
  }
  
  // onChange = (event, { newValue }) => {
  //   this.setState({
  //     value: newValue
  //   });
  // };
  // onSuggestionsFetchRequested = ({ value }) => {
  //   this.setState({
  //     suggestions: getSuggestions(value)
  //   });
  // };
  // onSuggestionsClearRequested = () => {
  //   this.setState({
  //     suggestions: []
  //   });
  // };

  componentDidMount() {
    fetch('http://cocktail-gurus.com:3000/recipes', { mode: 'cors', headers: { 'Access-Control-Allow-Origin': '*' } })
      .then(data => data.json())
      .then(data => console.log(data));
  }

  render() {
    return (
	  <div>
	  	<Title />
			<SearchContainer 
				inputbox_text={this.state.inputbox_text} 
				handleInputChange={this.handleInputChange}
        addIngredient = {this.addIngredient}
        userIngredient = {this.state.userSelectedIngredients_arrString}
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