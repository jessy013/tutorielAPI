/**Importation des librairies */
const express = require("express");
const cors = require("cors");

const app = express();
/** protéger le web service */
var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
/**middleware */
// parser les requêtes: content-type - application/json
app.use(express.json());
//parser les requêtes: content-type - application/x-www-forum-urlencoded
app.use(express.urlencoded({extended: true}));

// routes 
app.get("/",(req, res) => {
    res.json({message: "bonjour Mr dupont comment allez vous aujoudhui"});
});

//configuration du server web (choix du port)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});