// kamaljit kaur
//the button gets clicked and runs the anaonymos function 
document.getElementById('orderButton').addEventListener('click', function () {
    // reading values 
    const smflav = document.getElementById('flavour').value;
    const basemilk = document.querySelector('input[name="milk"]:checked').value;
    const extras = document.querySelectorAll('input[name="extras"]:checked');
    // to get every value that is checked 
    const extrasArray = [];
    for (let i = 0; i < extras.length; i++) {
        extrasArray.push(extras[i].value);
    }
    const noofsmoothie = parseInt(document.getElementById('quantity').value);

    // Smoothie object and pass the captured values
    const objsmoothie = new Smoothie(smflav, basemilk, extrasArray, noofsmoothie);

    // Output the description of the smoothie to the HTML page
    const smoothiediv = document.getElementById('smmmotth');
    smoothiediv.innerHTML = `
        <h2>Your Smoothie Order</h2>
        <p> ${objsmoothie.noofsmoothie} Smoothie with Flavor of ${objsmoothie.smflav} has Milk Base of ${objsmoothie.basemilk} and order contains Extras of ${objsmoothie.extras.join(', ')}</p>`;
// activate when order button get clicked
    smoothiediv.classList.add('smmmotth');
});

// Smoothie class constructor
class Smoothie { constructor(smflav, basemilk, extras, noofsmoothie) {
        this.smflav = smflav;
        this.basemilk = basemilk;
        this.extras = extras;
        this.noofsmoothie = noofsmoothie;
    }
}
