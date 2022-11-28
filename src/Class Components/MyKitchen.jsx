import { Component } from "react";
import FCRecipes from "../Functional Components/FCRecipes";


const initRecipesList = [
    { id: 1, name: 'Pho', description: "slow-cooked soup",img:"https://www.fodmapeveryday.com/wp-content/uploads/2017/06/Pho-closeup-copy-855x570.jpg" },
    { id: 2, name: 'Chop Suey',description: "5 minute stir fry,add each vegetable in the order in which they cook.", img: "https://kirbiecravings.com/wp-content/uploads/2020/04/chop-suey-5.jpg" },
    { id: 3, name: 'Pad Thai',description:"stir-fry dish, mix all ingredients together" ,img: "https://glebekitchen.com/wp-content/uploads/2016/11/easypadthaibowltop-1-500x500.jpg" }
  ];

  const doneRecipesList = [];

export default class CCMyKitchen extends Component{

    constructor(props){
        super(props);
        this.state={
            recipes: initRecipesList,
            doneRecipes: doneRecipesList
        }
    }

    deleteRecipes = (id)=>{
        let list = [...this.state.recipes];
        let newList = list.filter((recipe)=>recipe.id !== id);
        let recipeToAdd = list.filter((recipe)=>recipe.id === id)
        let newList2 = [...this.state.doneRecipes];
        newList2 = newList2.concat(recipeToAdd);
        this.setState({recipes:newList, doneRecipes: newList2});
    };

    deleteDoneRecipes = (id)=>{
        let list = [...this.state.doneRecipes];
        let newList = list.filter((recipe)=>recipe.id !== id);
        let recipeToAdd = list.filter((recipe)=>recipe.id === id)
        let newList2 = [...this.state.recipes];
        newList2 = newList2.concat(recipeToAdd);
        this.setState({recipes:newList2, doneRecipes: newList});
    };


    render(){
        return(
            <div>
                <h1>Recipes</h1>
                <h2>Recipes made: {this.state.recipes.length}</h2>
                <FCRecipes sendIdToDelete={this.deleteRecipes} btnValue="Prepare dish!" styleBtn='primary' recipes={this.state.recipes}/>
                <h1>Ready to EAT!</h1>
                <h2>Recipes made: {this.state.doneRecipes.length}</h2>
                <FCRecipes sendIdToDelete={this.deleteDoneRecipes} btnValue="eat!" styleBtn='success' recipes={this.state.doneRecipes}/>
            </div>
        );
    }
}