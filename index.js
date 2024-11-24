const express = require("express")
const cors = require("cors");


const database = require("./models")

const PORT = 3004
const app = express()
app.use(cors()); 
app.use(express.json());
const staffProfile = require("./Codes/StaffFilesCode");
app.use("/code",staffProfile);
const humanresouces = require("./Codes/HumanResources");
app.use(humanresouces);
const price = require("./Codes/PutPrice");
app.use(price);
const singleStaff = require('./Codes/updateStaff');
app.use(singleStaff);
const StoreHouse = require('./Codes/StoreHouse');
app.use(StoreHouse);
const addOffice = require('./Codes/AddToOffices');
app.use(addOffice);
const sendToOffice = require('./Codes/SendTo');
app.use(sendToOffice);
const minusStore = require('./Codes/MinusStore');
app.use(minusStore);
const sendWetress = require('./Codes/SendWetress');
app.use(sendWetress);
const sendDrinks = require('./Codes/DrinksToWaiter');
app.use(sendDrinks);
const logInwaitress = require('./Codes/WaitressLogIn');
app.use(logInwaitress);
const DrinksReturn = require('./Codes/ReturnDrinks');
app.use(DrinksReturn);
const confirmation = require('./Codes/Confirmation');
app.use(confirmation);
const tableName = require('./Codes/Tables');
app.use(tableName);
const costomer = require('./Codes/CostomersBill');
app.use(costomer);
const regP = require('./Codes/RegProducts');
app.use(regP);
database.sequelize.sync().then(() => {
    app.listen(PORT,"192.168.67.253", () => {
        console.log(`our app is running on port ${PORT}`);
    })
})

