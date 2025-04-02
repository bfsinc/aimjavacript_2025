//alert('in script file');
function createVendingMachine() {
    const sodas = ["Coke", "Diet Coke", " Mello Yellow", "Sprite", "Mr. Pibb"];
    let quarters = 0;
    //let quartersreqct = 4;

    //console.log('in the script file');

    function add25Cents() {
        // while (quarters <= quartersreqct) {
        //console.log('selected ${quarters}');
        quarters++;
        if (quarters == 4) {
            const sodaName = sodas[Math.floor(Math.random() * sodas.length)];
            console.log(`You got a ${sodaName} `);
            quarters = 0;
        }
        //  }
        else (quarters < 4);
        {
            const totalQuartersleft = (4 - quarters);
            console.log(`Please add ${totalQuartersleft}  to get a soda.`);
        }
    }
    return add25Cents;

}


const vendingMachine = createVendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();

