const express = require("express");
const tasksRouter = require("./Routes/tasks");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

//custom middleware
//to log requests
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} ${req.get('Origin')}`);
  next();
}

//just another middleware
const atGate = (req, res, next) => {
  console.log(`I am at gate, need help!`);
  next();
}

//auth middleware
const auth = (req, res, next) => {
  if(req.url === '/mellon') {
    next();
  } else {
    res.send('You shall not pass!');
  }
}

//using logger middleware
app.use(logger);

//using atGate middleware
app.use(atGate);

//mellon route
app.get('/mellon', auth, (req, res) => {
  console.log('Gate opening...');
  console.log('Inside and safe!');
  res.send('Welcome Traveler!');
});

// checking if server is working
app.get('/', (req, res) => {
  res.send("hello");
});

//tasks related routes
app.use('/api/tasks', tasksRouter);

//unknown/not created routes
//NOTE: This should be at last. just before the listen
app.use((req, res) => {
  res.status(404).send("Page not available!");
})

app.listen(PORT, () => {
  console.log(`Server listening at port : ${PORT}`);
});