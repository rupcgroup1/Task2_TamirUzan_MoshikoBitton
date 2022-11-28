import FCRecipe from "./FCRecipe";


export default function FCRecipes(props) {

  const getIdToDelete = (id2Delete) => {
    props.sendIdToDelete(id2Delete);
  }


  let recipesStr = props.recipes.map((recipe) => {
    return <FCRecipe
      id={recipe.id}
      name={recipe.name}
      description={recipe.description}
      key={recipe.id}
      img={recipe.img}
      btnValue={props.btnValue}
      sendIdToDelete={getIdToDelete} 
      styleBtn={props.styleBtn}/>;
  }
  )

  return (
    <div>
      {recipesStr}
    </div>
  );

}