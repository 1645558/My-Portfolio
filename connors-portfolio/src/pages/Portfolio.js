import React from "react";
import Apparel from '../images/AppareLGBT-Screenshot.png';
import API from '../images/Cocktail-Recipes.png'
import FoodRun from '../images/Food-Run.png';

const Portfolio = () => {
    return (
        <section className="p-4" style={{ background: 'rgb(24, 24, 24)'}}>
            <div class="d-flex flex-column">
                <div class="card text-center col-sm-4 align-self-center bg-dark mb-5">
                    <a href="https://dry-brook-40661.herokuapp.com/" target='_blank' rel='noreferrer'>
                        <img src={Apparel} class="card-img-top"
                            alt="Horiseon"/>
                    </a>
                    <div class="card-header">
                        <h4 style={{ color: 'rgb(200, 200, 200)'}}>AppareLGBT</h4>
                        <div class="card-body">
                            <p style={{ color: 'rgb(200, 200, 200)'}}>My favorite React project so far! I worked with a group to create an Ecommerce store with a fully functioning cart and checkout!</p>
                        </div>
                    </div>
                </div>
                <div class="card text-center col-sm-4 align-self-center bg-dark mb-5">
                    <a href="https://1645558.github.io/CocktailAPI-group-project/" target='_blank' rel='noreferrer'>
                        <img src={API} class="card-img-top" alt="Cocktail API" />
                    </a>
                    <div class="card-header">
                        <h4 style={{ color: 'rgb(200, 200, 200)'}}>Cocktail API</h4>
                        <div class="card-body">
                            <p style={{ color: 'rgb(200, 200, 200)'}}>Checkout out this cocktail website, utilizing an API, it grabs all the cocktail informaiton
                                you could think of!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card text-center col-sm-4 align-self-center bg-dark">
                    <a href="https://pacific-everglades-44013.herokuapp.com/" target='_blank' rel='noreferrer'>
                        <img src={FoodRun} class="card-img-top" alt="Food Run" />
                    </a>
                    <div class="card-header">
                        <h4 style={{ color: 'rgb(200, 200, 200)'}}>Food Run</h4>
                        <div class="card-body">
                            <p style={{ color: 'rgb(200, 200, 200)'}}>By far my favorite project yet! Give it a go in Food Run!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Portfolio;