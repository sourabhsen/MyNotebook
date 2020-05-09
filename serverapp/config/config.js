
export function config(){
    return{
          ENV : "development",
          PORT : 3030,
          MONGO_URI : {
           DEVELOPMENT : "mongodb://localhost:27017/sourabhblog",
            PRODUCTION : "mongodb://localhost:27017/sourabhblog",
            TEST : "mongodb://localhost:27017/sourabhblog"
          },
          SESSION_SECRET : "8DC22F3A81E7A779ABECE4C23B917"   
    }
}

