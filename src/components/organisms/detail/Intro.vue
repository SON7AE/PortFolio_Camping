<template>
    <div class="intro">
        <LayoutTemplate class="layout">
            <button class="layout__button" @click="sendEvent">
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
            <OverlayTextBox />
        </LayoutTemplate>
    </div>
</template>

<script>
import LayoutTemplate from '~/components/atoms/LayoutTemplate.vue';
import DetailIcon from '~/components/atoms/detail/Icon.vue';
import OverlayTextBox from '~/components/mocules/detail/overlay/TextBox.vue';

export default {
    components: { LayoutTemplate, DetailIcon, OverlayTextBox },
    setup(props, context) {
        const sendEvent = () => {
            context.emit('close-overlay');
        };

        return {
            sendEvent,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.intro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    height: 100%;
}
.layout {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding: 16px;

    &__button {
        outline: none;
        border: 0;

        margin-bottom: 16px;

        cursor: pointer;
    }
}
.fa-solid {
    color: $color-red;
    font-size: 2em;
}
</style>
