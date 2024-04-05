

  function CheckValues() {
    name        = $("#name").val()
    year        = $("#year").val()
    genre       = $("chouse").val()
    description = $("#description").val()

   
    if (name === "" && name.length  >= 10){
      $("#errorMessage").html(" You must to enter the name of the movie").css("color", ("red"))    
    }
    console.log(name.length)
    if(name.length >= 5){
      $("#errorMesage").html("textot e golem")
    }    
    
    else if (year === ""){
      $("#errorMessage").html("You must to enter the year of the movie").css("color", ("red"))      

    }

    else if(genre === ""){
      $("#errorMessage").html("You must to choose one of genre").css("color", ("red"))      
    }

    else if (description === "" && description < 500 ){
      $("#errorMessage").html("You must to write description for the movie").css("color", ("red"))      
    }
  }


  $(document).ready(function(){
    $("#img1").click(function(){
      $(".one").toggle();
    });
  });

  $(document).ready(function(){
    $("#img2").click(function(){
      $(".two").toggle();
    });
  });

  $(document).ready(function(){
    $("#img3").click(function(){
      $(".three").toggle();
    });
  });

  $(document).ready(function(){
    $("#img4").click(function(){
      $(".four").toggle();
    });
  });

  $(document).ready(function(){
    $("#img5").click(function(){
      $(".five").toggle();
    });
  });

  $(document).ready(function(){
    $("#img6").click(function(){
      $(".six").toggle();
    });
  });