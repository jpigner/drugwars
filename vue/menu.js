class Menu {
    deleteGame() {
        if (localStorage.getItem("days")) {
            localStorage.clear();
            swal("Spielstand wurde gelöscht");
        }
    }

    loadGame(playerUI) {
        if (localStorage.getItem("days")) {
            playerUI.location = localStorage.getItem("location");
            playerUI.days = localStorage.getItem("days");
            playerUI.cash = localStorage.getItem("cash");
            playerUI.bank = localStorage.getItem("bank");
            playerUI.credit = localStorage.getItem("credit");
            playerUI.balance = localStorage.getItem("balance");
            playerUI.inventory = localStorage.getItem("inventory");
            swal("Spielstand wurde geladen");
        }
    }

    newGame(playerUI, drugUI) {
        playerUI.location = "Central Park";
        playerUI.quote = "Super gemacht! Du hast die 10.000€ die du gerade gefunden hast, an das Tierheim gespendet.";
        playerUI.days = 30;
        playerUI.cash = 2000;
        playerUI.bank = 3000;
        playerUI.credit = 5500;
        playerUI.balance = -500;
        playerUI.inventory = 0;

        let utils = new Utils();

        for (let i = 0; i < 6; i++) {
            drugUI.drugList[i].price = utils.randomRange(utils.valueRange[i].max, utils.valueRange[i].min);
            drugUI.drugList[i].available = utils.randomRange(utils.valueRange[i].units, 1);
        }
        swal("Neues Spiel");
    }

    saveGame(playerUI) {
        localStorage.setItem("location", playerUI.location);
        localStorage.setItem("days", playerUI.days);
        localStorage.setItem("cash", playerUI.cash);
        localStorage.setItem("bank", playerUI.bank);
        localStorage.setItem("credit", playerUI.credit);
        localStorage.setItem("balance", playerUI.balance);
        localStorage.setItem("inventory", playerUI.inventory);
        swal("Spielstand wurde gespeichert");
    }

}