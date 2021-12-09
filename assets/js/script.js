$(document).ready(function(){

    $("a").click(function(){
        var gato = this.hash

        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top
            },
            400
        )

    })



})

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})