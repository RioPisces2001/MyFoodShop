import { connect, ConnectOptions } from "mongoose";

export const dbConnect = () => {
  connect(process.env.MONGO_URI!, {
    /* useNewUrlParser: true,
    useUnifiedTopology: true, */
    /* useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    family: 4, // Use IPv4 addresses only */
  } as ConnectOptions).then(
    () => console.log("Connected to MongoDB!"),
    (error) => console.error(error)
  );
};
