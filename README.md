# Taasks API

### Taasks is a simple CRUD API made using Express in Node js.
### API hosted at [heroku](https://taasks.herokuapp.com/)
### It is made for learning purpose only.


## API calls : 
  - GET     (/)              - just to check API
  - GET     (/mellon)        - Just an extra route for fun
  - GET     (/api/tasks/)    - Get all tasks
  - GET     (/api/task/:id)  - Get a Task with `id`
  - POST    (/api/tasks/)    - Add a Task with `text` value (can also include `date` value)
  - PUT     (/api/tasks/:id) - Update a Task with `id`. You can update `text` or `date` or both.
  - DELETE  (/api/tasks/:id) - Delete a Task with `id`.