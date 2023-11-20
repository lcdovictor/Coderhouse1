//Victor Rios code
//disparar para destruir a tu enemigo

// let enemyHealth = 10;
// let selfHealth = 10;


// alert('Are u ready to fight? (Ok = Attack)')
// while(enemyHealth > 0){
//     console.log('You turn')
//     let myAttack = prompt('Choose ur attack 1 Sword 2 Spell')
//     if(myAttack == 1){
//         console.log('You selected 1 Sword')
//         enemyHealth = enemyHealth - 2;
//         console.log('The enemy Health is ' + enemyHealth)
//         if (enemyHealth <= 0){
//             console.log('Winner!')
//             break
//         }
//         selfHealth = selfHealth - 2
//         console.log('The enemy Attacked you. -2!! You health is ' + selfHealth)
//     }else if(myAttack == 2){
//         console.log('You selected 2 Spell')
//         enemyHealth = enemyHealth - 5
//         console.log('The enemy Health is ' + enemyHealth)
//         if (enemyHealth <= 0){
//             console.log('Winner!')
//             break
//         }
        
//         selfHealth = selfHealth - 2
//         console.log('The enemy Attacked you. -2!! You health is ' + selfHealth)
//     }else{
//         console.log('Only number 1 and 2 is valid. Try again. Good Bye')
//         break
    
//     }
// }

//Victor Rios Segunda Entrega
//Comienza aca

function skill(name, joy, money){
    this.name = name;
    this.joy = joy;
    this.money = money;
}

let skill1 = new skill('Hunter', 5, 8)
let skill2 = new skill('Woodcutting', 4, 5)
let skill3 = new skill('Mining', 2, 6)
let skill4 = new skill('Farming', 7, 2)
let skill5 = new skill('Crafting', 5, 5)
let skill6 = new skill('Ability', 0, 0)
let skill7 = new skill('Cooking', 5, 5)
let skill8 = new skill('Firemaking', 6, 0)


let  skills = [skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8]

// let x = skills.filter(y=>y.joy <= 5);

// console.log(x)
//pruebas

 function skillFilter(){    
    //let question = prompt('Search by name, joy, money')
    //if(question.toLowerCase() === 'name'){
      let keyWord = prompt('Enter the skill name').toLowerCase()
      let search = x=>x.name.toLowerCase().includes(keyWord)
      let result = skills.filter(search)

    if(result.length > 0){
         console.table(result)
    }else{
        alert('not found it')
    }
    // }else if(question.toLowerCase() === 'joy'){
    //     let keyWord = prompt('Enter the joy')
    //     let search = x=>x.joy.includes(keyWord)
    //     let result = skills.filter(search)
  
    //   if(result > 0){
    //        console.table(result)
    //   }else{
    //       alert('not found it')
      }
    
        
    
  
  skillFilter()

  //ACA TERMINA LA SEGUNDA ENTREGA
  //USO DE METODOS, OBJETOS, ARRAY, FILTRADO Y BUSQUEDA

//   if(skills.indexOf(prompt('Enter the skill name3').toLowerCase()) == (x=>x.name.toLowerCase())){
//     console.log('es correcto')
//   }else{
//     console.log('No')
//   }

//pruebas


const avatar = function(combatStyle, skillOne, skillTwo) {
    this.combatStyle = combatStyle;
    this.MakeMoney = skillOne;
    this.Hobby = skillTwo;    
}

//const avatar1 = new avatar(prompt('enter your Combat Style: Melee, Ranged, Magic'), prompt('enter your Skill to make money'), prompt('enter your favorite hobby'))




//alert('Now, You have to pay 9,99$ per Year to keep enjoying this game')
class Payment{
    constructor(cardNumber, cardDateExp, cardLastDigits){
        this.cardNumber = cardNumber;
        this.cardDateExp = cardDateExp;
        this.cardLastDigits = cardLastDigits;
    }
}

//const payment1 = new Payment(prompt('enter your Card Number'), prompt('enter your Card Date Exp'), prompt('enter your Card Last Three Digits'))

