<template>
    <div class="main">
        <swiper :pagination="{ clickable: true }" :modules="modules" class="mySwiper">
            <swiper-slide v-for="season in seasons" :key="season" :data-theme="season" class="mySwiper__slide"></swiper-slide>
        </swiper>
        <div class="main__sign">
            <LoginHeader />
            <Button :label="'Get started'" :theme="'orange'" :path="path" />
        </div>
    </div>
</template>

<script>
import LoginHeader from '~/components/mocules/login/Header.vue';
import Button from '~/components/atoms/Button.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
    components: { LoginHeader, Button, Swiper, SwiperSlide },
    setup() {
        const path = 'home';
        const seasons = ['fall', 'spring', 'summer', 'winter'];

        return {
            modules: [Pagination],
            path,
            seasons,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.mySwiper {
    width: 100%;
    height: 100%;

    border-radius: 32px;

    position: relative;

    &__slide {
        width: 100%;
        height: 100%;

        background-size: cover;
        background-position: 65%;

        &[data-theme='spring'] {
            background-image: url('~/assets/images/spring.jpg') !important;
        }
        &[data-theme='summer'] {
            background-image: url('~/assets/images/summer.jpg') !important;
        }
        &[data-theme='fall'] {
            background-image: url('~/assets/images/fall.jpg') !important;
        }
        &[data-theme='winter'] {
            background-image: url('~/assets/images/winter.jpg') !important;
        }
    }
}

.main {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    position: relative;

    &__sign {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        width: calc(100% - 80px);
        height: calc(100% - 80px);

        margin-top: 40px;

        position: absolute;
        top: 0;
        z-index: 1;
    }
}
</style>
