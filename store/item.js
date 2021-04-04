export const state = () => ({
    items: [
        {
            "keyword": "T-Shirt",
            "title": "test Title 1",
            "info": "Golf T shirt 1",
            "stock": 0,
            "img": "test.jpg",
        },
        {
            "keyword": "T-Shirt",
            "title": "test Title 2",
            "info": "Golf T shirt 2",
            "stock": 52,
            "img": "test2.jpg",
        },
        {
            "keyword": "T-Shirt",
            "title": "test Title 3",
            "info": "Golf T shirt 3",
            "stock": 52,
            "img": "test3.jpg",
        },
        {
            "keyword": "Pants",
            "title": "test Title 4",
            "info": "Golf T shirt 4",
            "stock": 4,
            "img": "test4.jpg",
        },
        {
            "keyword": "Pants",
            "title": "test Title 5",
            "info": "Golf T shirt 5",
            "stock": 2,
            "img": "test5.jpg",
        },
        {
            "keyword": "Pants",
            "title": "test Title 6",
            "info": "Golf T shirt 6",
            "stock": 55,
            "img": "test6.jpg",
        },
        {
            "keyword": "T-Shirt",
            "title": "test Title 1",
            "info": "Golf T shirt 1",
            "stock": 2,
            "img": "test.jpg",
        },
        {
            "keyword": "T-Shirt",
            "title": "test Title 2",
            "info": "Golf T shirt 2",
            "stock": 52,
            "img": "test2.jpg",
        },
        {
            "keyword": "T-Shirt",
            "title": "test Title 3",
            "info": "Golf T shirt 3",
            "stock": 52,
            "img": "test3.jpg",
        },
        {
            "keyword": "Pants",
            "title": "test Title 4",
            "info": "Golf T shirt 4",
            "stock": 4,
            "img": "test4.jpg",
        },
        {
            "keyword": "Pants",
            "title": "test Title 5",
            "info": "Golf T shirt 5",
            "stock": 2,
            "img": "test5.jpg",
        },
        {
            "keyword": "Pants",
            "title": "test Title 6",
            "info": "Golf T shirt 6",
            "stock": 55,
            "img": "test6.jpg",
        },
        {
            "keyword": "T-Shirt",
            "title": "test Title 1",
            "info": "Golf T shirt 1",
            "stock": 2,
            "img": "test.jpg",
        },
        {
            "keyword": "T-Shirt",
            "title": "test Title 2",
            "info": "Golf T shirt 2",
            "stock": 52,
            "img": "test2.jpg",
        },
        {
            "keyword": "T-Shirt",
            "title": "test Title 3",
            "info": "Golf T shirt 3",
            "stock": 52,
            "img": "test3.jpg",
        },
        {
            "keyword": "Pants",
            "title": "test Title 4",
            "info": "Golf T shirt 4",
            "stock": 4,
            "img": "test4.jpg",
        },
        {
            "keyword": "Pants",
            "title": "test Title 5",
            "info": "Golf T shirt 5",
            "stock": 2,
            "img": "test5.jpg",
        },
        {
            "keyword": "Pants",
            "title": "test Title 6",
            "info": "Golf T shirt 6",
            "stock": 55,
            "img": "test6.jpg",
        },
    ],
    keyword: "All"
});

export const getters = {
    itemList: state => {
        return state.items;
    },
    keyword: state => {
        return state.keyword;
    }
};

export const mutations = {
    setKeyword: (state, target) => {
        state.keyword = target;
    }
};

export const actions = {
    async init(context, target) {
    }
};
