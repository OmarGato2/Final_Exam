received_data = null;

function process_res(data) {
    received_data = data
    console.log(data)

    for (i = 0; i < data.length; i++) {
        $("#result").append(`<ol></ol>` + make_unicorn_button(data[i]) + "<br>");
    }
}

function displayUnicorn(unicorn) {
    unicorn = JSON.parse(unicorn)
    $("#right").append() = `<ul><li>test</li></ul>`
}

function make_unicorn_button(unicorn) {
    return `<button onClick ="displayUnicorn(${JSON.stringify(unicorn)})">${unicorn.name}</button>`
}

function allUnicorns() {
    console.log("alllUnicorns()" + "got called!");
    console.log($("#allUnicorns").val())
    $.ajax(
        {
            url: "https://pacific-chamber-40829.herokuapp.com/allUnicorns",
            type: "POST",
            data: {
                "allUnicorns": $("#allUnicorns").val()
            },
            success: process_res
        }
    )
}

function setup() {
    $("#allUnicorns").click(allUnicorns)
    $("#result").show()
}

$(document).ready(setup)