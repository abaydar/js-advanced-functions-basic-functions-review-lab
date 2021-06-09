function saturdayFun(task="roller-skate"){
    return `This Saturday, I want to ${task}!`
}

function mondayWork(task="go to the office"){
    return `This Monday, I will ${task}.`
}

function wrapAdjective(flair="*"){
    return function(adj="special"){
        return `You are ${flair}${adj}${flair}!`
    }
}

let Calculator = {
    add: function(a, b){
        return a + b
    },
    subtract: function(a,b){
        return a - b
    },
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a/b
    }
}

function actionApplyer(integer, array){
    let a = integer

    for (let i=0; i<array.length; i++){
        a = array[i](a)
    }

    return a
}