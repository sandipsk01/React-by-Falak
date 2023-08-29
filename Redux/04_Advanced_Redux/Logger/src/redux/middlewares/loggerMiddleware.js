
//The middleware function consists of three nested functions that receive store, next, and action parameters, which can be accessed using currying. These parameters allow middleware to intercept and modify actions in the Redux pipeline.
export const loggerMiddleware=(store)=>{
    return function(next){
        return function(action){
            //log actions
            console.log("[LOG]: " + action.type +" action performed on "+ new Date().toDateString());

            //call next middleware in dispatch pipeline.
            next(action);

            //log the modified state of app
            console.log(store.getState());
        }
    }
}