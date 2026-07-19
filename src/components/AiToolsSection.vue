<script setup>
    import { ref } from 'vue'
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
    <div class="aitools-wrapper">
        <div class="aitools-tittle">
            <span>AI tools</span>
            <h1>Human-led, <br> AI-powered</h1>
            <p>Hostinger’s AI experience helps you seamlessly grow online, while keeping you firmly in control of <br> your online success.</p>
            <button>Get started</button>
        </div>
    </div>
    <div class="container-video-aitools">

        <div class="aitools-video-wrapper">
            <video ref="video" src="../assets/aitools-video.mp4" autoplay loop muted></video>
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
</template>

<style scoped src="../assets/css/AiToolsSection.css"></style>