import {createConnection} from "typeorm";

// createConnection().then(connection => {
//     console.log('Conectado!!!!!');
// }).catch(error => console.log(error));

async function connectionFactory(){
    try{
        await createConnection();
        console.log('conectado ao banco de dados!!');
    } catch(err){
        console.log(err);
    }
}

export default connectionFactory;