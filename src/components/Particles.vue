<script setup>
const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};

const particlesOptions = {
    fullScreen: {
        enable: true,
        zIndex: -10
    },
    background: {
        color: {
            value: '#181818'
        }
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: 'push'
            },
            onHover: {
                enable: true,
                mode: 'repulse'
            },
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 2
            },
            repulse: {
                distance: 120,
                duration: 5
            }
        },
        detect_on: {
            type: 'canvas'
        }
    },
    particles: {
        color: {
            value: '#00bd7e'
        },
        links: {
            color: '#00bd7e',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: 'out',
            random: false,
            speed: 0.35,
            straight: false
        },
        number: {
            density: {
                enable: true,
            },
            value: 80
        },
        opacity: {
            value: 0.3
        },
        shape: {
            type: 'circle'
        },
        size: {
            value: { min: 2, max: 3 }
        }
    },
    detectRetina: true
};
</script>

<template>
    <div>
        <vue-particles id="tsparticles" @particlesLoaded="particlesLoaded" :options="particlesOptions" />
    </div>
</template>

<style scoped></style>