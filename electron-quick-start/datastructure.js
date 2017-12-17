RecipeType = {
  Main : 1,
  Dessert : 2,
  Side : 3,
  Breakfast : 4,
  Sauce : 5,
  Bread : 6
}

class Recipe {
  constructor () {
    this.title = "";
    this.ingredients = [];
    this.type = RecipeType.Main;
    this.steps = [];
    this.note = "";
  }
  CalcPrice () {
    //placeholder
  }
}


class Ingredient {
  constructor () {
    this.food = "";
    this.price = 0.0;
  }
}
