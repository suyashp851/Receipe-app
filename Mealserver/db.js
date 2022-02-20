const mongoose = require('mongoose');
const uri = `mongodb+srv://suyash:kyfe7sn73ceC3cYk@cluster0.ytclb.mongodb.net/mealApp?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true,}).then(() =>{
    console.log('Connected')
}) .catch(error => console.log(error))