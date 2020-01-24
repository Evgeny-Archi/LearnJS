function fun(echo) {
    console.log(echo);
   };

function echoMaker() {
    return fun;
}

let bigFun = echoMaker();
bigFun("Is there an echo?");