// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.siswa', 'starter.mtp', 'starter.nilai'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('ekskul_sma', {
    url: '/ekskul_sma',
    templateUrl: 'templates/menu_ekskul/ekskul_sma.html',
    controller: 'MainCtrl'
  })
  .state('ekskul_smp', {
    url: '/ekskul_smp',
    templateUrl: 'templates/menu_ekskul/ekskul_smp.html',
    controller: 'MainCtrl'
  })
  .state('ekskul_sd', {
    url: '/ekskul_sd',
    templateUrl: 'templates/menu_ekskul/ekskul_sd.html',
    controller: 'MainCtrl'
  })
  .state('ekskul_pgtk', {
    url: '/ekskul_pgtk',
    templateUrl: 'templates/menu_ekskul/ekskul_pgtk.html',
    controller: 'MainCtrl'
  })
  .state('ekskul', {
    url: '/ekskul',
    templateUrl: 'templates/ekskul.html',
    controller: 'MainCtrl'
  })
  .state('location', {
    url: '/location',
    templateUrl: 'templates/location.html',
    controller: 'MapCtrl'
  })
  .state('detailkegiatan', {
    url: '/detailkegiatan/:id',
    templateUrl: 'templates/detailkegiatan.html',
    controller: 'DetailKegiatanCtrl'
  })
  .state('kegiatan', {
    url: '/kegiatan',
    templateUrl: 'templates/kegiatan.html',
    controller: 'KegiatanCtrl'
  })
  .state('brosur_smk', {
    url: '/brosur_smk',
    templateUrl: 'templates/menu_brosur/brosur_smk.html',
    controller: 'MainCtrl'
  })
  .state('brosur_sma', {
    url: '/brosur_sma',
    templateUrl: 'templates/menu_brosur/brosur_sma.html',
    controller: 'MainCtrl'
  })
  .state('brosur_smp', {
    url: '/brosur_smp',
    templateUrl: 'templates/menu_brosur/brosur_smp.html',
    controller: 'MainCtrl'
  })
  .state('brosur_sd', {
    url: '/brosur_sd',
    templateUrl: 'templates/menu_brosur/brosur_sd.html',
    controller: 'MainCtrl'
  })
  .state('brosur_pgtk', {
    url: '/brosur_pgtk',
    templateUrl: 'templates/menu_brosur/brosur_pgtk.html',
    controller: 'MainCtrl'
  })
  .state('brosur', {
    url: '/brosur',
    templateUrl: 'templates/brosur.html',
    controller: 'MainCtrl'
  })
  .state('smk', {
    url: '/smk',
    templateUrl: 'templates/menu_unit/smk.html',
    controller: 'MainCtrl'
  })
  .state('sma', {
    url: '/sma',
    templateUrl: 'templates/menu_unit/sma.html',
    controller: 'MainCtrl'
  })
  .state('smp', {
    url: '/smp',
    templateUrl: 'templates/menu_unit/smp.html',
    controller: 'MainCtrl'
  })
  .state('sd', {
    url: '/sd',
    templateUrl: 'templates/menu_unit/sd.html',
    controller: 'MainCtrl'
  })
  .state('pgtk', {
    url: '/pgtk',
    templateUrl: 'templates/menu_unit/pgtk.html',
    controller: 'MainCtrl'
  })
  .state('unit', {
    url: '/unit',
    templateUrl: 'templates/unit.html',
    controller: 'MainCtrl'
  })
  .state('adm.nilai-create', {
    url: '/nilai-create',
    views: {
      'menuContent': {
        templateUrl: 'templates/login_admin/nilai-create.html',
        controller :'NilaiAdmCtrl'
      }
    }
  })
  .state('adm.nilai-update', {
    url: '/nilai-update/:idnilai',
    views: {
      'menuContent': {
        templateUrl: 'templates/login_admin/nilai-update.html',
        controller :'NilaiAdmCtrl'
      }
    }
  })
  .state('adm.nilai', {
    url: '/nilai',
    views: {
      'menuContent': {
        templateUrl: 'templates/login_admin/nilai.html',
        controller :'NilaiAdmCtrl'
      }
    }
  })
  .state('adm.mtp-update', {
    url: '/mtp-update/:mtpKD',
    views: {
      'menuContent': {
        templateUrl: 'templates/login_admin/mtp-update.html',
        controller :'MtpCtrl'
      }
    }
  })
  .state('adm.mtp-create', {
    url: '/mtp-create',
    views: {
      'menuContent': {
        templateUrl: 'templates/login_admin/mtp-create.html',
        controller :'MtpCtrl'
      }
    }
  })
  .state('adm.mtp', {
    url: '/mtp',
    views: {
      'menuContent': {
        templateUrl: 'templates/login_admin/mtp.html',
        controller :'MtpCtrl'
      }
    }
  })
  .state('adm.siswa-update', {
    url: '/siswa-update/:siswaNIS',
    views: {
      'menuContent': {
        templateUrl: 'templates/login_admin/siswa-update.html',
        controller :'SiswaAdmCtrl'
      }
    }
  })
  .state('adm.siswa-create', {
    url: '/siswa-create',
    views: {
      'menuContent': {
        templateUrl: 'templates/login_admin/siswa-create.html',
        controller :'SiswaAdmCtrl'
      }
    }
  })
  .state('adm.siswa', {
    url: '/siswa',
    views: {
      'menuContent': {
        templateUrl: 'templates/login_admin/siswa.html',
        controller :'SiswaAdmCtrl'
      }
    }
  })
  .state('app.raport', {
    url   : '/raport/:siswaNIS',
    views : {
      'menuContent'  : {
        templateUrl : 'templates/login_siswa/raport.html',
        controller  : 'NilaiCtrl'
      }
    }
  })
  .state('app.profil-update', {
    url   : '/profil-update/:stdNIS',
    cache : false,
    views : {
      'menuContent'  : {
        templateUrl : 'templates/login_siswa/profil-update.html',
        controller  : 'SiswaCtrl'
      }
    }
  })
  .state('app.nilai_siswa', {
    url: '/nilai_siswa/:siswaNIS',
    views: {
      'menuContent': {
        templateUrl: 'templates/login_siswa/nilai_siswa.html',
        controller :'NilaiCtrl'
      }
    }
  })
  .state('adm.main_adm', {
    url: '/main_adm',
    views: {
      'menuContent': {
        templateUrl: 'templates/login_admin/main_adm.html',
        controller :'MainAdmCtrl'
      }
    }
  })
  .state('app.main', {
    url: '/main',
    views: {
      'menuContent': {
        templateUrl: 'templates/login_siswa/main.html',
        controller :'MainCtrl'
      }
    }
  })
  .state('adm', {
    url: '/adm',
    abstract: true,
    cache   : false,
    templateUrl: 'templates/login_admin/menu_adm.html',
    controller  : 'MainAdmCtrl'
  })
  .state('app', {
    url: '/app',
    abstract: true,
    cache   : false,
    templateUrl: 'templates/login_siswa/menu.html',
    controller  : 'MainCtrl'
  })
  .state('login_adm', {
    url: '/login_adm',
    cache : false,
    templateUrl: 'templates/login_adm.html',
    controller: 'LoginAdmCtrl'
  })
  .state('login_std', {
    url: '/login_std',
    cache : false,
    templateUrl: 'templates/login_std.html',
    controller: 'LoginCtrl'
  })
  .state('login', {
    url: '/login',
    cache : false,
    templateUrl: 'templates/login.html',
  })
  .state('front', {
    url: '/front',
    templateUrl: 'templates/front.html'
  });

  $urlRouterProvider.otherwise('/front');
  
})