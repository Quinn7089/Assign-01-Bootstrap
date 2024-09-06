document.addEventListener("DOMContentLoaded", function() {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });
   
    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

    //applie random attetion seeker 
    const animations = ["animate__bounce", "animate__flash", "animate__pulse", "animate__rubberBand","animate__shakeX","animate__shakeY",
      "animate__headShake","animate__swing","animate__tada","animate__wobble","animate__jello","animate__heartBeat"];
    const n = Math.floor(Math.random() * animations.length);
    const greeting = document.getElementById('happy');
    greeting.classList.add("animate__animated", animations[n]);
    
    // event listener for check/uncheck
  document.getElementById('checkbox-card').addEventListener('change', function(e){
    if (e.target.classList.contains('form-check-input')) {
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
      
        
        
    }
  });
  // Event linstner for mouse over label
  document.getElementById('checkbox-card').addEventListener('mouseover', function(e){
    if (e.target.classList.contains('form-check-label')) {
      // console.log(e.target.dataset['color']);
      greeting.style.color = e.target.dataset['color'];
    }
  });
  // Event linstner for mouse out label
  document.getElementById('checkbox-card').addEventListener('mouseout', function(e){
    if (e.target.classList.contains('form-check-label')) {
      greeting.style.color = 'black';
    }
  });
 
  document.getElementById('submit').addEventListener('click', function(e){
    let checked = false;
    document.querySelectorAll('.form-check-input').forEach(checkbox => {
      if (checkbox.checked) {
        checked = true;
      }
    });

    if (checked == false){
      
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
       

      
    }

  
    

  })
  
  document.getElementById('fillCheck').addEventListener('click', function(e){
    let checked = false;
   checked = document.querySelectorAll('.form-check-input').forEach(checkbox => {
      if (checkbox.checked) {
        checked = true;
      }


    if (checked == false){
      
     checkbox.checked = true;
     
       

      
    }
    });
  })

  document.getElementById('unCheck').addEventListener('click', function(e){
    let checked = true;
   checked = document.querySelectorAll('.form-check-input').forEach(checkbox => {
      if (checkbox.checked) {
        checked = true;
      }


    if (checked == true){
      
     checkbox.checked = false;
 
       

      
    }

    });

  })


  



  });


