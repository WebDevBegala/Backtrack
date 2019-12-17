let fields = $(".field");
let steps = [];
let i = 0;
let end = false;
function start() {
    setInterval(() => {
        step()
    }, 500)
}

function step() {
    console.log("step" + i)
    if ($(".field").eq(i).hasClass("end")) {
        $(".player").removeClass("player")
        $(".end").removeClass("end")
        $(".field").eq(i).addClass("player")
        alert("Vége")
    }
    else if ($(".field").eq(i).hasClass("wall")) {
        i++;
    }
    else {
        $(".player").removeClass("player")
        $(".field").eq(i).addClass("player")
        if ($(".field").eq(i++).hasClass("wall")) {
            i += 2;
        }

    }

    steps.push(i);
}