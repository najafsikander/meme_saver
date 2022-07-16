import mongoose from 'mongoose';

const dbUrl = process.env.DB_URL || '';

const connectDb = () => {
    if(mongoose.connections != null && (mongoose.connections[0].readyState)) return console.info('Already connected');

   mongoose.connect(dbUrl, {}, (error) => {
       if(error) return (console.error('Error caught while connecting to db: ', error));

       return console.info('connected to db');
   });
   
}

export default connectDb;