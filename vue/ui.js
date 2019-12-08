class GameUI {
    constructor() {
        this.name = "DrugWars 0.1b";
        this.quotes = [
            "Heute scheint die Sonne, dass wird ein super Tag für dich. ",
            "Es regnet und du hast deinen Regenschirm vergessen, du bist klatschnass.",
            "Super gemacht! Du hast die 10.000€ die du gerade gefunden hast, an das Tierheim gespendet.",
            "Es hagelt stark, du solltest aufhören Drogen zu verkaufen und dir einen richtigen Job suchen."];

    }
}

class PlayerUI {
    constructor(location = "Central Park", days = 30, cash = 2000, bank = 3000, credit = 5500, balance = -500, inventory = 0) {
        this.location = location;
        this.quote = "Super gemacht! Du hast die 10.000€ die du gerade gefunden hast, an das Tierheim gespendet.";
        this.days = days;
        this.cash = cash;
        this.bank = bank;
        this.credit = credit;
        this.balance = balance;
        this.inventory = inventory;
    }
}

class GameTurnUI {
    constructor(drugPieces = 1, drugName = "", bankMoney = 0, creditMoney = 0, cityName = "") {
        this.drugPieces = drugPieces;
        this.drugName = drugName;
        this.bankMoney = bankMoney;
        this.creditMoney = creditMoney;
        this.cityName = cityName;
        this.messages = [
            "Der Busfahrer schreit dich an: Raus!! Ohne Geld keine Fahrt!",
            "Für eine Rundfahrt durch die aktuelle Stadt hast du keine Zeit.",
            "Hättest mal die Finger von den Drogen lassen sollen, jetzt bist du Tod.",
            "Naja, dein Dealer hat leider nicht mehr da.",
            "Hm, dein Dealer fragt sich was du willst. Luft kaufen?",
            "Soviel Geld hast du nicht!",
            "Soviel ist nicht vorrätig",
            "Das geht nicht. Könntest du eine Droge auswählen?",
            "Hättest mal die Finger von den Drogen lassen sollen, du bist Tod.",
            "Soviele Drogen besitzt du garnicht.",
            "Ne, ne ne. Nur soviel Geld wie du hast.",
            "Kein Geld kann man nicht abheben, bitte wähl doch einen Betrag.",
            "Das gibts doch nicht. Soviel gibt dir der Dealer nicht.",
            "Neee, der Dealer will dir nichts leihen.",
            "Neee, soviel Geld hast du garnicht.",
            "Kein Geld kann man nicht ausleihen, bitte wähl doch einen Betrag."
        ];
    }
}

class DrugUI {
    constructor() {
        this.drugList = [
            { name: "Cocaine", price: 31550, available: 2, inventory: 0, total: 0 },
            { name: "Heroin", price: 13500, available: 3, inventory: 0, total: 0 },
            { name: "Acid", price: 4311, available: 7, inventory: 0, total: 0 },
            { name: "Weed", price: 835, available: 15, inventory: 0, total: 0 },
            { name: "Speed", price: 211, available: 27, inventory: 0, total: 0 },
            { name: "Ludes", price: 60, available: 31, inventory: 0, total: 0 },
        ];
    }
}

class CityUI {
    constructor() {
        this.cityList = [
            { id: 0, name: "Bronx", price: 147 },
            { id: 1, name: "Ghetto", price: 289 },
            { id: 2, name: "Central Park", price: 140 },
            { id: 3, name: "Manhattan", price: 311 },
            { id: 4, name: "Coney Island", price: 109 },
            { id: 5, name: "Brookly", price: 218 },
        ];
    }
}

class MoneyUI {
    constructor() {
        this.moneyRange = [10, 50, 100, 200, 300, 500, 1000, 3000, 5000, 25000, 100000];
    }
}

class InteractionUI {
    constructor() {
        this.message = ["Dir ist ein tollwütiger Hund entgegen gekommen, beim wegrennen verlierst du die losen Scheine in deiner Tasche",
            "Dir läuft ein alter Freund entgegen, du erinnerst dich, dass er dir noch Geld schuldet. Du packst ihn dir!",
            "Dein Dealer läuft dir über den Weg, er fragt nach einer Zigarette, aber du hast keine. Er durchsucht deine Taschen!",
            "Das ist der beste Tag deines Lebens. Du hast gerade einen Umschlag mit Geld gefunden.",
            "Der neue Freund deiner alten Flamme erkennt dich wieder. Er schreit dich an: Bezahl deine Schulden bei Gertrud.",
            "Die Bank ruft dich an, und teilt dir mit dass es einen Fehler gab. Du erhälst Geld!"];
        this.shortMessage = ["Hoppalla, Hervorragend"];
    }

}

