class Game {
    constructor() {
        this.interaction = {
            steps: 0,
            money: 0,
            random: 0,
        };
    }

    gameInteraction(playerUI, interactionUI) {
        if (this.interaction.steps >= 3) {
            this.interaction.random = Math.floor(Math.random() * 2);

            if (this.interaction.random) {
                let interaction = Math.floor(Math.random() * 6);
                switch (interaction) {

                    case 0:
                        swal(interactionUI.shortMessage[0], interactionUI.message[0], "error")
                        this.interaction.money = Math.floor(Math.random() * 300);
                        if (playerUI.cash >= 300) {
                            playerUI.cash -= this.interaction.money;
                        }
                        break;

                    case 1:
                        swal(interactionUI.shortMessage[1], interactionUI.message[1], "success");
                        this.interaction.money = Math.floor(Math.random() * 500);
                        if (this.interaction.random) {
                            playerUI.cash += this.interaction.money;
                        }
                        break;

                    case 2:
                        swal(interactionUI.shortMessage[0], interactionUI.message[2], "error")
                        this.interaction.money = Math.floor(Math.random() * 300);
                        if (playerUI.cash >= 300) {
                            playerUI.cash -= this.interaction.money;
                        }
                        break;

                    case 3:
                        swal(interactionUI.shortMessage[1], interactionUI.message[3], "success");
                        this.interaction.money = Math.floor(Math.random() * 1000);
                        if (this.interaction.random) {
                            playerUI.cash += interaction.money;
                        }
                        break;

                    case 4:
                        swal(interactionUI.shortMessage[0], interactionUI.message[4], "error")
                        this.interaction.money = Math.floor(Math.random() * 500);
                        if (playerUI.cash >= 500) {
                            playerUI.cash -= this.interaction.money;
                        }
                        break;

                    case 5:
                        swal(interactionUI.shortMessage[1], interactionUI.message[5], "success");
                        this.interaction.money = Math.floor(Math.random() * 1000);
                        if (this.interaction.random) {
                            playerUI.bank += this.interaction.money;
                        }
                        break;

                }
                this.interaction.steps = 0;
            }
        }
    }

    increaseStep() {
        this.interaction.steps += 1;
    }

    travel(playerUI, gameTurnUI, cityUI, gameUI, drugUI, utils) {
        if (playerUI.days > 0) {
            if (playerUI.location !== gameTurnUI.cityName) {
                let price = 0;
                cityUI.cityList.forEach(value => (value.name === gameTurnUI.cityName) ? (price = value.price) : 0);
                if (playerUI.cash >= price) {
                    playerUI.cash -= price;
                    playerUI.balance = (playerUI.cash + playerUI.bank) - playerUI.credit;
                    playerUI.days -= 1;
                    playerUI.location = gameTurnUI.cityName;
                    playerUI.quote = gameUI.quotes[Math.floor(Math.random() * 3)];

                    for (let i = 0; i < 6; i++) {
                        drugUI.drugList[i].price = utils.randomRange(utils.valueRange[i].max, utils.valueRange[i].min);
                        drugUI.drugList[i].available = utils.randomRange(utils.valueRange[i].units, 1);
                    }

                    playerUI.inventory = 0;
                    drugUI.drugList.forEach(value => {
                        playerUI.inventory += value.inventory * value.price;
                        value.total = 0;
                        value.total += value.inventory * value.price;
                    });

                } else {
                    swal(gameTurnUI.messages[0]);
                }
            } else {
                swal(gameTurnUI.messages[1])
            }
        } else {
            swal(gameTurnUI.messages[2])
        }
        gameTurnUI.cityName = '';
    };

    getQuote(playerUI, gameUI) {
        playerUI.quote = gameUI.quotes[Math.floor(Math.random() * 3)];
    }

    increasePieces(gameTurnUI) {
        gameTurnUI.drugPieces < 10 ? gameTurnUI.drugPieces++ : swal(gameTurnUI.messages[3]);
    }

    minimizePieces(gameTurnUI) {
        gameTurnUI.drugPieces > 1 ? gameTurnUI.drugPieces-- : swal(gameTurnUI.messages[4]);
    }

    buyDrug(playerUI, gameTurnUI, drugUI) {
        if (playerUI.days > 0) {
            if (gameTurnUI.drugName.length) {
                let available = 0;
                drugUI.drugList.forEach(value => (value.name === gameTurnUI.drugName) ? (available = value.available) : 0);
                if (available >= gameTurnUI.drugPieces) {
                    let totalSum = 0;
                    drugUI.drugList.forEach(value => (value.name === gameTurnUI.drugName) ? (totalSum = value.price * gameTurnUI.drugPieces) : 0);
                    if (playerUI.cash >= totalSum) {
                        drugUI.drugList.forEach(value => {
                            if (value.name === gameTurnUI.drugName) {
                                value.available -= gameTurnUI.drugPieces;
                                value.inventory += gameTurnUI.drugPieces;
                                value.total += gameTurnUI.drugPieces * value.price;
                                playerUI.cash -= value.price * gameTurnUI.drugPieces;
                                playerUI.balance = (playerUI.cash + playerUI.bank) - playerUI.credit;
                                playerUI.inventory += value.price * gameTurnUI.drugPieces;
                            }
                        });
                    } else {
                        swal(gameTurnUI.messages[5]);
                    }
                } else {
                    swal(gameTurnUI.messages[6]);
                }
            } else {
                swal(gameTurnUI.messages[7]);
            }
        } else {
            swal(gameTurnUI.messages[9])
        }
        gameTurnUI.drugName = '';
    }

