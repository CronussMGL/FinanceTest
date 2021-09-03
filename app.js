//Delgetsiin control
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();
//Sanhuugiin control
var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      inc: [],
      exp: [],
    },

    totals: {
      inc: 0,
      exp: 0,
    },
  };
})();
//Program holbogch control
var appController = (function (uiCtrl, fnCtrl) {
  var ctrlAddItem = function () {
    // 1. Oruulah ogogdliig delgetsees olj avna.
    console.log(uiCtrl.getInput().type);
    // 2. Olj avsan Datagaa Sanhuugiin controlruu damjuulj hadgalna.

    // 3. Olj avsan Datagaa Web deer tohiroh hesegt ni gargana.

    // 4. Tosoviig tootsoolno.

    // 5. Etssiin uldegdel, tootsoog delgetsend gargana.
  };

  var setupEventListeners = function () {
    var DOM = uiCtrl.getDOMstrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13) {
        ctrlAddItem();
      }
    });
  };
  return {
    init: function () {
      console.log("Program ehellee");
      setupEventListeners();
    },
  };
  console.log(fnCtrl.TotalIncomes().totalInc);
})(uiController, financeController);

appController.init();
