<template>
    <div class="sideNav">
        <transition name="slide">
        <div class="sidebar-backdrop" :click='closeSidebar' v-if="isPanelOpen">
                <a href="#">NEW</a>
                <a href="#">BEST 100</a>
                <a href="#">BASIC</a>
                <a href="#">OUTER</a>
                <a href="#">TOP</a>
                <a href="#">DRESS/SKIRT</a>
                <a href="#">PANT</a>
                <a href="#">LEGGINGS</a>
                <a href="#">SET</a>
        </div>
        </transition>   
    </div>    
</template>

<script>
import { store, mutations } from '@/store.js'
export default {
    methods: {
       closeSidebar:mutations.toggleNav,
       closeA:mutations.toggleNav,
    },
       computed: {
           isPanelOpen() {
               return store.isNavOpen
           }
       }
    }
</script>

<style>
.slide-enter-active,
.slide-leave-active {
    transition : transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
}
.sidebar-backdrop {
    height: 100%;
    width: 20%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #efe9c2;
    overflow-x: hidden;
    padding-top: 60px;
}
.sidebar-backdrop  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 20px;
    color: black;
    display: block;
    transition: 0.3s;
    text-align: start;
}

.sideNav > a:hover {
    color: #f45700;
}

.sideNav > .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}
</style>