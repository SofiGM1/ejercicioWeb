
var participants = [];

const showParticipants = (data) => {

    let arrayAux = [];

    data.forEach(element => {
        arrayAux.push(element.name);
    });

    //$("#users").text("Participants: " + arrayAux);
    $("#users").html("<strong>Participants: </strong>" + arrayAux);

}

const getWinner = (data) => {

    const aleat = Math.floor(Math.random() * data.length);
    $("#selected").html("<strong>Seleccionado: </strong>" + data[aleat].name);
}

$(document).ready(function (){

    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        contentType: "application/json",
        success: function(response){

            participants = response;
            showParticipants(participants);

        },
        error: function(error){
            console.log(error);
            alert(error);
        }
    });

    $(".btn").click(function(){

        getWinner(participants);

    });
});
