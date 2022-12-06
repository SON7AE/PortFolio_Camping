<template>
    <div class="activity-filter">
        <span class="activity-filter__title">Explore</span>
        <div class="activity-filter__filter-box">
            <button class="activity-filter__filter-box__filter">
                <img src="~/assets/images/glamping.png" alt="" class="image" />
                <span class="label">Glamping</span>
            </button>
            <button class="activity-filter__filter-box__filter">
                <img src="~/assets/images/dog.png" alt="" class="image" />
                <span class="label">Animal</span>
            </button>
            <button class="activity-filter__filter-box__filter">
                <img src="~/assets/images/fishing.png" alt="" class="image" />
                <span class="label">Fishing</span>
            </button>
            <button class="activity-filter__filter-box__filter">
                <img src="~/assets/images/swimming.png" alt="" class="image" />
                <span class="label">Swimming</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.activity-filter {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;

    gap: 16px;

    &__title {
        font-family: 'Pretendard-Regular';
        font-weight: 700;
        font-size: 1.3em;
    }
    &__filter-box {
        display: flex;
        align-items: center;

        width: 100%;

        gap: 20px;

        overflow: scroll;

        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }

        &__filter {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            width: 88px;
            min-width: 88px;
            height: 85px;

            gap: 4px;

            border-radius: 16px;
            border: 0.5px solid rgba(225, 212, 255, 1);
            background: linear-gradient(45deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 35%, rgba(225, 212, 255, 1) 100%);
        }
    }
}
.image {
    height: 40px;
}
.label {
    font-family: 'Pretendard-Regular';
}
</style>
