angular.module('starter.controllers',[])

.controller('LoginCtrl', function($scope, $window, $ionicPopup, $http, $state, $ionicHistory){
    var url = "http://localhost/api/";
    
    $scope.doBack = function() {
        $window.history.back();
    }

    $scope.loginData = {};
    $scope.doLogin = function() {
        var std_user = $scope.loginData.nis;
        var std_pass = $scope.loginData.siswapass;
  
        if(std_user && std_pass){
            str = url+"login_std.php?nis="+std_user+"&pass="+std_pass;
            $http.get(str)
            .success(function(response){
                if(response!=''){
                    $scope.u = response.records;
  
                    sessionStorage.setItem('login_status', true);
                    sessionStorage.setItem('login_id', $scope.u.nis);
                    sessionStorage.setItem('login_name', $scope.u.nama);
                    sessionStorage.setItem('login_alamat', $scope.u.alamat);
                    $ionicHistory.nextViewOptions({
                        disableAnimate: true,
                        disableBack: true
                    })
  
                    $ionicPopup.alert({
                        title: 'Sukses',
                        template: 'Login Sukses'
                    })
  
                    $state.go('app.main', {id: $scope.u.nis}, {location:"replace", reload:true});
                } else {
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'NIS/Password salah'
                    })
                }
            })
        } else {
            $ionicPopup.alert({
                title: 'Error',
                template: 'NIS/Password salah'
            })
        }
    }
  
    $scope.doLogout = function() {
        sessionStorage.removeItem('login_status');
        sessionStorage.removeItem('login_id');
        sessionStorage.removeItem('login_name');
        sessionStorage.removeItem('login_alamat');
  
        $ionicHistory.nextViewOptions({
            disableAnimate  : true,
            disableBack     : true
        })
  
        $ionicPopup.alert({
            title   : 'Sukses',
            template: 'Logout dari Sistem'
        })
  
        $state.go('login', {}, {location:"replace", reload:true});
    }
  })

  .controller('LoginAdmCtrl', function($scope, $ionicPopup, $http, $state, $ionicHistory){
    var url = "http://localhost/api/";

    $scope.loginData = {};
    $scope.doLogin = function() {
        var adm_user = $scope.loginData.username;
        var adm_pass = $scope.loginData.userpass;

        if(adm_user && adm_pass){
            str = url+"login.php?name="+adm_user+"&pass="+adm_pass;
            $http.get(str)
            .success(function(response){
                if(response!=''){
                    $scope.u = response.records;

                    sessionStorage.setItem('login_status', true);
                    sessionStorage.setItem('login_id', $scope.u.userid);
                    sessionStorage.setItem('login_name', $scope.u.username);
                    $ionicHistory.nextViewOptions({
                        disableAnimate: true,
                        disableBack: true
                    })

                    $ionicPopup.alert({
                        title: 'Sukses',
                        template: 'Login Sukses'
                    })

                    $state.go('adm.main_adm', {id: $scope.u.userid}, {location:"replace", reload:true});
                } else {
                    $ionicPopup.alert({
                        title: 'Error',
                        template: 'Username/Password salah'
                    })
                }
            })
        } else {
            $ionicPopup.alert({
                title: 'Error',
                template: 'Username/Password salah'
            })
        }
    }

    $scope.doLogout = function() {
        sessionStorage.removeItem('login_status');
        sessionStorage.removeItem('login_id');
        sessionStorage.removeItem('login_name');

        $ionicHistory.nextViewOptions({
            disableAnimate  : true,
            disableBack     : true
        })

        $ionicPopup.alert({
            title   : 'Sukses',
            template: 'Logout dari Sistem'
        })

        $state.go('login', {}, {location:"replace", reload:true});
    }
})

.controller('MainCtrl', function($scope, $window, $state) {
    $scope.doBack = function() {
        $window.history.back();
    }
    $scope.id       = sessionStorage.getItem('login_id');
    $scope.name     = sessionStorage.getItem('login_name');
    $scope.alamat   = sessionStorage.getItem('login_alamat');
})

.controller('MainAdmCtrl', function($scope, $stateParams, $http, $state, $ionicPopup){
    var url = "http://localhost/api/";

    $scope.id   = sessionStorage.getItem('login_id');
    $scope.name = sessionStorage.getItem('login_name');

    $http.get(url+"siswa_hitung.php").success(function(response){
        $scope.showHitung = response.records;
        
    })

    $http.get(url+"mtp_hitung.php").success(function(response){
        $scope.showHitungMtp = response.records;
        
    })
})

.controller('NilaiCtrl', function($scope, $stateParams, $http, $state, $ionicPopup){
    var url = "http://localhost/api/";

    $http.get(url+"nilai_getdata.php?nis="+$stateParams.siswaNIS)
        .success(function(response){
            $scope.shownilaiData = response.records;
        })
})

.controller('KegiatanCtrl', function($scope, $http, $state, $window) {
    $http.get("https://cakrabuana.sch.id/wp-json/wp/v2/posts")
        .then(function (response){
            $scope.posts = response.data;
        });
    $scope.doAbout = function(){
        $window.history.back();
    };
})

.controller('DetailKegiatanCtrl', function($scope, $http, $stateParams, $state, $window) {
    $http.get("https://cakrabuana.sch.id/wp-json/wp/v2/posts/"+$stateParams.id)
        .then(function (response){
            $scope.posts = response.data;
        });
    $scope.doAbout = function(){
        $window.history.back();
    };
})

.controller('MapCtrl', function($scope, $ionicLoading, $compile, $state, $window) {
    window.initMap = function () {
        var myLatlng = new google.maps.LatLng(-6.393231470368237, 106.80238656138586);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        var contentString = "<div><a ng-click='clickTest()'>Cakra Buana <br/>+62-21-5853753</a></div>";
        var compiled = $compile(contentString) ($scope);

        var infowindow = new google.maps.InfoWindow({
            content: compiled[0]
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Cakra Buana'
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });

        $scope.map = map;
    }
    google.maps.event.addDomListener(window, 'load', initMap);
    initMap();
    $scope.doAbout = function(){
        $window.history.back();
    };
})