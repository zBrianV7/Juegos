const sqls=require('mssql');
const dbsinfo={
    user:'brianco',
    password:'Brian159',
    server:'serverjuego1.database.windows.net',
    database:'basedatosjuego',
    options:{
        encrypt:true,
        trustServerCertificate:true
    }
}
async function getConnection(){

    try{
        const pool = await sqls.connect(dbsinfo);
        return pool;
    }catch(error){
        console.error(error);
    }
}

getConnection();

module.exports=sqls;