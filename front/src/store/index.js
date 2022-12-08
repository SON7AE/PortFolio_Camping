import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore('main', {
    state: () => ({
        aHomeCard: [],
    }),
    getters: {},
    actions: {
        async FETCH_CAMPING_API() {
            try {
                const res = await axios.get('http://localhost:3000/api/camp');
                const data = res.data.item;

                this.aHomeCard = data.map((item) => {
                    const card = {
                        id: item.contentId,
                        sFacilityName: item.facltNm,
                        sFacilityAddress: item.addr1,
                        sFacilityImageUrl: item.firstImageUrl,
                    };

                    return card;
                });

                console.log(this.aHomeCard);
            } catch (error) {
                console.log(error.message);
            }
        },
    },
});
