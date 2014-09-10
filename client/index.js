(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.title = 'Zombie Pets';

    $scope.weapon = {};
    $scope.weapons = [];
    $scope.pet = {health:100};
    $scope.pets = [];
    $scope.player1 = null;
    $scope.player2 = null;
    if($scope.player1.health < 0){$scope.player1.isZombie = true;}
    if($scope.player2.health < 0) {$scope.player2.isZombie = true;}

    $scope.fight = function(){
      var  x = Math.round(Math.random()),
      dam1 = 0,
      dam2 = 0;

      if($scope.player1.health < 0){
        dam1 = Math.floor(Math.random() * 4);
      }else{
        dam1 = Math.round(Math.random() * $scope.player1.weapon.damage);
      }
      if($scope.player2.health < 0){
        dam2 = Math.floor(Math.random() * 4);
      }else{
        dam2 = Math.round(Math.random() * $scope.player1.weapon.damage);
      }

      if(x === 1){
        $scope.player2.health = $scope.player2.health - dam1;
        $scope.player1.health = $scope.player1.health - dam2;
      }else{
        $scope.player1.health = $scope.player1.health - dam2;
        $scope.player2.health = $scope.player2.health - dam1;
      }
    };
    $scope.addWeapon = function(){
      $scope.weapons.push($scope.weapon);
      $scope.weapon = {};
      $('name').focus();
    };
    $scope.addPet =function(){
      var index = $scope.pet.weapon * 1;
      $scope.pet.weapon = $scope.weapons[index];
      $scope.pets.push($scope.pet);
      $scope.pet = {health:100};
    };

    $scope.setPlayer = function(num){
      $scope['player' + num] = this.p;
    };

    $scope.toggleWeapon = function(){
      $scope.hideWeapon = !!!$scope.hideWeapon;
    };
    $scope.togglePet = function(){
      $scope.hidePet = !!!$scope.hidePet;
    };
  }]);
})();

