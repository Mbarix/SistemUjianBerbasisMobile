var id, namaUser, passwordUser, namaMapel, kodeMapel;
var Application = {
    initApplication: function () {
        $(document).on('click', '#daftarSiswa', function () {
            Application.initSignUpSiswa();
        })
        $(document).on('click', '#daftarGuru', function () {
            Application.initSignUpGuru();
        })
        $(document).on('click', '#login', function () {
            Application.initLoginSiswa();
        })
        $(document).on('click', '#updateSiswa', function () {
            Application.initUpdateSiswa();
        })
        $(document).on('click', '#deleteSiswa', function () {
            Application.initDeleteSiswa();
        })
        $(document).on('click', '#updateGuru', function () {
            Application.initUpdateGuru();
        })
        $(document).on('click', '#deleteGuru', function () {
            Application.initDeleteGuru();
        })
        $(document).on('click', '#soal', function () {
            Application.initShowSoal();
        })
        $(document).on('click', '#detail-soal', function(){
            var idsoal = $(this).data('idsoal');
            Application.initShowDetailSoal(idsoal);
        })
        $(document).on('click', '#tambah-soal-baru', function () {
            Application.initTambahSoal();
        })
        $(document).on('click', '#update-soal', function () {
            Application.initUpdateSoal();
        })
        $(document).on('click', '#hapus-soal', function () {
            Application.initDeleteSoal();
        })
    },
    initSignUpSiswa: function(){
        var nis = $('#NIS').val();
        var nama = $('#usernameSiswa').val();
        var password = $('#passwordSiswa').val();
        if(isNaN(nis)){
            alert('NIS tidak valid');
        } else if (nis.length != 8){
            alert('NIS harus berjumlah 8 digit');
        } else if (nama.length < 3){
            alert('Nama tidak valid');
        } else if (password.length < 8){
            alert('Password minimal harus berjumlah 8 karakter');
        } else {
            $.ajax({
                type: "post",
                url: "https://app-1542614776.000webhostapp.com/project%20PPK/web_service_siswa_signup.php",
                data: {nis:nis,nama:nama,password:password}
            });
            alert('Selamat, anda telah terdaftar');
            window.location.href = "index.html";
        }
    },
    initLoginSiswa: function(){
        var idSiswa;
        var nis = $('#idUser').val();
        var password = $('#passwordUser').val();
        var verified = false;
        $.ajax({
            type: "post",
            url: "https://app-1542614776.000webhostapp.com/project%20PPK/web_service_siswa_login.php",
            data: {nis:nis, password:password},
            success: function(dataObject){  
                if(dataObject.Status == "Sukses"){
                    alert('Selamat datang, '+ dataObject.NamaSiswa +'\nAnda telah login sebagai Siswa');
                    window.location.href = "home_siswa.html";
                }else{
                    Application.initLoginGuru();
                }           
            }
        });
    },
    initUpdateSiswa: function(){
        var nama = $('#usernameSiswa').val();
        var password = $('#passwordSiswa').val();
        var idSiswa = id;
        if(nama.length < 3){
            alert('Nama tidak valid');
        } else if (password.length < 8){
            alert('Password minimal harus berjumlah 8 karakter');
        } else {
            $.ajax({
                type: "post",
                url: "https://app-1542614776.000webhostapp.com/project%20PPK/web_service_siswa_update.php",
                data: {idSiswa:idSiswa,nama:nama,password:password}
            });
            alert('Selamat, data anda telah diperbaharui');
        }
    },
    initDeleteSiswa: function(){
        var idSiswa = id;
        $.ajax({
            type: "get",
            url: "https://app-1542614776.000webhostapp.com/project%20PPK/web_service_siswa_delete.php",
            data: {idSiswa:idSiswa}
        });
        alert('Selamat, akun anda telah dihapus');
    },
    initLoginGuru: function(){
        var nip = $('#idUser').val();
        var password = $('#passwordUser').val();
        var verified = false;
        $.ajax({
            type: "post",
            url: "https://app-1542614776.000webhostapp.com/project%20PPK/web_service_guru_login.php",
            data : {nip:nip, password:password},
            success: function(dataObject){        
                if(dataObject.Status == "Sukses"){
                    alert('Selamat datang, '+ dataObject.Nama+'\nAnda telah login sebagai Guru');
                    window.location.href = "home_guru.html";
                }else{
                    alert('NIS/NIP atau Password yang anda masukkan salah');
                }            
            }
        });
    },
    initSignUpGuru: function(){
        var nip = $('#NIP').val();
        var nama = $('#usernameGuru').val();
        var password = $('#passwordGuru').val();
        var namaMapel = $('#namaMapel').val();
        var kodeMapel = $('#kodeMapel').val();
        if(isNaN(nip)){
            alert('NIP tidak valid');
        } else if (nip.length != 18){
            alert('NIP harus berjumlah 18 digit');
        } else if (nama.length < 3){
            alert('Nama tidak valid');
        } else if (password.length < 8){
            alert('Password minimal harus berjumlah 8 karakter');
        } else {
            $.ajax({
                type: "post",
                url: "https://app-1542614776.000webhostapp.com/project%20PPK/web_service_guru_signup.php",
                data: {nip:nip,nama:nama,password:password,namaMapel:namaMapel,kodeMapel:kodeMapel}
            });
            alert('Selamat, anda telah terdaftar');
            window.location.href = "index.html";
        }
    },
    initUpdateGuru: function(){
        var nama = $('#usernameGuru').val();
        var password = $('#passwordGuru').val();
        var namaMapel = $('#namaMapel').val();
        var kodeMapel = $('#kodeMapel').val();
        var idGuru = id;
        if(nama.length < 3){
            alert('Nama tidak valid');
        } else if (password.length < 8){
            alert('Password minimal harus berjumlah 8 karakter');
        } else {
            $.ajax({
                type: "post",
                url: "https://app-1542614776.000webhostapp.com/project%20PPK/web_service_guru_update.php",
                data: {idGuru:idGuru,nama:nama,password:password,namaMapel:namaMapel,kodeMapel:kodeMapel}
            });
            alert('Selamat, data anda telah diperbaharui');
        }
    },
    initDeleteGuru: function(){
        var idGuru = id;
        $.ajax({
            type: "get",
            url: "https://app-1542614776.000webhostapp.com/project%20PPK/web_service_guru_update.php",
            data: {idGuru:idGuru}
        });
        alert(id);
    },

    initShowSoal : function(){
        $.ajax({
            type: "get",
            url: "https://app-1542614776.000webhostapp.com/project%20PPK/web_service_soal.php",
            success: function(dataObject){   
                var appendList;
                for (let i = 0; i < dataObject.length; i++) {
                    appendList = '<li><a href=#halaman-mengelola-detail-soal?id='+dataObject[i].IDSoal+
                    '"target="_self" id="detail-soal" data-idsoal="'+dataObject[i].IDSoal+'"><h2>'+dataObject[i].Soal+
                    '</h2><p>'+dataObject[i].Jawaban+'</p></a></li>';  
                    $('#list-soal').append(appendList);
                }
            }
        });
    },
    initShowDetailSoal : function(idsoal){
        $.ajax({
            type: "get",
            url: "https://app-1542614776.000webhostapp.com/project%20PPK/web_service_soal.php",
            success: function(dataObject){   
                var appendDetail;
                var tbdy = $("#tabel-detail-soal tbody");
                for (let i = 0; i < dataObject.length; i++) {
                    if(dataObject[i].IDSoal == idsoal && tbdy.children().length == 0){
                        appendDetail = '<tr><td>'+dataObject[i].IDSoal+'</td><td>'+dataObject[i].Soal+
                        '</td><td>'+dataObject[i].PilihanA+'</td><td>'+dataObject[i].PilihanB+'</td><td>'
                        +dataObject[i].PilihanC+'</td><td>'+dataObject[i].PilihanD+'</td><td>'+dataObject[i].Jawaban+'</td><td>'+dataObject[i].KodeUjian+'</td></tr>';
                    }
                }
                id = idsoal;
                $('#tabel-detail-soal').append(appendDetail);
                $("#tabel-detail-soal").table("refresh");
            }
        });
        
    },
    initTambahSoal: function(){
        var soal = $('#soal-tambah').val();
        var pilihanA = $('#pilihan-a-tambah').val();
        var pilihanB = $('#pilihan-b-tambah').val();
        var pilihanC = $('#pilihan-c-tambah').val();
        var pilihanD = $('#pilihan-d-tambah').val();
        var jawaban = $('#jawaban-tambah').val();
        var kodeUjian = $('#kode-ujian-tambah').val();
        $.ajax({
            type: "get",
            url: "https://app-1542614776.000webhostapp.com/project%20PPK/web_service_soal_tambah.php",
            data: {soal:soal,pilihanA:pilihanA,pilihanB:pilihanB,pilihanC:pilihanC,pilihanD:pilihanD,jawaban:jawaban,kodeUjian:kodeUjian}
        });
        alert('Soal, telah ditambahkan');
        window.location.href = "soal.html";
    },

    initUpdateSoal: function(){
        var soal = $('#soal-update').val();
        var pilihanA = $('#pilihan-a-update').val();
        var pilihanB = $('#pilihan-b-update').val();
        var pilihanC = $('#pilihan-c-update').val();
        var pilihanD = $('#pilihan-d-update').val();
        var jawaban = $('#jawaban-update').val();
        var idSoal = id;
        $.ajax({
            type: "post",
            url: "https://app-1542614776.000webhostapp.com/project%20PPK/web_service_soal_update.php",
            data: {idSoal:idSoal,soal:soal,pilihanA:pilihanA,pilihanB:pilihanB,pilihanC:pilihanC,pilihanD:pilihanD,jawaban:jawaban}
        });
        alert('Selamat, soal telah diperbaharui');

    },
    initDeleteSoal: function(){
        var idSoal = id;
        $.ajax({
            type: "get",
            url: "https://app-1542614776.000webhostapp.com/project%20PPK/web_service_soal_delete.php",
            data: {idSoal:idSoal}
        });
        alert('Selamat, soal telah dihapus');
        window.location.href = "soal.html";
    },
}
Application.initApplication();