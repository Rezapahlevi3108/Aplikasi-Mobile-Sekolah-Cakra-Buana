angular.module('starter.siswa', [])

.controller('SiswaCtrl', function($scope, $stateParams, $http, $state, $ionicPopup){
    var url = "http://localhost/api/";

    $http.get(url+"std_getupdate.php?nis="+$stateParams.stdNIS)
        .success(function(response){
            $scope.siswaData = response.records;
        })

    $scope.updateSiswa = function(){
        var siswa_nis     = $scope.siswaData.nis;
        var siswa_nama    = $scope.siswaData.nama;
        var siswa_pass    = $scope.siswaData.siswapass;

        if(siswa_nis && siswa_nama && siswa_pass!=undefined){
            $str = url + "std_update.php?nama="+siswa_nama+"&siswapass="+siswa_pass+"&nis="+siswa_nis;
            $http.get($str)
            .success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title   : 'Sukses',
                        template: 'Data berhasil diupdate'
                    })
                    $state.go('app.main', [], {location: "replace", reload: true});
                } else {
                    $ionicPopup.alert({
                        title   : 'Error',
                        template: 'Data gagal diupdate'
                    })
                    $state.go('app.profil-update', [], {location: "replace", reload: true});
                }
            }).error(function(){
                $ionicPopup.alert({
                    title   : 'Error',
                    template: 'Ada kesalahan'
                })
            })
        }else{
            $ionicPopup.alert({
                title   : 'Error',
                template: 'Mohon diisi Username/Password'
            })
        }
    }
})

.controller('SiswaAdmCtrl', function($scope, $stateParams, $http, $state, $ionicPopup){
    var url = "http://localhost/api/";

    $scope.siswaData = {};

    $scope.createSiswa   = function() {
        
        var siswa_nis     = $scope.siswaData.siswa_nis;
        var siswa_nama    = $scope.siswaData.siswa_nama;
        var siswa_alamat  = $scope.siswaData.siswa_alamat;
        var siswa_kel     = $scope.siswaData.siswa_kel;
        var siswa_pass    = $scope.siswaData.siswa_pass;
        
        if(siswa_nis!=undefined && siswa_nama!=undefined && siswa_alamat!=undefined && siswa_kel!=undefined && siswa_pass!=undefined) {
           
            $str = url + "siswa_create.php?nis="+ siswa_nis + "&nama=" +siswa_nama + "&alamat=" +siswa_alamat+ "&jen_kel=" +siswa_kel+ "&siswapass=" +siswa_pass;
            $http.get($str)
            .success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title   : 'Sukses',
                        template: 'Data berhasil diinput'
                    })
                    $state.go('adm.siswa', [], {location: "replace", reload: true});
                } else {
                    $ionicPopup.alert({
                        title   : 'Error',
                        template: 'Data gagal diinput'
                    })
                    $state.go('adm.siswa-create', [], {location: "replace", reload: true});
                }
            }).error(function(){
                $ionicPopup.alert({
                    title   : 'Error',
                    template: 'Ada kesalahan'
                })
            })
        }else {
            $ionicPopup.alert({
                title   : 'Error',
                template: 'Mohon diisi Data Mahasiswa'
            })
        }
    }

    $http.get(url+"siswa_retrieve.php").success(function(response){
        $scope.showSiswa = response.records;
        
    })
    $http.get(url+"siswa_hitung.php").success(function(response){
        $scope.showHitung = response.records;
        
    })
    $scope.items = ["Laki-Laki", "Perempuan"];
    

    $scope.delSiswa  = function(nis){
        if(nis){
            $str = url + "siswa_delete.php?nis=" +nis;
            $http.get($str)
            .success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title   : 'Sukses',
                        template: 'Data berhasil didelete'
                    })
                } else {
                    $ionicPopup.alert({
                        title   : 'Error',
                        template: 'Data gagal didelete'
                    })
                }
                $state.go('adm.siswa', [], {location: "replace", reload: true});
            }).error(function(){
                $ionicPopup.alert({
                    title   : 'Error',
                    template: 'Ada kesalahan'
                })
            })
        }else {
            $ionicPopup.alert({
                title   : 'Error',
                template: 'Ada kesalahan'
            })
        }
    }

    $http.get(url+"siswa_getupdate.php?nis="+$stateParams.siswaNIS)
        .success(function(response){
            $scope.siswa1Data = response.records;
        })

    $scope.updateSiswa = function(){
        var siswa_nis     = $scope.siswa1Data.nis;
        var siswa_nama    = $scope.siswa1Data.nama;
        var siswa_alamat  = $scope.siswa1Data.alamat;
        var siswa_kel     = $scope.siswa1Data.jen_kel;
        var siswa_pass    = $scope.siswa1Data.siswapass;

        if(siswa_nis && siswa_nama!=undefined && siswa_alamat!=undefined && siswa_kel!=undefined && siswa_pass!=undefined){
            $str = url + "siswa_update.php?nama="+siswa_nama+"&alamat="+siswa_alamat+"&jen_kel="+siswa_kel+"&siswapass="+siswa_pass+"&nis="+siswa_nis;
            $http.get($str)
            .success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title   : 'Sukses',
                        template: 'Data berhasil diupdate'
                    })
                    $state.go('adm.siswa', [], {location: "replace", reload: true});
                } else {
                    $ionicPopup.alert({
                        title   : 'Error',
                        template: 'Data gagal diupdate'
                    })
                    $state.go('adm.siswa-create', [], {location: "replace", reload: true});
                }
            }).error(function(){
                $ionicPopup.alert({
                    title   : 'Error',
                    template: 'Ada kesalahan'
                })
            })
        }else{
            $ionicPopup.alert({
                title   : 'Error',
                template: 'Mohon diisi Username/Password'
            })
        }
    }
})