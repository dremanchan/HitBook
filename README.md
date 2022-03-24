![License](https://img.shields.io/github/license/dremanchan/HitBook.svg?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/dremanchan/HitBook.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/dremanchan/HitBook.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/dremanchan/HitBook.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/dremanchan/HitBook.svg?style=for-the-badge)
    
# HitBook

## Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contacts](#contacts)

## Description

I love video games of the fighting genre. (Smash Bros, Street Fighter, Tekken, etc). Whenever I get comfortable with a character in a game I want to learn other characters. The process of learning a new character in fighting games can be difficult. You have to join a character discord, watch videos, or comb through some dusty forums. I created HitBook to make all of the information you need to get started quickly with a character in one place. Someday I'd like to hand this app off to character experts in the fighting game community and have in-depth character strategies.

## Screenshots

<img src="https://postimg.cc/f3QnFSSN" />## Built With

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

## Getting Started

All of the data in the app was found on other websites and had to be manually inputted into the database. I couldn't find a Smash Bros character API to pull data from. That was my example game in the app demo.

### Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

### Installation

Code editor
- Clone the file on github onto your computer.
- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`
- Open the file folder with your code editor
- Type 'npm install' in your terminal and press enter
- Type 'npm run server' in your terminal
- Open another terminal
- Type 'npm run client' in your terminal and press enter.

- Create a database named 'hitbook' in PostgreSQL
- Open the database.sql file
- Press cmd + a to select all of the text
- Copy and paste the text into your SQL query
- Press cmd + a to select all the text in the query
- Click execute statement to run all of the sql queries to create the database files.



## Usage

When you open up the app for the first time, you'll have to register an account.

Click the game select button after logging in.

Click the character you'd like to see data for.

You can add favorite characters to your favorites page for easy access later by clicking the star on their character page.

You can change whether or not an account is an admin by changing the admin boolean in the user table to true.

Admin accounts can add new characters on the admin page. 

They can also add new moves onto the moves list of each character on their respective character page.


## License

<a href="https://choosealicense.com/licenses/unlicense/"><img src="https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/unlicense.svg" height=40 />The Unlicense</a>

## Acknowledgements

I'd like to thank my instructor Edan Schwartz and the Prime Academy staff for teaching me the skills needed to build this app. I'd like to also thank my classmates in the Woodall cohort for being a constant source of support to help me troubleshoot and fix issues with my app.

## Contacts

<a href="https://www.linkedin.com/in/linkedin.com/in/andre-manchanthasouk"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>  <a href="mailto:dremanchan@gmail.com"><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a>
