require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { routes } from "./routes";

//inicializando aplicacao
const app = express();

app.use(cors()); // permitindo cors

//permitindo que a aplicacao entenda json e urlenconded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// usando rotas
routes.forEach((route) => app.use(route));

//conexao com a base de dados
mongoose
  .connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Successfully connect to database.");
  })
  .catch((err: mongoose.Error) => {
    console.log("Connection error", err);
    process.exit();
  });

// set port, listen for requests
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
