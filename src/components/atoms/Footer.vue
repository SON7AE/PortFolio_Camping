<template>
    <footer class="footer">
        <RouterLink to="/" class="route">
            <i class="fa-solid fa-right-to-bracket"></i>
        </RouterLink>
        <RouterLink to="/home" class="route">
            <i class="fa-solid fa-house"></i>
        </RouterLink>
        <RouterLink to="/map" class="route">
            <i class="fa-solid fa-map-location-dot"></i>
        </RouterLink>
        <RouterLink to="/profile" class="route">
            <i class="fa-solid fa-user"></i>
        </RouterLink>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: calc(100% + 80px);
    height: 80px;

    padding: 0 40px;
    margin: 0 0 -40px -40px;

    border-radius: 0 0 32px 32px;
    background-color: $color-white;
}
.route {
    font-size: 1.2em;
    color: $color-gray;

    &:hover {
        color: $color-pupple;
        transition: all 0.3s ease-in;
    }
}
</style>
