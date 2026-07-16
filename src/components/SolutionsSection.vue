<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import OpenLinkIcon from './icons/OpenLinkIcon.vue'

const rows = ref([])
const isDesktop = ref(window.innerWidth > 991)

let ticking = false

const updateDesktop = () => {
    isDesktop.value = window.innerWidth > 991

    if (!isDesktop.value) {
        rows.value.forEach(row =>
            row.style.removeProperty('--overlay-progress')
        )
    }
}

const updateRows = () => {
    if (!isDesktop.value) return

    rows.value.forEach((row, index) => {
        if (index === 0) return

        const rect = row.getBoundingClientRect()
        const overlap = Math.max(0, window.innerHeight - rect.top)
        const progress = Math.min(overlap / rect.height, 1)

        row.previousElementSibling?.style.setProperty(
            '--overlay-progress',
            progress
        )
    })
}

const handleResize = () => {
    updateDesktop()
    updateRows()
}

const handleScroll = () => {
    if (ticking) return

    ticking = true

    requestAnimationFrame(() => {
        updateRows()
        ticking = false
    })
}

onMounted(() => {
    rows.value = [...document.querySelectorAll('.solution-row')]

    handleResize()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
})
</script>

<template>
    <section class="solutions-section">
        <p>Build and launch</p>

        <h1>
            From idea to online, quicker <br />
            and slicker
        </h1>
    </section>

    <section class="solutions-wrapper">
        <div class="solutions">
            <div class="row solution-row">
                <div class="col-md-5">
                    <div class="image-card">
                        <video
                            class="video-card"
                            autoplay
                            muted
                            loop
                            playsinline
                            preload="auto"
                        >
                            <source
                                src="../assets/video-card-solution.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </div>

                <div class="col-md-7">
                    <div class="content-card">
                        <span>Hostinger Horizons</span>

                        <h2>
                            Vibe code your website or web <br />
                            app today
                        </h2>

                        <p>
                            Describe what you want, and Horizons builds it for
                            you. No technical skills needed.
                        </p>

                        <button>
                            Create with Horizons
                            <OpenLinkIcon class="OpenLinkIcon" />
                        </button>

                        <div class="line"></div>
                    </div>
                </div>
            </div>

            <div class="row solution-row">
                <div class="col-md-5">
                    <div class="image-card">
                        <video
                            class="video-card"
                            autoplay
                            muted
                            loop
                            playsinline
                            preload="auto"
                        >
                            <source
                                src="../assets/video-card-solution-ii.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </div>

                <div class="col-md-7">
                    <div class="content-card">
                        <span>Quick-start WordPress</span>

                        <h2>WordPress without the complexity</h2>

                        <p>
                            Create a WordPress site with AI, use a pre-built
                            template, or start from scratch. While we take care
                            of site maintenance, speed, and security for you.
                        </p>

                        <button>
                            Build a WordPress site
                            <OpenLinkIcon class="OpenLinkIcon" />
                        </button>

                        <div class="line"></div>

                        <button>
                            Migrate to Hostinger
                            <OpenLinkIcon class="OpenLinkIcon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style src="../assets/css/SolutionsSection.css"></style>