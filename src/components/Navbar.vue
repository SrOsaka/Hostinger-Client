<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import HostingerWordmark from '../components/icons/HostingerWordmark.vue'
import HostingerIcon from '../components/icons/HostingerIcon.vue'
import NavTogglerIcon from '../components/icons/NavTogglerIcon.vue'
import ChatBotButton from '../components/ChatBotButton.vue'
import ArrowDown from '../components/icons/ArrowDown.vue'
import EuaFlagLanguage from './icons/EuaFlagLanguage.vue'
import UserIcon from '../components/icons/UserIcon.vue'
import CloseIcon from '../components/icons/CloseIcon.vue'
import OpenLinkIcon from '../components/icons/OpenLinkIcon.vue'


const isTop = ref(true)
const isMenuOpen = ref(false)

const handleScroll = () => {
    isTop.value = window.scrollY === 0
}

const handleMenuOpen = () => {
    isMenuOpen.value = true
    document.body.style.overflow = 'hidden'
}

const handleMenuClose = () => {
    isMenuOpen.value = false
    document.body.style.overflow = ''
}

let collapse = null

onMounted(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    collapse = document.getElementById('navbarSupportedContent')

    if (collapse) {
        collapse.addEventListener('show.bs.collapse', handleMenuOpen)
        collapse.addEventListener('hide.bs.collapse', handleMenuClose)
    }
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)

    document.body.style.overflow = ''

    if (collapse) {
        collapse.removeEventListener('show.bs.collapse', handleMenuOpen)
        collapse.removeEventListener('hide.bs.collapse', handleMenuClose)
    }
})
</script>

<template>
    <nav
    class="navbar navbar-expand-lg"
    :class="{
        'navbar-top': isTop && !isMenuOpen,
        'navbar-menu-open': isMenuOpen
    }">
        <div class="container-fluid">
            <a class="navbar-brand navbar-brand-pc" href="#">
                <HostingerWordmark v-if="!isMenuOpen" />
                <HostingerIcon class="HostingerWordmark" v-else />
            </a>
            <a class="navbar-brand navbar-brand-mobile" href="#">
                <HostingerIcon v-if="!isMenuOpen" />
                <HostingerWordmark class="HostingerWordmark" v-else />
            </a>
            <div class="container-toggler">
                <ChatBotButton
                    v-if="!isMenuOpen"
                    class="btn-chatbot btn-chatbot-mobile"
                />
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span class="toggler-icon">
                        <NavTogglerIcon
                            class="icon hamburger"
                            :class="{ active: !isMenuOpen }"
                        />

                        <CloseIcon
                            class="icon close"
                            :class="{ active: isMenuOpen }"
                        />
                    </span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav navbar-items-pc me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Pricing</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services<ArrowDown />
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Explore<ArrowDown />
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Ecommerce</a>
                    </li>
                </ul>
                <ul class="navbar-nav navbar-items-mobile me-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <span>Services</span>
                        <div class="line"></div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Host and deploy</a>
                        <ArrowDown class="arrow-down" />
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Create a website</a>
                        <ArrowDown class="arrow-down" />
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">1-Click AI Agents</a>
                        <ArrowDown class="arrow-down" />
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Domains</a>
                        <ArrowDown class="arrow-down" />
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Email and Marketing</a>
                        <ArrowDown class="arrow-down" />
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Sell online</a>
                        <ArrowDown class="arrow-down" />
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">1-Click OpenClaw</a>
                        <ArrowDown class="arrow-down" />
                    </li>
                    <li class="nav-item">
                        <span>Other</span>
                        <div class="line"></div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Explore</a>
                        <ArrowDown class="arrow-down" />
                    </li>
                </ul>
                <a href="#migrate" class="migrate-container">
                    <div>
                        <h1>Migrate a website</h1>
                        <p>Move your site fast and for free</p>
                    </div>
                    <OpenLinkIcon class="OpenLinkIcon" />
                </a>
                <form class="d-flex">
                    <ChatBotButton class="btn-chatbot btn-chatbot-pc" />
                    <button class="btn btn-language" type="submit"><EuaFlagLanguage /> <p>EN</p></button>
                    <button class="btn btn-user" type="submit"><UserIcon class="UserIcon" /><p>My account</p></button>
                </form>
            </div>
        </div>
    </nav>
</template>

<style scoped src="../assets/css/Navbar.css"></style>          