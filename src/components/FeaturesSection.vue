<script setup>
import { ref } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import morePowerControl from '../assets/more-power-control.webp'
import morePowerControl2 from '../assets/more-power-control-2.webp'

const columns = ref([
    {
        id: 1,
        title: 'More power & control',
        icon: morePowerControl,
        items: [
            {
                title: 'Automate the busywork',
                description:
                    'Turn hard work into smart work with n8n hosting. Use no-code, AI workflows to swap time-wasting manual tasks for easy, speedy automation. So you can focus on what really matters.',
                link: '#',
                open: true
            },
            {
                title: 'Performance you can rely on',
                description:
                    'Unlock blazing-fast performance and rock-solid stability with a Virtual Private Server (VPS). Built to keep your large online projects running smoothly and your data secure.',
                link: '#',
                open: false
            }
        ]
    },
    {
        id: 2,
        title: 'More flexible growth',
        icon: morePowerControl2,
        items: [
            {
                title: 'Hosting that grows with you',
                description:
                    'Cloud hosting offers scalable resources that ensure you never reach a limit. Keep growing with reliable uptime, powerful performance, enhanced security, and flexible pricing.',
                link: '#',
                open: true
            },
            {
                title: 'Hosting for agencies',
                description:
                    'Make access sharing, managing multiple websites, and client collaboration secure and seamless.',
                link: '#',
                open: false
            }
        ]
    }
])

const stats = ref([
    {
        value: '5M+',
        label: 'Clients trust Hostinger'
    },
    {
        value: '150+',
        label: 'Countries served'
    },
    {
        value: '20+',
        label: 'Years of experience'
    },
    {
        value: '10M+',
        label: 'Websites created with us'
    }
])



const statsOptions = {
    type: 'slide',
    perPage: 4,
    perMove: 1,
    gap: '24px',
    pagination: false,
    arrows: false,
    drag: false,
    autoplay: true,
    speed: 280,
    trimSpace: false,
    breakpoints: {
        1400: {
            perPage: 4,
            gap: '24px',
            pagination: false,
            drag: false
        },
        1200: {
            perPage: 3,
            gap: '20px',
            pagination: true,
            drag: true
        },
        991: {
            perPage: 2,
            gap: '18px',
            pagination: true,
            arrows: false,
            drag: true
        },
        768: {
            perPage: 1,
            gap: '18px',
            pagination: true,
            arrows: false,
            drag: true
        }
    }
}

const toggleItem = (columnIndex, itemIndex) => {
    const item = columns.value[columnIndex].items[itemIndex]
    item.open = !item.open
}
</script>

<template>
    <section class="features-section">
        <div class="features-container">
            <div
                v-for="(column, columnIndex) in columns"
                :key="column.id"
                class="features-column"
            >
                <div class="feature-header">
                    <img
                        :src="column.icon"
                        :alt="column.title"
                        class="feature-icon"
                    />

                    <h2>{{ column.title }}</h2>
                </div>

                <div class="feature-list">
                    <div
                        v-for="(item, itemIndex) in column.items"
                        :key="item.title"
                        class="feature-item"
                    >
                        <button
                            class="feature-button"
                            @click="toggleItem(columnIndex, itemIndex)"
                        >
                            <span>{{ item.title }}</span>

                            <span class="feature-toggle">
                                {{ item.open ? "-" : "+" }}
                            </span>
                        </button>

                        <Transition name="accordion">
                            <div
                                v-show="item.open"
                                class="feature-content"
                            >
                                <p>
                                    {{ item.description }}
                                </p>

                                <a
                                    :href="item.link"
                                    class="feature-link"
                                >
                                    Learn more
                                </a>
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="stats-section">
        <div class="container">
            <div class="stats-grid">
                <div v-for="stat in stats" :key="stat.label" class="stats-card">
                    <strong>{{ stat.value }}</strong>
                    <span>{{ stat.label }}</span>
                </div>
            </div>

            <div class="stats-carousel">
                <Splide :options="statsOptions" class="stats-slider">
                    <SplideSlide v-for="stat in stats" :key="stat.label">
                        <div class="stats-card">
                            <strong>{{ stat.value }}</strong>
                            <span>{{ stat.label }}</span>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </section>
</template>
<style scoped src="../assets/css/FeaturesSection.css"></style>