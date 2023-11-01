//Victor Rios code
//disparar para destruir a tu enemigo

let enemyHealth = 10;
let selfHealth = 10;

alert('Are u ready to fight? (Ok = Attack)')
while(enemyHealth > 0){
    console.log('You turn')
    let myAttack = prompt('Choose ur attack 1 Sword 2 Spell')
    if(myAttack == 1){
        console.log('You selected 1 Sword')
        enemyHealth = enemyHealth - 2;
        console.log('The enemy Health is ' + enemyHealth)
        if (enemyHealth <= 0){
            console.log('Winner!')
            break
        }
        selfHealth = selfHealth - 2
        console.log('The enemy Attacked you. -2!! You health is ' + selfHealth)
    }else if(myAttack == 2){
        console.log('You selected 2 Spell')
        enemyHealth = enemyHealth - 5
        console.log('The enemy Health is ' + enemyHealth)
        if (enemyHealth <= 0){
            console.log('Winner!')
            break
        }
        
        selfHealth = selfHealth - 2
        console.log('The enemy Attacked you. -2!! You health is ' + selfHealth)
    }else{
        console.log('Only number 1 and 2 is valid. Try again. Good Bye')
        break
    
    }
}

