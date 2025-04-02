//alert('in script file');
function createVendingMachine() {
    const sodas = ["Coke", "Diet Coke", " Mello Yellow", "Sprite", "Mr. Pibb"];
    let quarters = 0;
    let quartersreqct = 4;

    console.log('in the script file');

    function add25Cents() {
        while (quarters <= quartersreqct) {
             console.log('selected ${quarters}');
             if (quarters<4){}
            }
            elseif(quarters <= quartersreqct);
            {
                let totalQuartersleft = (quartersreqct - quarters);
                console.log('Please add ${totalQuartersleft}  to get a soda.');
            }
            quarters++;  
        }
        return add25Cents;
    }

    //add25Cents();
    

createVendingMachine();

