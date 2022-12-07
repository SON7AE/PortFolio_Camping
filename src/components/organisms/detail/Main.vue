<template>
    <div class="main">
        <DetailHeader />
        <DetailContents @open-overlay="sendEvent" />
    </div>
</template>

<script>
import DetailHeader from '~/components/mocules/detail/Header.vue';
import DetailContents from '~/components/mocules/detail/Contents.vue';

export default {
    components: {
        DetailHeader,
        DetailContents,
    },
    setup(props, context) {
        const sendEvent = () => {
            context.emit('open-overlay');
        };
        return { sendEvent };
    },
};
</script>

<style lan Headerg="scss" scoped>
@import '~/assets/styles/main.scss';

.main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: space-between; */

    width: 100%;
    height: 100%;

    padding: 16px;
    gap: 24px;
}
</style>
