angular.module('starter.nilai', [])

.controller('NilaiAdmCtrl', function($scope, $stateParams, $http, $state, $ionicPopup){
    var url = "http://localhost/api/";

    $scope.nilaisData = {};

    $scope.createNilai   = function() {
        
        var nilai_nis= $scope.nilaisData.nis;
        var nilai_kdmtp= $scope.nilaisData.kdmtp;
        var nilai_nilai_smt= $scope.nilaisData.nilai_smt;
        var nilai_kkm= $scope.nilaisData.kkm;
        
        if(nilai_nis!=undefined && nilai_kdmtp!=undefined&& nilai_nilai_smt!=undefined&& nilai_kkm!=undefined) {
           
            $str = url + "nilai_create.php?nis="+ nilai_nis + "&kdmtp=" +nilai_kdmtp + "&nilai_smt=" +nilai_nilai_smt+ "&kkm=" +nilai_kkm;
            $http.get($str)
            .success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title   : 'Sukses',
                        template: 'Data berhasil diinput'
                    })
                    $state.go('adm.nilai', [], {location: "replace", reload: true});
                } else {
                    $ionicPopup.alert({
                        title   : 'Error',
                        template: 'Data gagal diinput'
                    })
                    $state.go('adm.nilai-create', [], {location: "replace", reload: true});
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
                template: 'Mohon diisi Data Nilai'
            })
        }
    }
    
    $http.get(url+"mtp_retrieve.php").success(function(response){
        $scope.showMtp = response.records;
        
    })
    $http.get(url+"siswa_retrieve.php").success(function(response){
        $scope.showSiswa = response.records;
        
    })

    $http.get(url+"nilai_retrieve.php").success(function(response){
        $scope.showNilai = response.records;
        
    })


    $scope.delNilai= function(idnilai){
        if(idnilai){
            $str = url +"nilai_delete.php?idnilai="+idnilai;
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
                $state.go('adm.nilai', [], {location: "replace", reload: true});
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

    $http.get(url+"nilai_getupdate.php?idnilai="+$stateParams.idnilai)
        .success(function(response){
            $scope.nilaiData = response.records;
        })

    $scope.updateNilai = function(){
        var nilai_idnilai= $scope.nilaiData.idnilai;
        var nilai_nis= $scope.nilaiData.nis;
        var nilai_kdmtp= $scope.nilaiData.kdmtp;
        var nilai_nilai_smt= $scope.nilaiData.nilai_smt;
        var nilai_kkm= $scope.nilaiData.kkm;
        if(nilai_idnilai!=undefined &&nilai_nis!=undefined && nilai_kdmtp!=undefined && nilai_nilai_smt!=undefined&& nilai_kkm!=undefined) {
            $str = url + "nilai_update.php?nis="+ nilai_nis + "&kdmtp=" +nilai_kdmtp + "&nilai_smt=" +nilai_nilai_smt+ "&kkm=" +nilai_kkm+ "&idnilai=" +nilai_idnilai;
            
            $http.get($str)
            .success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title   : 'Sukses',
                        template: 'Data berhasil diupdate'
                    })
                    $state.go('adm.nilai', [], {location: "replace", reload: true});
                } else {
                    $ionicPopup.alert({
                        title   : 'Error',
                        template: 'Data gagal diupdate'
                    })
                    $state.go('adm.nilai', [], {location: "replace", reload: true});
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