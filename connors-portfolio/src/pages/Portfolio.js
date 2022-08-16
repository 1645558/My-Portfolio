import React from "react";
import Apparel from '../images/AppareLGBT-Screenshot.png';
import API from '../images/Cocktail-Recipes.png'
import FoodRun from '../images/Food-Run.png';
import BookSearch from '../images/Google-Book-Search (1).png'

const Portfolio = () => {
    return (
        <div class="background-portfolio">
            <section className="p-4">
                <div class="d-flex flex-column">
                    <div class="card text-center col-sm-4 align-self-center bg-dark mb-5">
                        <a href="https://dry-brook-40661.herokuapp.com/" target='_blank' rel='noreferrer'>
                            <img src={Apparel} class="card-img-top"
                                alt="Horiseon" />
                        </a>
                        <div class="card-header">
                            <h4 style={{ color: 'rgb(200, 200, 200)' }}>AppareLGBT</h4>
                            <div class="card-body">
                                <p style={{ color: 'rgb(200, 200, 200)' }}>My favorite React project so far! I worked with a group to create an Ecommerce website utilizing React, GraphQL, Apollo Server, Express.js/Node.js, MongoDB and more!</p>
                            </div>
                        </div>
                    </div>
                    <div class="card text-center col-sm-4 align-self-center bg-dark mb-5">
                        <a href="https://pacific-everglades-44013.herokuapp.com/" target='_blank' rel='noreferrer'>
                            <img src={FoodRun} class="card-img-top" alt="Food Run" />
                        </a>
                        <div class="card-header">
                            <h4 style={{ color: 'rgb(200, 200, 200)' }}>Food Run</h4>
                            <div class="card-body">
                                <p style={{ color: 'rgb(200, 200, 200)' }}>My first ever game! Give it a go in Food Run!</p>
                            </div>
                        </div>
                    </div>
                    <div class="card text-center col-sm-4 align-self-center bg-dark mb-5">
                        <a href="https://that-guy-007.herokuapp.com/" target='_blank' rel='noreferrer'>
                            <img src={BookSearch} class="card-img-top" alt="Book Search" />
                        </a>
                        <div class="card-header">
                            <h4 style={{ color: 'rgb(200, 200, 200)' }}>Book Search Engine</h4>
                            <div class="card-body">
                                <p style={{ color: 'rgb(200, 200, 200)' }}>This is a refactored project! It was a fully functioning Google Books API using RESTful API and has been converted to use GraphQL API built with apollo server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card text-center col-sm-4 align-self-center bg-dark mb-5">
                        <a href="https://1645558.github.io/CocktailAPI-group-project/" target='_blank' rel='noreferrer'>
                            <img src={API} class="card-img-top" alt="Cocktail API" />
                        </a>
                        <div class="card-header">
                            <h4 style={{ color: 'rgb(200, 200, 200)' }}>Cocktail API</h4>
                            <div class="card-body">
                                <p style={{ color: 'rgb(200, 200, 200)' }}>Checkout out this cocktail website, utilizing an API, it grabs all the cocktail information
                                    you could think of!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Portfolio;