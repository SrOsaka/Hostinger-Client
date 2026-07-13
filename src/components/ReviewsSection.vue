<script setup>
import { ref, onMounted } from 'vue'
import TrustpilotStarsIcon from './icons/TrustpilotStarsIcon.vue'
import TrustpilotIcon from './icons/TrustpilotIcon.vue'
import HorizonsIcon from './icons/HorizonsIcon.vue'
import WbIcon from './icons/WbIcon.vue'
import WordpressIcon from './icons/WordpressIcon.vue'
import PlayTriangleIcon from './icons/PlayTriangleIcon.vue'

const splide = ref(null)

const options = {
  type: 'loop',
  perPage: 2,
  perMove: 1,
  focus: 'center',
  gap: '1rem',
  autoplay: true,
  interval: 100000,
  pauseOnHover: false,
  pagination: false,
  arrows: false,
  clones: 8,
  updateOnMove: true,
  breakpoints: {
    1024: {
      perPage: 2,
    },
    768: {
      perPage: 1.2,
    },
    425: {
      perPage: 1.1,
    },
  },
}

const goToSlide = (slide) => {
  if (!splide.value?.splide) return

  const instance = splide.value.splide

  const targetIndex = slide.index

  if (targetIndex === undefined) return

  instance.go(targetIndex)
}

onMounted(() => {
  if (!splide.value?.splide) return

  splide.value.splide.on('click', (slide) => {
    goToSlide(slide)
  })
})
</script>

<template>
  <div class="reviews-wrapper">
    <div class="reviews-header">
      <span>Trusted by</span>

      <h1>
        They succeeded online -
        <br>
        now it’s your turn
      </h1>

      <div class="reviews-on-trustpilot">
        <div>
          <p>Excellent</p>
          <TrustpilotStarsIcon />
          <br>
        </div>

        <div>
          <a href="">70,066 reviews on</a>
          <TrustpilotIcon />
        </div>
      </div>
    </div>
  </div>
  <div class="reviews-cards-wrapper">
      <Splide
        ref="splide"
        :options="options"
      >
        <SplideSlide>
          <div class="slide">
            <div class="header-card-reviews">
                <HorizonsIcon />
                <h1>“Hostinger is the best hosting provider I’ve ever used. The support is amazing and the prices are unbeatable.”</h1>
                <div class="card-tags-wrapper">
                    <span>Hostinger Horizons</span>
                </div>
            </div>
            <div class="person-card-wrapper">
                <div class="person-card-reviews">
                    <img src="../assets/person.webp" alt="">
                    <div>
                        <h1>Jordi Robert</h1>
                        <p>Marketing expert</p>
                    </div>
                </div>
            </div>
          </div>
        </SplideSlide>
    
        <SplideSlide>
          <div class="slide">
            <div class="header-card-reviews">
                <WbIcon />
                <h1>“Hostinger AI Website Builder takes out a lot of manual work. The website I built was spot on - I had to make only a few changes.”</h1>
                <div class="card-tags-wrapper">
                    <span>Website builder</span>
                    <span>Domains</span>
                    <span>Email</span>
                </div>
            </div>
            <div class="person-card-wrapper">
                <div class="person-card-reviews">
                    <img src="../assets/person1.webp" alt="">
                    <div>
                        <h1>Jarrott Brown</h1>
                        <p>Business owner</p>
                    </div>
                </div>
                <a href="">Watch video <PlayTriangleIcon /></a>
            </div>
          </div>
        </SplideSlide>
    
        <SplideSlide>
          <div class="slide">
            <div class="header-card-reviews">
                <WordpressIcon />
                <h1>“I've been recommending my clients to migrate to Hostinger. Everything is easy, and new features come out all the time.”</h1>
                <div class="card-tags-wrapper">
                    <span>Cloud hosting</span>
                    <span>Domains</span>
                    <span>Email</span>
                </div>
            </div>
            <div class="person-card-wrapper">
                <div class="person-card-reviews">
                    <img src="../assets/person2.webp" alt="">
                    <div>
                        <h1>Anna Franques</h1>
                        <p>Digital designer & developer</p>
                    </div>
                </div>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div class="slide">
            <div class="header-card-reviews">
                <HorizonsIcon />
                <h1>“Ever had an idea for a website or tool? With Hostinger Horizons, you explain it, and the AI just builds it.”</h1>
                <div class="card-tags-wrapper">
                    <span>Hostinger Horizons</span>
                </div>
            </div>
            <div class="person-card-wrapper">
                <div class="person-card-reviews">
                    <img src="../assets/person3.webp" alt="">
                    <div>
                        <h1>Albert Bermejo</h1>
                        <p>Content creator</p>
                    </div>
                </div>
            </div>
          </div>
        </SplideSlide>
    
        <SplideSlide>
          <div class="slide">
            <div class="header-card-reviews">
                <WbIcon />
                <h1>“Hostinger Website Builder offers the most user-friendly experience I've ever encountered.”</h1>
                <div class="card-tags-wrapper">
                    <span>Website builder</span>
                    <span>Domains</span>
                </div>
            </div>
            <div class="person-card-wrapper">
                <div class="person-card-reviews">
                    <img src="../assets/person4.webp" alt="">
                    <div>
                        <h1>Mitch Cardoza</h1>
                        <p>Guitarist, singer and producer</p>
                    </div>
                </div>
                <a href="">Watch video <PlayTriangleIcon /></a>
            </div>
          </div>
        </SplideSlide>
    
        <SplideSlide>
          <div class="slide">
            <div class="header-card-reviews">
                <WordpressIcon />
                <h1>“Thanks to Hostinger's simple dashboard, we can manage our WordPress website ourselves.”</h1>
                <div class="card-tags-wrapper">
                    <span>Cloud hosting</span>
                    <span>Domains</span>
                    <span>Email</span>
                </div>
            </div>
            <div class="person-card-wrapper">
                <div class="person-card-reviews">
                    <img src="../assets/person5.webp" alt="">
                    <div>
                        <h1>Elise Hernaez</h1>
                        <p>Business owner</p>
                    </div>
                </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
  </div>
</template>

<style src="../assets/css/ReviewsSection.css"></style>