    sellDrug(playerUI, gameTurnUI, drugUI) {
        if (playerUI.days > 0) {
            if (gameTurnUI.drugName.length) {
                let available = 0;
                drugUI.drugList.forEach(value => (value.name === gameTurnUI.drugName) ? (available = value.available) : 0);
                if (available >= gameTurnUI.drugPieces) {
                    let totalSum = 0;
                    drugUI.drugList.forEach(value => (value.name === gameTurnUI.drugName) ? (totalSum = value.price * gameTurnUI.drugPieces) : 0);
                    if (playerUI.cash >= totalSum) {
                        drugUI.drugList.forEach(value => {
                            if (value.name === gameTurnUI.drugName) {
                                value.available += gameTurnUI.drugPieces;
                                value.inventory -= gameTurnUI.drugPieces;
                                value.total -= gameTurnUI.drugPieces * value.price;
                                playerUI.cash += value.price * gameTurnUI.drugPieces;
                                playerUI.balance = (playerUI.cash + playerUI.bank) - playerUI.credit;
                                playerUI.inventory -= value.price * gameTurnUI.drugPieces;
                            }
                        });
                    } else {
                        swal(gameTurnUI.messages[5]);
                    }
                } else {
                    swal(gameTurnUI.messages[6]);
                }
            } else {
                swal(gameTurnUI.messages[7]);
            }
        } else {
            swal(gameTurnUI.messages[9])
        }
        gameTurnUI.drugName = '';
    }

    withdrawMoney(playerUI, gameTurnUI) {
        if (playerUI.days > 0) {
            if (gameTurnUI.bankMoney) {
                if (playerUI.bank >= gameTurnUI.bankMoney) {
                    playerUI.cash += gameTurnUI.bankMoney;
                    playerUI.bank -= gameTurnUI.bankMoney;
                } else {
                    swal(gameTurnUI.messages[13]);
                }
            }
            else {
                swal(gameTurnUI.messages[11]);
            }
        } else {
            swal(gameTurnUI.messages[6])
        }
        gameTurnUI.bankMoney = 0;
    }

    transferMoney(playerUI, gameTurnUI) {
        if (playerUI.days > 0) {
            if (gameTurnUI.bankMoney) {
                if (playerUI.cash >= gameTurnUI.bankMoney) {
                    playerUI.cash -= gameTurnUI.bankMoney;
                    playerUI.bank += gameTurnUI.bankMoney;
                } else {
                    swal(gameTurnUI.messages[10]);
                }
            }
            else {
                swal(gameTurnUI.messages[11]);
            }
        } else {
            swal(gameTurnUI.messages[8])
        }
        gameTurnUI.bankMoney = 0;
    }

    lendMoney(playerUI, gameTurnUI) {
        if (playerUI.days > 0) {
            if (gameTurnUI.creditMoney) {
                if (playerUI.balance >= 0) {
                    if (gameTurnUI.creditMoney < (playerUI.bank + playerUI.cash)) {
                        playerUI.credit += gameTurnUI.creditMoney;
                        playerUI.cash += gameTurnUI.creditMoney;
                        playerUI.balance = (playerUI.cash + playerUI.bank) - playerUI.credit;
                    } else {
                        swal(gameTurnUI.messages[12])
                    }
                } else {
                    swal(gameTurnUI.messages[13])
                }
            } else {
                swal(gameTurnUI.messages[11]);
            }
        } else {
            swal(gameTurnUI.messages[8])
        }
        gameTurnUI.creditMoney = 0;
    }

    payMoney(playerUI, gameTurnUI) {
        if (playerUI.days > 0) {
            if (gameTurnUI.creditMoney) {
                if (playerUI.cash >= gameTurnUI.creditMoney) {
                    playerUI.cash -= gameTurnUI.creditMoney;
                    playerUI.credit -= gameTurnUI.creditMoney;
                    playerUI.balance = (playerUI.cash + playerUI.bank) - playerUI.credit;
                } else {
                    swal(gameTurnUI.messages[14]);
                }
            } else {
                swal(gameTurnUI.messages[15]);
            }
        } else {
            swal(gameTurnUI.messages[8])
        }
        gameTurnUI.creditMoney = 0;
    }
}