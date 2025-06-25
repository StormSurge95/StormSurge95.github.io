let setupPortal = {
    verticalCells: 0,
    horizontalCells: 0,
    pageText: 1.8,
    headerText: 1.8,
    labelText: 0.9,
    displayText: 1.4,
    buttonText: 1.7,
    inputText: 1,
    activePage: 'default',
    pages: {
        list: ['settings'],
        prio: {
            id: 'settings',
            text: 'Optimizer Settings',
            color: '#FF0054',
            pagerSize: { width: 15, height: 2 },
            pagerLeft: 1,
            headers: [
                {
                    text: 'Weight Priorities',
                    left: 1, top: 7,
                    height: 3, width: 25
                },
                {
                    text: 'Player Stats',
                    left: 36, top: 7,
                    height: 3, width: 25
                },
                {
                    text: 'Generators',
                    left: 62, top: 7,
                    height: 3, width: 25
                },
                {
                    text: 'Technology',
                    left: 0, top: 22,
                    height: 3, width: 25
                },
                {
                    text: 'Automation',
                    left: 36, top: 22,
                    height: 3, width: 25
                },
                {
                    text: 'Average Stats',
                    left: 62, top: 22,
                    height: 3, width: 25
                }
            ],
            labels: [],
            inputs: [],
            checkboxes: [],
            displays: [],
            buttons: [],
            toggles: []
        },
        gens: {},
        tech: {},
        auto: {},
        shard: {},
        research: {}
    }
}