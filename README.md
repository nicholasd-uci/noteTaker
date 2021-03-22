## Note Taker App

## About

This is using api server called heroku. we are writing our code in VS code and deploying with Heroku. This is an app that we created to make files that can be used for notes and save them for later, edit them always, and delete things that we don't need. 

## Assignment Instructions

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Source Reference 

- [npm](https://www.npmjs.com/)
- [npm express](https://www.npmjs.com/package/express)
- [express js](https://expressjs.com/)
- [nodemon.io](https://nodemon.io/)
- [postman](https://www.postman.com/)
- [Heroku](https://www.heroku.com/)

## Submission Links

![The URL for Heroku:](https://ancient-brushlands-94134.herokuapp.com/)

![The URL for GitHub repository:](https://github.com/nicholasd-uci/noteTaker)

- - -
© 2020 NPRD, Nicholas Paul Ruiz Dallas
