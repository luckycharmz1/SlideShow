
  var dogs = [
    { file: "aspen.jpg", name: "Aspen" },
    { file: "gracie.jpg", name: "Gracie" },
    { file: "jack.jpg", name: "Jack" },
    { file: "lily.jpg", name: "Lily" },
    { file: "max.jpg", name: "Max" },
    { file: "oliver.jpg", name: "Oliver" },
  ];
  var counter = 0;
  var timer = false;
  var moving = false;

  $(document).ready (startSlideShow);

  $("#startButton").click(startSlideShow);
  $("#stopButton").click(stopSlideshow);
  $("#previousButton").click(previousImage);
  $("#nextButton").click(nextImage)

  function startSlideShow(e) {
    // start the slide show
    timer = setInterval (nextImage, 3000);
  }

  function stopSlideshow(e) {
    //stop teh slide show
    clearInterval(timer); 
  }

  function goToImage (bump, id, lefty) {
    counter = (counter + bump + dogs.length) % dogs.length;
    var dog = dogs[counter];
    $(id).attr("src", "images/" + dog.file);
    moving = true;
    $("#images").animate ( {left: lefty }, 1000, finish);
    $("#caption").fadeOut (500, function() { $(this).text(dog.name).fadeIn (500) } );
  }

  function previousImage() {
    goToImage(-1, "#image1", 0);
  }

  function nextImage() {
    goToImage(+1, "#image3", -1200);
  }

  function finish(id) {
    var dog = dogs[counter];
    $("#image2").attr("src", "images/" + dog.file);
    $("#images").animate ( { left: -600 }, 0 );
    moving = false;
  }
