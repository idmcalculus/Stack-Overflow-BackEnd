import mongoose from 'mongoose';

mongoose.connect(process.env.CONNECTION_URL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });