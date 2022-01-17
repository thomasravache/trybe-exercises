const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 34.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
].sort((a, b) => a.name - b.name);

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
].sort((a, b) => a.name - b.name);

app.get('/recipes', (_req, res) => {
  res.json(recipes);
});

app.get('/drinks', (_req, res) => {
  res.json(drinks);
});

app.get('/recipes/search', (req, res) => {
  const { name, minPrice, maxPrice } = req.query;

  const filteredRecipes = recipes
    .filter((r) => r.name.includes(name) && (r.price >= Number(minPrice) && r.price <= Number(maxPrice)));

  res.status(200).json(filteredRecipes);
});
// http :3001/recipes/search name==Macarrão minPrice==1 maxPrice==34
// http://localhost:3001/recipes/search?name=Macarrão&minPrice=1&maxPrice=34

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;

  const filteredDrinks = drinks.filter((d) => d.name.includes(name));

  res.status(200).json(filteredDrinks);
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  
  const recipe = recipes.find((r) => r.id === parseInt(id));
  
  if(!recipe) return res.status(404).json({ message: 'Recipe not Found' });
  
  res.status(200).json(recipe);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;

  const drink = drinks
    .find((d) => d.id === parseInt(id));

  if(!drink) return res.status(404).json({ message: 'Drink not found' });

  res.status(200).json(drink);
});

app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.post('/drinks', (req, res) => {
  const { name, price } = req.body;
  const maxId = drinks
    .map(({ id }) => id)
    .reduce((a, b) => Math.max(a, b));
  drinks.push({ id: maxId + 1, name, price });
  res.status(201).json({ message: 'Drink created successfully' });
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if(drinkIndex === -1) return res.status(404).json({ message: 'Drink not found' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;

  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if(drinkIndex === -1) return res.status(404).json({ message: 'Drink not found' });

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001');
});
