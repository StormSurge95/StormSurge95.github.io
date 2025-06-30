const blankPlayer = {
    version: 0.01,
    activeMenu: 'settings',
    weights: {
        cells: 1,
        mods: 12,
        shards: 10,
        research: 8,
        academy: 24,
        materials: 72,
        cost: 1,
        rank: 1
    },
    player: {
        level: 1,
        LPBarFill: 0
    },
    stats: {
        ticks: 1,
        loops: 1,
        loopResets: 0,
        operations: 0,
        studies: 0,
        missions: 0
    },
    generators: {
        MK1: 0,
        MK2: 0,
        MK3: 0,
        MK4: 0,
        MK5: 0,
        MK6: 0,
        MK7: 0,
        MK8: 0
    },
    technology: {
        HW: {
            MK1: 0,
            MK2: 0,
            MK3: 0,
            MK4: 0,
            MK5: 0,
            MK6: 0,
            MK7: 0,
            MK8: 0
        },
        SW: {
            MK1: 0,
            MK2: 0,
            MK3: 0,
            MK4: 0,
            MK5: 0,
            MK6: 0,
            MK7: 0,
            MK8: 0
        }
    },
    automation: {
        generators: {
            MK1: false,
            MK2: false,
            MK3: false,
            MK4: false,
            MK5: false,
            MK6: false,
            MK7: false,
            MK8: false
        },
        technology: {
            hwMK1: false,
            swMK1: false,
            hwMK2: false,
            swMK2: false,
            hwMK3: false,
            swMK3: false,
            hwMK4: false,
            swMK4: false,
            hwMK5: false,
            swMK5: false,
            hwMK6: false,
            swMK6: false,
            hwMK7: false,
            swMK7: false,
            hwMK8: false,
            swMK8: false,
        },
        crew: {
            cra: false,
            aux: false,
            zag: false,
            hep: false,
            dem: false,
            koi: false,
            zeu: false
        },
        loadout: {
            cra: false,
            aux: false,
            zag: false,
            hep: false,
            dem: false,
            koi: false,
            zeu: false
        },
        research: {
            scientist: false,
            equipment: false,
            quantum: false
        }
    },
    tokens: {
        T1: {
            TOKEN1: 0,
            DIAMOND: 0,
            CELLS: 0,
            MODS: 0,
            MK1: 0,
            MK2: 0,
            MK3: 0,
            MK4: 0,
            MK5: 0,
            MK6: 0,
            MK7: 0,
            MK8: 0
        },
        T2: {
            TOKEN2: 0,
            DAILY1: 0,
            MPSH: 0,
            MK1MK2: 0,
            MK3MK4: 0,
            MK5MK6: 0,
            MK7MK8: 0
        },
        T3: {
            TOKEN3: 0,
            DAILY2: 0,
            GMPRP: 0,
            GSHAP: 0
        }
    },
    diamonds: {
        generators: {
            MK1: 0,
            MK2: 0,
            MK3: 0,
            MK4: 0,
            MK5: 0,
            MK6: 0,
            MK7: 0,
            MK8: 0
        },
        special: {
            TOKENS: 0,
            CELLS: 0,
            MODS: 0,
            SHARDS: 0,
            RESEARCH: 0,
            ACADEMY: 0,
            ALLGENS: 0,
            MATS: 0
        },
        oneTimers: {
            ALPHA: 0,
            BETA: 0,
            CETI: 0,
            DELTA: 0,
            EPSILON: 0,
            FENIX: 0,
            GAMMA: 0,
            HELION: 0,
            IXION: 0,
            JUNO: 0,
            KAPPA: 0,
            LYRA: 0,
            MIKO: 0,
            NORA: 0,
            OMEGA: 0,
            PEGASUS: 0,
            QORU: 0,
            RIGEL: 0,
            SIGMA: 0,
            TYPHON: 0,
            UTOPIA: 0,
            VEX: 0,
            XENO: 0,
            ZION: 0
        },
        lgOneTimers : {
            ANDROMEDA: 0,
            BEERUS: 0,
            CENTURION: 0,
            DAHL: 0,
            ELYSIUM: 0,
            FERRICK: 0
        }
    },
    ships: {
        cra: {
            evo: 0,
            rank: { current: 0, progress: 0, goal: 1 },
            crew: 0,
            installs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        aux: {
            evo: 0,
            rank: { current: 0, progress: 0, goal: 1 },
            freePoints: 0,
            crew: 0,
            installs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
        },
        zag: {
            evo: 0,
            rank: { current: 0, progress: 0, goal: 1 },
            freePoints: 0,
            crew: 0,
            installs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
        },
        hep: {
            evo: 0,
            rank: { current: 0, progress: 0, goal: 1 },
            freePoints: 0,
            crew: 0,
            installs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
        },
        dem: {
            evo: 0,
            rank: { current: 0, progress: 0, goal: 1 },
            freePoints: 0,
            crew: 0,
            installs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
        },
        koi: {
            evo: 0,
            rank: { current: 0, progress: 0, goal: 1 },
            freePoints: 0,
            crew: 0,
            installs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
        },
        zeu: {
            evo: 0,
            rank: { current: 0, progress: 0, goal: 1 },
            freePoints: 0,
            crew: 0,
            installs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
        }
    },
    timing: {
        tick: 8,
        op: 65,
        study: 10
    }
};

let playerData = JSON.parse(localStorage.getItem("CifiOptiSave")) || blankPlayer;

function SavePlayerData() {
    localStorage.setItem("CifiOptiSave",JSON.stringify(playerData));
}

function LoadPlayerData() {
    playerData = JSON.parse(localStorage.getItem("CifiOptiSave"))
}

function UpdatePlayerData(clear = false) {
    if (clear) {
        localStorage.removeItem("CifiOptiSave");
        playerData = blankPlayer;
    }
    // add props to player data when opening newer version of optimizer
    SavePlayerData();
}

function updateData(e) {
    let id = e.target.id;
    let val = e.target.value;
    switch (id) {
        case "cellWeight":
            playerData.weights.cells = val;
            break;
        case "mpWeight":
            playerData.weights.mods = val;
            break;
        case "shardWeight":
            playerData.weights.shards = val;
            break;
        case "rpWeight":
            playerData.weights.research = val;
            break;
        case "apWeight":
            playerData.weights.academy = val;
            break;
        case "matWeight":
            playerData.weights.materials = val;
            break;
        case "crWeight":
            playerData.weights.cost = val;
            break;
        case "rankWeight":
            playerData.weights.rank = val;
            break;
        case "playerLevel":
            playerData.player.level = val;
            break;
        case "LPBarFill":
            playerData.player.LPBarFill = val;
            break;
        case "ticksCount":
            playerData.stats.ticks = val;
            break;
        case "loopsCount":
            playerData.stats.loops = val;
            break;
        case "loopResetsCount":
            playerData.stats.loopResets = val;
            break;
        case "operationsCount":
            playerData.stats.operations = val;
            break;
        case "studiesCompleted":
            playerData.stats.studies = val;
            break;
        case "missionsCount":
            playerData.stats.missions = val;
            break;
        case "manualMK1":
            playerData.generators.MK1 = val;
            break;
        case "manualMK2":
            playerData.generators.MK2 = val;
            break;
        case "manualMK3":
            playerData.generators.MK3 = val;
            break;
        case "manualMK4":
            playerData.generators.MK4 = val;
            break;
        case "manualMK5":
            playerData.generators.MK5 = val;
            break;
        case "manualMK6":
            playerData.generators.MK6 = val;
            break;
        case "manualMK7":
            playerData.generators.MK7 = val;
            break;
        case "manualMK8":
            playerData.generators.MK8 = val;
            break;
        case "hwMK1":
            playerData.technology.HW.MK1 = val;
            break;
        case "swMK1":
            playerData.technology.SW.MK1 = val;
            break;
        case "hwMK2":
            playerData.technology.HW.MK2 = val;
            break;
        case "swMK2":
            playerData.technology.SW.MK2 = val;
            break;
        case "hwMK3":
            playerData.technology.HW.MK3 = val;
            break;
        case "swMK3":
            playerData.technology.SW.MK3 = val;
            break;
        case "hwMK4":
            playerData.technology.HW.MK4 = val;
            break;
        case "swMK4":
            playerData.technology.SW.MK4 = val;
            break;
        case "hwMK5":
            playerData.technology.HW.MK5 = val;
            break;
        case "swMK5":
            playerData.technology.SW.MK5 = val;
            break;
        case "hwMK6":
            playerData.technology.HW.MK6 = val;
            break;
        case "swMK6":
            playerData.technology.SW.MK6 = val;
            break;
        case "hwMK7":
            playerData.technology.HW.MK7 = val;
            break;
        case "swMK7":
            playerData.technology.SW.MK7 = val;
            break;
        case "hwMK8":
            playerData.technology.HW.MK8 = val;
            break;
        case "swMK8":
            playerData.technology.SW.MK8 = val;
            break;
    }
    SavePlayerData();
}