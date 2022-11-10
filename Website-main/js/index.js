  // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional


  var firebaseConfig = {
    apiKey: "AIzaSyDo9hWByrKlvciLyivGZlIt1ecR93q25io",
    authDomain: "test-almost-die.firebaseapp.com",
    databaseURL: "https://test-almost-die-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-almost-die",
    storageBucket: "test-almost-die.appspot.com",
    messagingSenderId: "741508980170",
    appId: "1:741508980170:web:e71e4d2e92993521e84333",
    measurementId: "G-85L4ZPER4G"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  function login(){
    swal.fire('Please wait')
    swal.showLoading()
    var provider = new firebase.auth.GoogleAuthProvider();
    console.log(provider);
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        var token = result.credential.accessToken;
        console.log(token)
        //... token
      }
      // The signed-in user info.
      var user = result.user;
      console.log(user)
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  function logout(){
    swal.fire('Logging Out')
    swal.showLoading()
    firebase.auth().signOut().then(()=> {
        console.log('logged out')
        localStorage.clear();
    }).catch((error) => {
        console.log(error.message)
    })
  }

//  function login(){
//    window.location.href = "pages/presensi.html"
//  }

  // function logout(){
  //   window.location.href = "../"
  // }
    
  function generateToken() {
    var result           = 'KonekTETI-';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 15; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    result += '-KMTETI2022'

    return result;
  }
 
  function goToProfil() {
    window.location.href = "pages/profil.html"
  }

  function goToAbout() {
    window.location.href = "pages/about.html"
  }

  function goToCalon1() {
    window.location.href = "profil/calon1.html"
  }

  function goToCalon2() {
    window.location.href = "profil/calon2.html"
  }

  function goToCalon3() {
    window.location.href = "profil/calon3.html"
  }

  
/*!
  * Start Bootstrap - Freelancer v6.0.4 (https://startbootstrap.com/themes/freelancer)
  * Copyright 2013-2020 Start Bootstrap
  * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
    $('.navbar-brand-logo').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict
