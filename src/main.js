import Vue from "vue";
import CarouselComponent from './components/CarouselComponent.vue'

const components = [
    CarouselComponent
];

Object.keys(components).forEach(name => {
    Vue.component(components[name].name, components[name]);
});

export default components;