
$(document).ready(function(){ 
    //open
    $('#calon1Modal').on('shown.bs.modal', function(){
      $('#modal-body-calon1').load('calon/calon1.html');   
    });
    $('#calon2Modal').on('shown.bs.modal', function(){
      $('#modal-body-calon2').load('calon/calon2.html');   
    });
    $('#calon3Modal').on('shown.bs.modal', function(){
      $('#modal-body-calon3').load('calon/calon3.html');   
    });
  
    //close
    $('#calon1Modal').on('hidden.bs.modal', function (e) {
      $('#modal-body-calon1').html("");   
    })
    $('#calon2Modal').on('hidden.bs.modal', function (e) {
      $('#modal-body-calon2').html("");   
    })
    $('#calon3Modal').on('hidden.bs.modal', function (e) {
      $('#modal-body-calon3').html("");   
    })
  
  
  });