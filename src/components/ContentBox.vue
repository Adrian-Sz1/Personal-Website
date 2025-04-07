<script setup>
import { sortTechnologies } from './technologyUtils';

const props = defineProps({
    urlLink: {
        type: String,
        required: false,
    },
    dateRange: {
        type: String,
        required: false,
    },
    header: {
        type: String,
        required: true,
    },
    subHeader: {
        type: String,
        required: false,
    },
    desc: {
        type: String,
        required: true,
    },
    technologyList: {
        type: Array,
        required: false,
        validator: (value) => value.every((item) => typeof item === 'string'),
    },
});

const sortedTechnologyList = props.technologyList !== undefined ? sortTechnologies(props.technologyList) : [];
</script>

<template>
    <div id="out-container">
        <div id="inner-container">
            <header id="date-container">{{ dateRange }}</header>
            <div id="text-body-container">
                <div id="clickable-title-container">
                    <a :href="urlLink" target="_blank">
                        <h2 style="font-weight: 500;">{{ header }}</h2>
                    </a>
                </div>
                <h3>{{ subHeader }}</h3>
                <p>{{ desc }}</p>
                <div id="out-skills-container">
                    <ul id="skills-container">
                        <li class="mint-pill-medium" v-for="technology in sortedTechnologyList" :key="technology">
                            {{ technology }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (min-width: 1024px) {
    #out-container {
        max-width: 1000px;
    }

    #inner-container {
        display: flex;
    }

    #date-container {
        padding-top: 0.6rem;
        min-width: 200px;
        display: flex;
        text-align: justify;
        text-justify: inter-word;
        font-size: 14px;
    }

    h2 {
        font-size: 1.65em;
    }
}

#out-container {
    display: flex;
    flex-wrap: wrap;
    cursor: default;
    padding: 1rem;
    width: 100%;
    background-color: transparent;
    border: 1px solid transparent;
}

#out-container:hover {
    background-color: rgba(0, 189, 126, 0.02);
    border: 1px solid rgba(0, 189, 126, 0.1);
    border-radius: 5px;
}

#text-body-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

#date-container {
    color: var(--mode-color-text);
    letter-spacing: 0.2rem;
}

#clickable-title-container {
    display: flex;
    justify-content: left;
}

a {
    display: flex;
}

p {
    line-height: 1.5rem;
    color: var(--mode-color-text);
    letter-spacing: 0.02rem;
    margin-bottom: 0.35rem;
    font-size: clamp(0.9rem, 2.5vw, 1rem);
    text-align: justify;
    text-justify: inter-word;
    display: flex;
    flex-grow: 1;
}

h2 {
    line-height: 2.5rem;
    letter-spacing: 0.08rem;
    font-size: 1.5em;
}

h3 {
    line-height: 2rem;
    color: var(--mode-color-h3-1);
    letter-spacing: 0.06rem;
}

#out-skills-container {
    flex-grow: 1;
}

ul {
    padding: 0;
}

li {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 0 10px 0 10px;
    margin: 0.35rem;
    margin-left: 0;
}

#skills-container {
    list-style-type: none;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
}
</style>