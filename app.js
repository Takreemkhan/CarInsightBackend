var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const connectDB = require('./db');

// Import route modules
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth'); // Rename loginRouter to authRouter for clarity
const carBrandRoutes = require('./routes/carBrandRoutes');
const carRoutes = require('./routes/carRoutes');
const citiesRoutes = require('./routes/citiesRoutes');
const carListingRoutes = require('./routes/carListingRoutes');
const uploadPhotosRoutes = require('./routes/uploadPhotosRoutes');
// Initialize the express app
var app = express();
connectDB();


app.use(cors());
// Example in Express.js
app.use(cors({
  origin: 'https://main--carinsight.netlify.app'
}));


// Set up view engine if needed (e.g., if you have a views folder)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); // Optional: use Jade or another template engine

app.use(logger('dev'));
app.use(cors()); // Add CORS middleware here to handle cross-origin requests
app.use(express.json()); // Middleware for parsing JSON
app.use(express.urlencoded({ extended: false })); // Middleware for parsing URL-encoded data
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(uploadPhotosRoutes);

// Serve static files (uploaded images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Use the routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', authRouter); // Updated to use `/api` prefix for authRouter
app.use('/api/car-brands', carBrandRoutes);
app.use('/api', carRoutes);
app.use('/api', citiesRoutes);
app.use(carListingRoutes); 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
