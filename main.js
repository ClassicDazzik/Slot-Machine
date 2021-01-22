var money=1000
var fruits = ["Apple", "Orange","Pear","Banana","Melon"];
let locks = [0,0,0];

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
            } 
        })
    }
}

function roll() {

    slotMachine.update();

    // if (locks[1] == 0){
    //     var roll2 = fruits[Math.floor(Math.random()*fruits.length)];
    //     document.getElementById("roll2").innerHTML = roll2;
    // }
    // if (locks[2] == 0){
    //     var roll3 = fruits[Math.floor(Math.random()*fruits.length)];
    //     document.getElementById("roll3").innerHTML = roll3;
    // }
   
    // slotMachine.slot1.lock = 0;
    // locks[1] = 0;
    // locks[2] = 0;
}