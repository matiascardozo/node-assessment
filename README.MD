To create the database you will have to install Postgres with a user "postgres" and password "postgres". Then run the following commands:

to create the database:

$ npm run create-db

to run the migrations:

$ npm run migrate

to run the seeds:

$ npm run seed

Available endpoints: 
Method: GET,
Url: http://localhost:3000/story/:storyId
Description: returns a Story object with id=storyId

Method: GET,
URL: http://localhost:3000/story/,
Description: returns an array of Story objects available in the database

Method: POST,
URL: http://localhost:3000/story
Body:
{
	"title": "Title",
	"content" : "Content",
	"author" : "Author"
}
Description: creates and returns a new Story object 

Method: PUT,
URL: http://localhost:3000/story/:storyId,
Body:
{
	"title": "Title",
	"content" : "Content",
	"author" : "Author"
}
Description: updates and returns a Story object with id storyId


Method: DELETE,
URL: http://localhost:3000/story/:storyId,
Description: deletes a Story object with id storyId



