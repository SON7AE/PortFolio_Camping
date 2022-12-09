<template>
    <div id="map"></div>
</template>

<script>
import KakaoMapApiKey from '~/config/kakaoMapKey.js';
import { onMounted } from '@vue/runtime-core';

export default {
    props: {
        mapData: {
            type: Object,
            required: false,
        },
    },
    setup(props) {
        onMounted(() => {
            // 카카오 디벨로퍼 API KEY
            const KAKAO_MAP_API_KEY = KakaoMapApiKey;

            if (window.kakao && window.kakao.maps) {
                initMap();
            } else {
                const script = document.createElement('script');
                /* global kakao */
                script.onload = () => kakao.maps.load(initMap);
                script.src = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${KAKAO_MAP_API_KEY}`;
                document.head.appendChild(script);
            }
        });
        const initMap = () => {
            const mapContainer = document.getElementById('map'); // 지도를 표시할 div
            const mapOption = {
                center: new kakao.maps.LatLng(props.mapData.mapY, props.mapData.mapX), // 지도의 중심좌표
                level: 3, // 지도의 확대 레벨
            };
            const map = new kakao.maps.Map(mapContainer, mapOption);
            // 지도에 마커를 표시합니다.
            const marker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(props.mapData.mapY, props.mapData.mapX), // 마커의 위치
            });
            // 마커가 지도 위에 표시되도록 설정합니다.
            marker.setMap(map);
            kakao.maps.event.addListener(marker, 'click', () => {});
            // 아래 코드는 지도 위의 마커를 제거하는 코드입니다.
            // marker.setMap(null);
        };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

#map {
    width: 100%;
    height: 300px;

    background-color: rgba($color-gray, 0.1);
    border-radius: 24px;
}
</style>
