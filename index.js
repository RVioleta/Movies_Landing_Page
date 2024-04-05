

  function CheckValues() {
    title = $("#name").val()
    year  = $("#year").val()
    genre = $("#genre").val()
    description = $("#description").val()

   
    if (title === "" || title.length  >= 250){
      $("#errorMessage").html(" You must to enter movie title, less than 250 characters").css("color", ("red"))    
    } 
    else if (year === ""){
      $("#errorMessage").html("You must to enter the year of the movie").css("color", ("red"))      

    }
    else if(genre === ""){
      $("#errorMessage").html("You must to choose one of genre").css("color", ("red"))      
    }
    else if (description === "" || description < 500 ){
      $("#errorMessage").html("You must to write description for the movie, less than 500 characters").css("color", ("red"))      
    }

    let genreMovies= `
    <div class="col">
          <div class="card big">
            <img src="https://placehold.co/600x400" class="card-img-top" id="img2" alt="..." width=100px>
            <div class="card-body two">
              <h4 class="card-title">${title}</h4>
              <p>${year}</p>
              <p class="card-text">${description.substring(0, 75)}...</p>
            </div>
          </div>
         
          `
          $("#custom-movie").append(genreMovies)
          $("#custom-movie-section").show()
          alert("The movie has been added")
          $("#addNewMovie").modal('hide')
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