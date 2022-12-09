<template>
    <div class="contents">
        <HomeActivityFilter />
        <div class="contents__card-box">
            <HomeCard v-for="item in aHomeCard" :key="item" :card="item" />
        </div>
    </div>
</template>

<script>
import HomeActivityFilter from '~/components/mocules/home/ActivityFilter.vue';
import HomeCard from '~/components/mocules/home/Card.vue';

import { storeToRefs } from 'pinia';
import { useStore } from '~/store/index';

export default {
    components: { HomeActivityFilter, HomeCard },
    setup() {
        const store = useStore();
        const apiUrl = 'http://localhost:3000/api/camp';

        store.FETCH_CAMPING_API(apiUrl);
        const { aHomeCard } = storeToRefs(store);

        return {
            aHomeCard,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.contents {
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 8px;

    &__card-box {
        display: flex;
        align-items: center;

        padding: 10px 10px 10px 0;
        gap: 20px;

        overflow: scroll;

        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }
}
</style>
