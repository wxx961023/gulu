<template>
    <div class="item">
        <div class="title-wrapper" @click="toggle">
            <d-icon class="icon" name="arrow-open" v-if="arrow && isOpen "></d-icon>
            <d-icon class="icon" name="arrow-close" v-if="arrow && !isOpen"></d-icon>
            <div class="title">{{title}}</div>
        </div>
        <div v-if="isOpen" class="content">
            <slot></slot>
        </div>
    </div>

</template>

<script>
    import Icon from './icon'

    export default {
        name: "Collapse-item",
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },

        },
        inject: ['eventBus'],
        components: {
            'd-icon': Icon
        },
        data() {
            return {
                isOpen: false,
                arrow: false
            }
        },
        methods: {
            toggle() {
                if (!this.isOpen) {
                    this.eventBus.$emit('addSelected', this.name)
                } else if (this.isOpen) {
                    this.eventBus.$emit('minusSelected', this.name)
                }

            }
        },
        mounted() {
            this.eventBus.$on('update:selected', (names, arrow) => {
                this.arrow = arrow
                if (names.includes(this.name)) {
                    this.isOpen = true
                } else if (!names.includes(this.name)) {
                    this.isOpen = false
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    $collapse-font-size: 16px;
    .item {
        font-size: $collapse-font-size;

        &:last-child {
            > div:last-child {
                border-radius: 4px;
            }
        }

    }

    .title-wrapper {
        padding: 0 0.5em;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #999999;
        cursor: pointer;

        .title {
            line-height: 32px;
        }
        .icon{
            fill:#666666;
            height: 8px;
            width: 8px;
            margin-right: 0.5em;
        }
    }

    .content {
        padding: 0 0.5em;
        color: #999999;
        border-bottom: 1px solid #999999;
    }


</style>
