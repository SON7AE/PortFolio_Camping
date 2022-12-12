<template>
    <div class="main">
        <HomeHeader @send-radius="sendEvent" />
        <HomeContents :filter-data="aHomeCard" />
        <HomeFooter />
    </div>
</template>

<script>
import HomeHeader from '~/components/mocules/home/Header.vue';
import HomeContents from '~/components/mocules/home/Contents.vue';
import HomeFooter from '~/components/atoms/Footer.vue';

import { storeToRefs } from 'pinia';
import { useStore } from '~/store/index';
import { onMounted, ref } from '@vue/runtime-core';

export default {
    components: { HomeHeader, HomeContents, HomeFooter },
    setup(props, context) {
        const store = useStore();
        const radius = ref('');
        const sendEvent = (value) => {
            radius.value = value;
            store.FETCH_CAMPING_RADIUS_API(radius);
        };

        onMounted(() => {
            sendEvent();
        });

        const { aHomeCard } = storeToRefs(store);

        return {
            aHomeCard,
        };
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
