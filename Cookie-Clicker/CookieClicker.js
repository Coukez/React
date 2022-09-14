let x = 0
let z = 0
let y = 1

            
document.getElementById("add_how_much").innerHTML = y
document.getElementById("one_more!").innerHTML = y + 1
document.getElementById("cookie_clicker").addEventListener("click", iterate)
document.getElementById("cookie_clicker").addEventListener("click", iterate_z)
document.getElementById("one_more?").addEventListener("click", more_cookies);

function iterate(){
    x += y
    console.log(x)
    document.getElementById("counter").innerHTML = x
}

function iterate_z(){
    z += y
    console.log(z)
    
}

//add more Cookies per Click
function more_cookies(){
    
    if (z > 24){
        y += 1
        z = 0
        console.log(y, z)
    }

    else {
    alert("not enough cookies you dummy")
    }
    document.getElementById("one_more!").innerHTML = y + 1
    document.getElementById("add_how_much").innerHTML = y
}
