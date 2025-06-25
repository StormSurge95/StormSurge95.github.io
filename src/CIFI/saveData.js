const blankPlayer = {
    version: 1,
    activePortal: 'setup',
    colorProfile: {
        academyProjects: ['#444444','#CCCC44','#44CC44','#4444CC']
    },
    level: 0,
    loopsFilled: 0,
    timing: {
        tick: 8,
        op: 65,
        study: 10
    },
    ships: {
        cradle: {
            evo: 0,
            rank: { current: 0, progress: 0, goal: 1 },
            freePoints: 0,
            crew: 0,
            installs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
        },
        auxesia: {
            evo: 0,
            rank: { current: 0, progress: 0, goal: 1 },
            freePoints: 0,
            crew: 0,
            installs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
        },
        zagreus: {
            evo: 0,
            rank: { current: 0, progress: 0, goal: 1 },
            freePoints: 0,
            crew: 0,
            installs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
        },
        hephaestus: {
            evo: 0,
            rank: { current: 0, progress: 0, goal: 1 },
            freePoints: 0,
            crew: 0,
            installs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
        },
        demeter: {
            evo: 0,
            rank: { current: 0, progress: 0, goal: 1 },
            freePoints: 0,
            crew: 0,
            installs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
        },
        koios: {
            evo: 0,
            rank: { current: 0, progress: 0, goal: 1 },
            freePoints: 0,
            crew: 0,
            installs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
        },
        zeus: {
            evo: 0,
            rank: { current: 0, progress: 0, goal: 1 },
            freePoints: 0,
            crew: 0,
            installs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
        }
    },
    loopMods: {},
    shardMilestones: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    research: {
        mission: [0,0,0,0,0],
        perfection: [0,0,0,0],
        construction: [0,0]
    },
    academy: {
        personnel: {
            POD: {
                power: 1,
                count: 0
            },
            CARRIER: {
                power: 4,
                count: 0,
            },
            TITAN: {
                power: 12,
                count: 0
            },
            CORVETTE: {
                power: 16,
                count: 0
            }
        },
        campaignsComplete: 0,
        farms: [
            [
                {
                    crew: [0,0,0,0],
                    locked: false
                },
                {
                    crew: [0,0,0,0],
                    locked: false
                },
                {
                    crew: [0,0,0,0],
                    locked: false
                }
            ],
            [
                {
                    crew: [0,0,0,0],
                    locked: false
                },
                {
                    crew: [0,0,0,0],
                    locked: false
                },
                {
                    crew: [0,0,0,0],
                    locked: false
                }
            ],
            [
                {
                    crew: [0,0,0,0],
                    locked: false
                },
                {
                    crew: [0,0,0,0],
                    locked: false
                },
                {
                    crew: [0,0,0,0],
                    locked: false
                }
            ]
        ],
        farmYield: 0,
        ap: 0,
        stock: [0,0,0,0,0,0,0,0],
        exchanges: {
            techSamples: 0,
            fuelCells: 0,
            dataCubes: 0
        },
        projectLevels: [0,0,0,0,0,0,0,0,0],
        projectGoals: [0,0,0,0,0,0,0,0,0],
        gearLevels: [
            0,0,0,
            0,0,0,0,
            0,0,0,0,0,
            0,0,0,0,0,
            0,0,0,0,0
        ],
        gearSets: [false, false, false, false, false],
        constructionMilestones: [
            false,false,false,false,false,false,false,false,false,false,false,false,
            false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
            false,false,false,false,false,false
        ],
        cmAP: 1,
        badges: {
            workers: false,
            innovation: false,
            tinkering: false,
            loopers: false,
            efficiency: false,
            engineering: false
        }
    },
    tokens: {
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
        MK8: 0,
        TOKEN2: 0,
        DAILY1: 0,
        MPSH: 0,
        MK1MK2: 0,
        MK3MK4: 0,
        MK5MK6: 0,
        MK7MK8: 0,
        TOKEN3: 0,
        DAILY2: 0,
        GMPRP: 0,
        GSHAP: 0
    },
    diamonds: {
        MK1: 0,
        MK2: 0,
        MK3: 0,
        MK4: 0,
        MK5: 0,
        MK6: 0,
        MK7: 0,
        MK8: 0,
        TOKENS: 0,
        CELLS: 0,
        MODS: 0,
        SHARDS: 0,
        RESEARCH: 0,
        ACADEMY: 0,
        ALLGENS: 0,
        MATS: 0,
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
        ZION: 0,
        ANDROMEDA: 0,
        BEERUS: 0,
        CENTURION: 0,
        DAHL: 0,
        ELYSIUM: 0,
        FERRICK: 0
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
    }
};

let playerData = JSON.parse(localStorage.getItem("CifiOptiSave")) || blankPlayer;

function SavePlayerData() {
    localStorage.setItem("CifiOptiSave",JSON.stringify(playerData));
}

function LoadPlayerData() {
    playerData = JSON.parse(localStorage.getItem("CifiOptiSave"))
}

function UpdatePlayerData() {
    // add props to player data when opening newer version of optimizer
    SavePlayerData();
}