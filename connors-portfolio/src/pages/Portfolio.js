import React from "react";

const Portfolio = () => {
    return (
        <div class="d-flex flex-column">
            <div class="card text-center col-sm-4 align-self-center">
                <a href="https://1645558.github.io/seo-refactor/">
                    <img src="./public/assets/img/Horiseon-Search-Engine-Optimization.png" class="card-img-top"
                        alt="Horiseon" height="300" width="240" />
                </a>
                <div class="card-header">
                    <h4>Horiseon | SEO-Refactor</h4>
                    <div class="card-body">
                        <p>Here is my first project! I had to refactor this website's code to be more semantic and
                            up to date on todays standards.</p>
                    </div>
                </div>
            </div>
            <div class="card text-center col-sm-4 align-self-center">
                <a href="https://1645558.github.io/CocktailAPI-group-project/">
                    <img src="./public/assets/img/Cocktail-Recipes.png" class="card-img-top" alt="" />
                </a>
                <div class="card-header">
                    <h4>Cocktail API</h4>
                    <div class="card-body">
                        <p>Checkout out this cocktail website, utilizing an API, it grabs all the cocktail informaiton
                            you could think of!
                        </p>
                    </div>
                </div>
            </div>
            <div class="card text-center col-sm-4 align-self-center">
                <a href="https://pacific-everglades-44013.herokuapp.com/">
                    <img src="./public/assets/img/Screenshot (18).png" class="card-img-top" alt="" />
                </a>
                <div class="card-header">
                    <h4>Food Run</h4>
                    <div class="card-body">
                        <p>By far my favorite project yet! Give it a go in Food Run!</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;