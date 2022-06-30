const whitelist = [
    'https://www.yoursite.ca',
    'http://127.0.0.1:5500',
    'http://localhost:3000'
]

const corsOptions = {
    //from the doc
    origin:(origin,callback)=>{
        if(whitelist.indexOf(origin) !== -1||!origin){
            callback(null,true)
        }else{
            callback(new Error(`${origin} Not allowed by CORS`))
        }
    },
    optionsSuccessStatus: 200
}

export default corsOptions