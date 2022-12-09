import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore('main', {
    state: () => ({
        aHomeCard: [],
        aDetailCard: {
            id: 0,
            sFacilityName: '', // 캠핑장 이름
            sFacilityIntro: '', // 캠핑장 소개
            sFacilityAddress: '', // 캠핑장 주소
            sFaciltyyMapX: '', // 캠핑장 주소 X 좌표
            sFaciltyyMapY: '', // 캠핑장 주소 Y 좌표
            sFacilityImageUrl: '', // 캠핑장 이미
            sFacilityAvailableTime: '', // 캠핑장 이용가능시간
            sFacilityAnimal: '', // 캠핑장 반려견 유무
            sFacilityPeripheralFacilities: '', // 캠핑장 주변시설
        },
    }),
    getters: {
        aDetailCardList: (state) => [
            {
                label: '위치',
                icon: 'fa-location-dot',
                value: state.aDetailCard.sFacilityName ? state.aDetailCard.sFacilityName : '등록되지 않았습니다.',
            },
            {
                label: '편의시설',
                icon: 'fa-shop',
                value: state.aDetailCard.sFacilityPeripheralFacilities ? state.aDetailCard.sFacilityPeripheralFacilities : '없음',
            },
            {
                label: '반려견',
                icon: 'fa-dog',
                value: state.aDetailCard.sFacilityAnimal ? state.aDetailCard.sFacilityAnimal : '알 수 없음',
            },
            {
                label: '이용가능시간',
                icon: 'fa-clock',
                value: state.aDetailCard.sFacilityAvailableTime ? state.aDetailCard.sFacilityAvailableTime : '직접 문의해주시기 바랍니다.',
            },
        ],
        aDetailCardMap: (state) => ({
            mapX: state.aDetailCard.sFaciltyyMapX,
            mapY: state.aDetailCard.sFaciltyyMapY,
        }),
    },
    actions: {
        async FETCH_CAMPING_API(props) {
            try {
                const res = await axios.get(props);
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
            } catch (error) {
                console.log(error.message);
            }
        },
        async FETCH_DETAIL_API() {
            try {
                const res = await axios.get(`http://localhost:3000/api/camp/detail/3397`);

                this.aDetailCard.sFacilityName = res.data.facltNm;
                this.aDetailCard.sFacilityIntro = res.data.intro;
                this.aDetailCard.sFacilityAddress = res.data.addr1;
                this.aDetailCard.sFaciltyyMapX = res.data.mapX;
                this.aDetailCard.sFaciltyyMapY = res.data.mapY;
                this.aDetailCard.sFacilityImageUrl = res.data.firstImageUrl;
                this.aDetailCard.sFacilityAvailableTime = res.data.operDeCl;
                this.aDetailCard.sFacilityAnimal = res.data.animalCmgCl;
                this.aDetailCard.sFacilityPeripheralFacilities = res.data.posblFcltyCl;
            } catch (error) {}
        },
    },
});
