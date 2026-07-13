<script setup>
    import SecurityShieldIcon from './icons/SecurityShieldIcon.vue';
    import SearchIcon from './icons/SearchIcon.vue';


    import { ref } from 'vue'

    import HomeVideo from '@/assets/HomeVideo.mp4'
    import PlayIcon from '@/components/icons/PlayTriangleIcon.vue'
    import PauseIcon from '@/components/icons/PauseCircleIcon.vue'

    const video = ref(null)
    const isPlaying = ref(true)

    const toggleVideo = () => {
        if (!video.value) return

        if (video.value.paused) {
            video.value.play()
            isPlaying.value = true
        } else {
            video.value.pause()
            isPlaying.value = false
        }
}

</script>

<template>
    <div class="container-fluid">
        <div class="home-page-wrapper">
            <div class="container"></div>
            <div class="search-page-wrapper">
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
                        </p>&nbsp;
                        <a href="">yearly plans</a>
                    </h1>
                </div>
            </div>
            <div class="home-video-wrapper">
                <video
                    ref="video"
                    class="home-video"
                    autoplay
                    muted
                    loop
                    playsinline
                >
                    <source :src="HomeVideo" type="video/mp4" />
                </video>

                <div class="home-video-overlay container">
                    <h1>Your online success <br> starts here</h1>
                    <p>From launching a website to growing your business, Hostinger’s <br> got you covered.</p>
                    <button>Start now</button>
                    <span><SecurityShieldIcon />30-day money-back guarantee</span>
                </div>

                <button
                    class="video-control"
                    @click="toggleVideo"
                    aria-label="Play/Pause video"
                >
                    <PauseIcon v-if="isPlaying" />
                    <PlayIcon v-else />
                </button>
            </div>
        </div>
    </div>
</template>

<style src="../assets/css/HomePageHero.css" scoped></style>