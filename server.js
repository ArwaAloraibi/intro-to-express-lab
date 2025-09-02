// Import Express
const express = require('express')


// Create an Express app
const app = express()
const PORT =3000;






//Exercise 1
//Task: Create a route that responds to URLs like /greetings/<username-parameter>.
app.get('/greetings/:name', (req, res) => {
    // Accessing query parameters from the request
    const name = req.params.name;

    // Using the query parameters to customize the response
    res.send(`<h1>Hello there, ${name}! What a delight it is to see you once more</h1>`);
});


//Exercise 2

app.get('/roll/:number', (req,res)=>{

    const number=req.params.number;
    if (number>=0){
    const random= Math.ceil(Math.random() * number);
        res.send(`<h1>You Rolled a ${random}</h1>`);
}    

else{
    res.send('<h1>You must specify a number</h1>')
}

});


//Exercise 3: I Want THAT One!
//Task: Create a route for URLs like /collectibles/<index-parameter>.

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


app.get('/collectibles/:num', (req, res) => {

    const num = req.params.num;

   if (num < collectibles.length && num>=0){
        const name=collectibles[num].name;
        const price=collectibles[num].price;
     res.send(`<h1>So, you want the ${name}? For ${price}, it can be yours!</h1>`);
    }

    else{
     res.send('<h1>This item is not yet in stock. Check back soon!</h1>')
    }

    
});

//Exercise 4: Filter Shoes by Query Parameters

  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];
 //Task: Create a route /shoes that filters the list of shoes based on query parameters.

// Query Parameters:
// min-price: Excludes shoes below this price.
// max-price: Excludes shoes above this price.
// type: Shows only shoes of the specified type.
// No parameters: Responds with the full list of shoes.


app.get('/shoes', (req, res) =>{

   const minPrice=req.query.minPrice;
   const maxPrice=req.query.maxPrice;
   const type=req.query.type;

    if(minPrice){
        filtered = shoes.filter(shoe => shoe.price >= Number(minPrice));
        // Ex: http://localhost:3000/shoes?minPrice=500
        
    } else if (maxPrice) {
        filtered = shoes.filter(shoe => shoe.price <= Number(maxPrice));
        
    } else if (type){
        filtered = shoes.filter(shoe => shoe.type === type);
    } 

    else{
         filtered = shoes;
        //  Ex: http://localhost:3000/shoes

    }
        res.send(filtered);
    
});



// Listen for requests on port 3000
app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
