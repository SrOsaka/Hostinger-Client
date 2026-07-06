<script setup>
    import HomeVideo from '@/assets/HomeVideo.mp4'; 
    import SecurityShieldIcon from './icons/SecurityShieldIcon.vue';
    import SearchIcon from './icons/SearchIcon.vue';
    import PauseCircleIcon from './icons/PauseCircleIcon.vue';
    import PlayTriangleIcon from './icons/PlayTriangleIcon.vue';
</script>

<template>
    <div class="container-fluid">
        <div class="home-page-wrapper">
            <div class="form-wrapper">
                <div class="home-search">
                    <SearchIcon class="search-icon" />
                    <input class="form-text" placeholder="Type the domain you want" value="">
                </div>
                <button class="search-button"><span>Search</span><SearchIcon class="SearchIcon" /></button>
            </div>
            <div class="free-domain-wrapper">
                <h1 class="free-domain-pc">Free domain for 1 year</h1>
                <p class="free-domain-pc">included with <a href="">yearly plans</a></p>
                <h1 class="free-domain-mobile">Free domain for 1 year <b class="nbsp">&nbsp;</b>
                    <p>included with 
                        <a href="">yearly plans</a>
                    </p>
                </h1>
            </div>
        </div>
    </div>
</template>

<style src="../assets/css/HomePageHero.css" scoped></style>