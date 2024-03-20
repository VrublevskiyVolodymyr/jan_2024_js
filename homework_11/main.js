// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
let h1 = document.querySelector('h1');
h1.style.textAlign = 'center';
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(data => {
        const carts = data.carts;
        const container = document.createElement('div');
        container.classList.add('carts-container');

        carts.forEach((cart, index) => {
            const cartDiv = document.createElement('div');
            cartDiv.classList.add('cart');

            const header = document.createElement('h3');
            header.innerText = `Cart ${index + 1}`;
            cartDiv.appendChild(header);

            const detailsList = document.createElement('ul');
            for (const key in cart) {
                if (key === 'products') {
                    const productsList = document.createElement('ul');
                    cart[key].forEach(product => {
                        const productItem = document.createElement('li');
                        productItem.innerText = `Product ID: ${product.id}, Title: ${product.title}, Price: ${product.price}, Quantity: ${product.quantity}, Total: ${product.total}, Discount Percentage: ${product.discountPercentage}, Discounted Price: ${product.discountedPrice}`;
                        productsList.appendChild(productItem);
                    });
                    const productsListItem = document.createElement('li');
                    productsListItem.appendChild(productsList);
                    detailsList.appendChild(productsListItem);
                } else {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `<strong>${key}:</strong> ${cart[key]}`;
                    detailsList.appendChild(listItem);
                }
            }
            cartDiv.appendChild(detailsList);

            container.appendChild(cartDiv);
        });

        document.body.appendChild(container);
    });


//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.


fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => {
        const recipes = data.recipes;
        const container = document.createElement('div');
        container.classList.add('recipes-container');

        let h2 = document.createElement('h2');
        h2.innerText = 'Recipes';
        h2.style.textAlign = 'center';
        document.body.appendChild(h2);

        recipes.forEach((recipe, index) => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            const header = document.createElement('h3');
            header.textContent = `Recipe ${index + 1}: ${recipe.name}`;
            recipeDiv.appendChild(header);

            const image = document.createElement('img');
            image.src = recipe.image;
            image.alt = recipe.name;
            recipeDiv.appendChild(image);


            const ingredientsList = document.createElement('ul');
            recipe.ingredients.forEach(ingredient => {
                const ingredientItem = document.createElement('li');
                ingredientItem.textContent = ingredient;
                ingredientsList.appendChild(ingredientItem);
            });
            recipeDiv.appendChild(ingredientsList);


            const instructionsList = document.createElement('ol');
            recipe.instructions.forEach(instruction => {
                const instructionItem = document.createElement('li');
                instructionItem.textContent = instruction;
                instructionsList.appendChild(instructionItem);
            });
            recipeDiv.appendChild(instructionsList);

            const detailsList = document.createElement('ul');
            for (const key in recipe) {
                if (key !== 'name' && key !== 'ingredients' && key !== 'instructions' && key !== 'image') {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `<strong>${key}:</strong> ${recipe[key]}`;
                    detailsList.appendChild(listItem);
                }
            }
            recipeDiv.appendChild(detailsList);

            container.appendChild(recipeDiv);
        });

        document.body.appendChild(container);
    });
