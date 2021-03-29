money=1000
var fruits = ["Apple", "Orange","Pear","Banana","Melon"];
// let locks = [0,0,0];

let slot1 = {
        id: "roll1",
        roll: fruits[0],
        lock: 0
    }

let slot2 = {
        id: "roll2",
        roll: fruits[0],
        lock: 0
    }
let slot3 = {
        id: "roll3",
        roll: fruits[0],
        lock: 0
    }


let slotMachine = { 
    slots: [
        slot1,
        slot2,
        slot3
    ],
    update: function(){
        this.slots.forEach(slot => {
            if (slot.lock == 0){
                slot.roll = fruits[Math.floor(Math.random()*fruits.length)];
                document.getElementById(slot.id).innerHTML = slot.roll;
            } else {
                slot.lock = 0;
            }
        })
    },
    check: function(){

let winString = `${this.slots[0].roll},${this.slots[1].roll},${this.slots[2].roll}`

        if(winString == "Banana") {
            console.log("Bansku Win!");
            money += 200;
        }
        else if(winString == "Melon") {
            console.log("Melon Win!");
            money += 500;
        }
        else if(winString == "Apple") {
            console.log("Apple Win!");
            money += 200;
        }
        else if(winString == "Orange") {
            console.log("Orange Win!");
            money += 200;
        }
        else if(winString == "Pear") {
            console.log("Pear Win!");
            money += 200;
        }
        else {
            console.log("No win.");
        } 
    } }

function roll() {
    if (money > 100) {
    money -= 100;
    slotMachine.update();
    slotMachine.check(); 
    } else {
        alert("No money!")
    }   }

function lock(slot) {
    if (slot.lock == 0) {
        slot.lock = 1;
    }   else {
        slot.lock = 0;
    } } 