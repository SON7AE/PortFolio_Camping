<template>
    <div class="contents">
        <HomeActivityFilter />
        <div class="contents__card-box">
            <HomeCardSkeleton v-if="isLoading" />
            <HomeCard v-else v-for="item in filterData ? filterData : aHomeCard" :key="item" :card="item" />
        </div>
    </div>
</template>

<script>
import HomeActivityFilter from '~/components/mocules/home/ActivityFilter.vue';
import HomeCard from '~/components/mocules/home/Card.vue';
import HomeCardSkeleton from '~/components/mocules/Skeleton.vue';

import { storeToRefs } from 'pinia';
import { useStore } from '~/store/index';
import { onMounted, ref } from '@vue/runtime-core';

export default {
    components: { HomeActivityFilter, HomeCard, HomeCardSkeleton },
    props: {
        filterData: {
            type: Array,
            required: false,
        },
    },
    setup() {
        const store = useStore();
        const isLoading = ref(true);

        onMounted(() => {
            isLoading.value = true;
            store.FETCH_CAMPING_API();
            isLoading.value = false;
        });

        const { aHomeCard } = storeToRefs(store);

        return {
            aHomeCard,
            isLoading,
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
