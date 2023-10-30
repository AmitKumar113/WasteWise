<template>
    <section class="main-container">
        <header>
            <base-button link to="/management/area-overview">Overview</base-button>
            <base-button link to="/management/schedule-visit">Scheduler</base-button>
        </header>
        <div class="container">
            <router-view ></router-view>
        </div>
    </section>
</template>

<style scoped>
.main-container{
    border: 1px solid black;
}

header{
    height: 3rem;
    display: flex;
    /* justify-content: center; */
    align-items: center;
}
</style>