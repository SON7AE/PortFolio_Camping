<template>
    <div class="page">
        <LayoutTemplate>
            <LoginMain />
        </LayoutTemplate>
    </div>
</template>

<script>
import LayoutTemplate from '~/components/atoms/LayoutTemplate.vue';
import LoginMain from '~/components/organisms/login/Main.vue';

export default {
    components: { LayoutTemplate, LoginMain },
};
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
}
</style>
