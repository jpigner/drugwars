let utils = new Utils();
let gameUI = new GameUI();
let playerUI = new PlayerUI();
let drugUI = new DrugUI();
let gameTurnUI = new GameTurnUI();
let cityUI = new CityUI();
let moneyUI = new MoneyUI();
let interactionUI = new InteractionUI();
let menu = new Menu();
let game = new Game();

var app = new Vue({

  el: '#app',
  data: {

    utils,
    gameUI,
    playerUI,
    drugUI,
    gameTurnUI,
    cityUI,
    moneyUI,
    interactionUI,
    menu,
    game

  },

  methods: {
    selectedBankValue: function (event) {
    },

    selectedCreditValue: function (event) {
    },

    selectedDrugValue: function (event) {
    },

    selectedCityValue: function (event) {
    }
  }

});