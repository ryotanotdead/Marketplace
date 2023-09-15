import { defineStore } from "pinia"

export const useItemsStore = defineStore("itemsStore", {
    state:() => {
        return {
            items: [
                {
                    id:1,
                    title: "Haori A",
                    description: "Haori description",
                    img:"../../public/assets/haori1.jpg"
                },
                {
                    id:2,
                    title: "Haori B",
                    description: "Haori description",
                    img:"../../public/assets/haori2.jpg"
                },
                {
                    id:3,
                    title: "Haori C",
                    description: "Haori description",
                    img:"../../public/assets/haori3.jpg"
                },
                {
                    id:4,
                    title: "Haori D",
                    description: "Haori description",
                    img:"../../public/assets/haori4.jpg"
                },
                {
                    id:5,
                    title: "Haori E",
                    description: "Haori description",
                    img:"../../public/assets/haori5.jpg"
                },
                {
                    id:6,
                    title: "Haori F",
                    description: "Haori description",
                    img:"../../public/assets/haori6.jpg"
                },
                {
                    id:7,
                    title: "Haori G",
                    description: "Haori description",
                    img:"../../public/assets/haori7.jpg"
                },
                {
                    id:8,
                    title: "Haori H",
                    description: "Haori description",
                    img:"../../public/assets/haori8.jpg"
                }
            ]
        }
        
    }, 
    getters: {
        getItems: state => state.items
    }
});