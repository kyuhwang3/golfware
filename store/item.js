export const state = () => ({
    items: [
        {
            "title": "test Title 1",
            "info": "Golf T shirt 1",
            "stock": 2,
            "img": "/image/test.jpg",
        },
        {
            "title": "test Title 2",
            "info": "Golf T shirt 2",
            "stock": 52,
            "img": "/image/test2.jpg",
        },
        {
            "title": "test Title 3",
            "info": "Golf T shirt 3",
            "stock": 52,
            "img": "/image/test3.jpg",
        },
        {
            "title": "test Title 4",
            "info": "Golf T shirt 4",
            "stock": 4,
            "img": "/image/test4.jpg",
        },
        {
            "title": "test Title 5",
            "info": "Golf T shirt 5",
            "stock": 2,
            "img": "/image/test5.jpg",
        },
        {
            "title": "test Title 6",
            "info": "Golf T shirt 6",
            "stock": 55,
            "img": "/image/test6.jpg",
        },
    ],
});

export const getters = {
    itemList: state => {
        return state.items;
    }
};

export const mutations = {
    setCards: (state, target) => {
        state.cards = target;
    },
    setCurrentCard: (state, target) => {
        state.curCard = target;
    }
};

export const actions = {
    async init(context, target) {
    }
};
