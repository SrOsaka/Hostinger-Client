<script setup>
    import OpenLinkIcon from './icons/OpenLinkIcon.vue';
</script>
<template>
    <div class="plans-section-wrapper">
        <div class="container text-center">
            <div class="row">
                <a href="" class="col plans-and-prices backgroundcardplans">
                    <div class="tittle-card">
                        <div>
                            <h1>Plans and prices</h1>
                            <OpenLinkIcon class="OpenLinkIcon" />
                        </div>
                        <p>Summer Sale: find the right plan and save up to 80%.</p>
                    </div>
                    <div class="plan-price-card">
                        <h1>From <br> <b>$2.99</b>/month</h1>
                    </div>
                </a>
                <a href="" class="col plans-and-prices">
                    <div class="tittle-card">
                        <div>
                            <h1>Vibe code websites</h1>
                            <OpenLinkIcon class="OpenLinkIcon" />
                        </div>
                        <p>Describe what you want, and Horizons builds it. <br> No technical skills needed.</p>
                    </div>
                    <div class="try-for-free">
                        <h1>Try for free</h1>
                        <p>No credit card required</p>
                    </div>
                </a> 
            </div>
        </div>
    </div>
</template>
<style src="../assets/css/PlansSection.css" scoped></style>