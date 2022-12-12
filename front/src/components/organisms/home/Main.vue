<template>
    <div class="main">
        <HomeHeader @send-radius="sendEvent" />
        <HomeContents :radius="radius" />
        <HomeFooter />
    </div>
</template>

<script>
import HomeHeader from '~/components/mocules/home/Header.vue';
import HomeContents from '~/components/mocules/home/Contents.vue';
import HomeFooter from '~/components/atoms/Footer.vue';

import { ref } from '@vue/runtime-core';

export default {
    components: { HomeHeader, HomeContents, HomeFooter },
    setup() {
        const radius = ref('');
        const sendEvent = (value) => {
            radius.value = String(value) + '000';
            console.log(radius.value);
        };

        return { sendEvent, radius };
    },
};
</script>

<style lan Headerg="scss" scoped>
@import '~/assets/styles/main.scss';

.main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    padding: 40px;
}
</style>
