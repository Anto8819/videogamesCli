<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Videogames Finder SPA

<p align="right">
  <img height="200" src="./videogame.png" />
</p>

## Web site URL: https://videogames-finder.netlify.app/

## Project summary

- This repository is for Frontend only, you'll find backend repo, VideogamesAPI, in mi repository list.
- Videogames catalog consuming data from an external API: https://rawg.io/
- You can search a particular videogame, sort them by name and rating, and apply filters by genre and source (API or created videogame)
- You can create a videogame card which will be storaged in a posgresql database.
- You can find more info of the game such as rating, launch date, platforms and description by clicking in the videogame's card.

## Stack

- Frontend: ReactJS, Redux and SASS.
- Backend: NodeJS and Express.
- Database: PostgreSQL and Sequelize.

## Deployment

- Frontend deployed to Netlify: https://videogames-finder.netlify.app/
- Backend and DB deplyed to Heroku: https://fierce-dawn-86733.herokuapp.com/

## Steps to run it locally

- Plese make sure you have installed yarn, node and redux-devtools-extension (browser extension).
- Clone the repo in a local directory: git clone <repo's url>
- Run yarn install to install required dependencies
- Run yarn start: this will run the SPA in a local server in port 3000.
- Now you can check the videogames finder app in your browser:http://localhost:3000/videogames

