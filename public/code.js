received_data = null;

function process_res(data) {
    received_data = data
    console.log(data)
    $("#result").html(JSON.stringify(data));
}

function displayUnicorn() {
    jQuery("#result").empty()
    jQuery("#right").empty()
    to_add = ""
    $["ajax"] ({
        url: "https://tranquil-escarpment-21127.herokuapp.com/displayUnicorns" + this["id"],
        type: "POST",
        data: {
            "allUnicorns": $("#allUnicorns").val()
        },
        success: process_res
    })
}

function allUnicorns() {
    console.log("alllUnicorns()" + "got called!");
    console.log($("#allUnicorns").val())

    $.ajax(
        {
            url: "https://tranquil-escarpment-21127.herokuapp.com/allUnicorns",
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
    $("#result").hide()
    $("body").on("click",".backdrop_button", displayUnicorn)
}

$(document).ready(setup)