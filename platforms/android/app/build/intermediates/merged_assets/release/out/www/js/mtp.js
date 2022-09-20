angular.module('starter.mtp', [])

.controller('MtpCtrl', function($scope, $stateParams, $http, $state, $ionicPopup){
    var url = "http://localhost/api/";

    $scope.mtpsData = {};

    $scope.createMtp   = function() {

        var mtp_kdmtp= $scope.mtpsData.mtp_kdmtp;
        var mtp_namamtp= $scope.mtpsData.mtp_namamtp;
        if(mtp_kdmtp!=undefined && mtp_namamtp!=undefined) {
            $str = url + "mtp_create.php?kdmtp="+ mtp_kdmtp + "&namamtp=" +mtp_namamtp;
            $http.get($str)
            .success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title   : 'Sukses',
                        template: 'Data berhasil diinput'
                    })
                    
                    $state.go('adm.mtp', null, {
                        reload: true,
                        location: 'replace'
                      });

                } else {
                    $ionicPopup.alert({
                        title   : 'Error',
                        template: 'Data gagal diinput'
                    })
                    $state.go('adm.mtp-create', [], {location: "replace", reload: true});
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
                template: 'Mohon diisi Username/Password'
            })
        }
    }

    $http.get(url+"mtp_retrieve.php").success(function(response){
        $scope.showMtp = response.records;
        
    })

    $scope.delMtp= function(kdmtp){
        if(kdmtp){
            $str = url +"mtp_delete.php?kdmtp="+kdmtp;
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
                $state.go('adm.mtp', [], {location: "replace", reload: true});
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

    $http.get(url+"mtp_getupdate.php?kdmtp="+$stateParams.mtpKD)
        .success(function(response){
            $scope.mtpData = response.records;
        })

    $scope.updateMtp = function(){
        var mtp_kdmtp =$scope.mtpData.kdmtp;
        var mtp_namamtp= $scope.mtpData.namamtp;

        if(mtp_kdmtp!=undefined && mtp_namamtp!=undefined) {
            $str = url + "mtp_update.php?namamtp="+mtp_namamtp+"&kdmtp="+mtp_kdmtp;
            $http.get($str)
            .success(function(response){
                if(response==true){
                    $ionicPopup.alert({
                        title   : 'Sukses',
                        template: 'Data berhasil diupdate'
                    })
                    $state.go('adm.mtp', [], {location: "replace", reload: true});
                } else {
                    $ionicPopup.alert({
                        title   : 'Error',
                        template: 'Data gagal diupdate'
                    })
                    $state.go('adm.mtp', [], {location: "replace", reload: true});
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