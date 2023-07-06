function receivesAFunction(callback){
   return callback();
}
receivesAFunction(function () {return "yay!";});


function namedFunction(){ return "yay!"};
function returnsANamedFunction() {
return namedFunction
} 
returnsANamedFunction()


function returnsAnAnonymousFunction() {
    return function (){
        console.log("Hi Eddie!!!")
    }
}
returnsAnAnonymousFunction();
;/*function l () {
    return returnsAnAnonymousFunction (){
        return anonymous(){}
    }
}
function returnsANamedFunction(){};*/
