swal.fire('Please wait')
swal.showLoading()

firebase.auth().onAuthStateChanged(async (user) => {
    if(!user){
        window.location.href = "../"
    } else {
        firebase.database().ref('reg/').orderByChild('1').equalTo(user.email).once('value', function (snapshot) {
            var value = snapshot.val();
            console.log(value)
            if(!value){                   
                swal.close()
                Swal.fire({
                    icon: 'error',
                    title: 'Anda belum terdaftar',
                    html: 'silakan mendaftarkan diri di <br /> sini: <a href="https://bit.ly/PendaftaranPemiluKMTETI2022" target="_blank">https://bit.ly/PendaftaranPemiluKMTETI2022</a>',
                }).then(()=>{
                    firebase.auth().signOut().then(()=> {
                        console.log('logged out')
                    }).catch((error) => {
                        console.log(error.message)
                    })
                })
            } else { 
                snapshot.forEach(function(child) {
                    nama = child.val()[1]
                });
                $("#nama").html(nama);
                setTimeout(function(){ $("#animasi").removeClass("animasi"); }, 1000);
                setTimeout(function(){ 
                    firebase.database().ref('encode/').orderByChild('0').equalTo(user.email).once('value', function (snapshot) {
                        var value = snapshot.val();
                        if(value){
                            snapshot.forEach(function(child) {
                                token = child.val()[1]
                            });
                            
                            firebase.database().ref('vote/').orderByChild('0').equalTo(token).once('value', function (snapshot) {
                                var value = snapshot.val();
                                if(value){
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Anda sudah melakukan vote',
                                        showConfirmButton: false,
                                        timer: 2500
                                    })
                                } else {                    
                                    window.location.href = "vote.html"
                                }
                            });
                        } else {
                            window.location.href = "vote.html"
                        }
                    });  
                }, 2000);
            }
        });
    }
})