<template>
    <header class="header">
        <img :src="aDetailCardContents.sFacilityImageUrl" alt="" class="header__image" />
        <DetailIcon :theme="'orange'" :icon="'fa-arrow-left'" class="header__button" @click="pageLink" />
        <DetailIcon :theme="'red'" :icon="'fa-heart'" class="header__bookmark" />
    </header>
</template>

<script>
import DetailIcon from '~/components/atoms/detail/Icon.vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useStore } from '~/store/index';

export default {
    components: { DetailIcon },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const store = useStore();

        store.FETCH_DETAIL_API(route.params.id);
        const { aDetailCardContents } = storeToRefs(store);

        const pageLink = () => {
            router.push('/home');
        };
        return {
            pageLink,
            aDetailCardContents,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.header {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 50%;

    border-radius: 32px;

    position: relative;

    &__image {
        width: 100%;
        height: 100%;

        object-fit: cover;

        border-radius: 28px;
    }

    &__button {
        position: absolute;
        top: 16px;
        left: 16px;

        cursor: pointer;
    }
    &__bookmark {
        position: absolute;
        top: 16px;
        right: 16px;
    }
}
</style>
