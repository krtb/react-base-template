import './styles/index.css'

const trashBurgerRecipe = {
    trash: 1,
    bacon: 44,
    onions: 3,
}

const improvedTrashBurger = {
    ...trashBurgerRecipe,
    trash: 0,
    pickles: 4,
}

console.log(trashBurgerRecipe)
console.log(improvedTrashBurger)