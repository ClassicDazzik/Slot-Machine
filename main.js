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
    money: 2000,
    slots: [
        slot1,
        slot2,
        slot3
    ],
    update: function(){
        if (this.money > 100) {
            this.money -= 100;
        }else {
            alert("No money!")
            return
        }
        document.getElementById("cash").innerHTML = this.money;
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

        if(winString == "Banana,Banana,Banana") {
            console.log("Bansku Win!");
            money += 1000;
        }
        else if(winString == "Melon,Melon,Melon") {
            console.log("Melon Win!");
            money += 1000;
        }
        else if(winString == "Apple,Apple,Apple") {
            console.log("Apple Win!");
            money += 500;
        }
        else if(winString == "Orange,Orange,Orange") {
            console.log("Orange Win!");
            money += 800;
        }
        else if(winString == "Pear,Pear,Pear") {
            console.log("Pear Win!");
            money += 500;
        }
        else {
            console.log("No win.");
        } 
    } 
}

function roll() {
    slotMachine.update();
    slotMachine.check();
   }

function lock(slot) {
    if (slot.lock == 0) {
        slot.lock = 1;
    }   else {
        slot.lock = 0;
    } } 
