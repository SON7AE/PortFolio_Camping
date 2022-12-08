<template>
    <div class="card">
        <DetailIcon :size="'large'" :theme="'orange'" :icon="card.icon" />
        <div class="card__text-box">
            <span class="card__text-box__label">{{ card.label }}</span>
            <span class="card__text-box__value">{{ card.value }}</span>
        </div>
    </div>
</template>

<script>
import DetailIcon from '~/components/atoms/detail/Icon.vue';

export default {
    components: { DetailIcon },
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.card {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 8px;

    &__text-box {
        display: flex;
        flex-direction: column;

        gap: 8px;

        font-family: 'LeferiPoint-WhiteObliqueA';

        &__label {
            color: gray;
        }
    }
}
</style>
