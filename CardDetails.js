       const inputs = document.querySelectorAll("input")
const input1 = document.querySelectorAll("input")[1]

const patterns = {
    cardHolder:  /(^[a-zA-Z]+ ?)?([a-zA-Z]+$)/g,    
    inpNumber: /(^[\d]{16}$)|(^[\d]{10}$)/gi ,
    Month: /^\d{2}$/,
    Year: /^\d{2}$/,
    CVV: /^\d{3}$/,
}

function validate(field,regex) {
    // console.log(regex.test(field.value))
    if(regex.test(field.value)) {
        field.className = "valid"
    } else {
        field.className = "invalid"
    };
    console.log(regex.test(field.value))
}

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
        console.log(e.target.attributes.name.value, e.target.value)
    });
});

let Uname = patterns.Username
console.log(Uname)
// console.log(input1.value)

// const h2val = document.querySelector("h2").value 
// h2.addEventListener("input", ff())

// $(function ee() {
//     $("#inp").on("change", function() {
//         $("#batch1").html(inp.value)
//     })
// });


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//



function cardnum() {
    function batch1() {
        //Card Number__________
        var cardnum = document.getElementById("cardNum")
        var inp0 = document.getElementById("inp-number")
        var cardnum_1 = inp0.value
        // num.id = "inp-number1"
        // num.classList = "inp-number"

        var sss = "hello"
        // cardnum == sss
        console.log(sss)
    
    // var cardNum = cardnum_1
    // cardNum
    console.log(cardnum_1)
    
    var batch1 = cardnum_1.slice(0,4) + " ",
        batch2 = cardnum_1.slice(4,8) + " ",
        batch3 = cardnum_1.slice(8,12) + " ",
        batch4 = cardnum_1.slice(12,16) + " ";

        console.log(batch1);
        console.log(batch2);
        console.log(batch3);
        console.log(batch4);

    const CardNum = batch1 + batch2 + batch3 + batch4
    console.log(CardNum)
    cardnum.innerHTML = ""
    cardnum.innerHTML += CardNum



    // var cardnum = document.getElementById("batch1")
    // var cardnum = document.getElementById("batch1")
    // const card_arr = cardNum.split("")
    // console.log(card_arr)
    // console.log(typeof cardNum)
    
    // console.log(batch1())
    return
    }













    // console.log(batch1())
    // function batches1() {
        // batch1()
    // }
    let batch01 = batch1()
    // let batch02 = batch2()
    // let batch03 = batch3()
    // let batch04 = batch4()
    
    // console.log(batch01)
    // console.log(batch02)
    // console.log(batch03)
    // console.log(batch04)
    // console.log(batches1)
}

function cardHolder() {
    var cardHolder = document.getElementById("cardname")
    var inp1 = document.getElementById("inp-holder")
    let cardHolder01 = inp1.value
    
    cardHolder.innerHTML = ""
    cardHolder.innerHTML += cardHolder01

    return
}
function Month() {
    var Month = document.getElementById("cardM")
    var inp2 = document.getElementById("inp-month")
    let Month01 = inp2.value
    
    Month.innerHTML = ""
    Month.innerHTML += Month01
    return
}
function Year() {
    var Year = document.getElementById("cardY")
    var inp3 = document.getElementById("inp-year")
    let Year01 = inp3.value
    
    Year.innerHTML = ""
    Year.innerHTML += Year01
    return
}


    function CVV() {
        var CVV = document.getElementById("cardCVV")
        var inp4 = document.getElementById("inp-cvv")
        let CVV01 = inp4.value
        
        CVV.innerHTML = ""
        CVV.innerHTML += CVV01
        return
    }