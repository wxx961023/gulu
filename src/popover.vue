<template>
    <div class="pop">
        <div class="pop-content" v-if="isOpen" ref="content" :class="popPosition">
            <slot name="content"></slot>
        </div>
        <span class="button" ref="button">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Popover",
        data() {
            return {
                isOpen: false
            }
        },
        props: {
            position: {
                type: String,
                default: 'top'
            },
            trigger: {
                type: String,
                default: 'click'
            }
        },
        computed: {
            popPosition() {
                return `position-${this.position}`
            }
        },
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.button.addEventListener('click', this.toggle)
            } else if (this.trigger === 'hover') {
                console.log(this.$el);
                this.$refs.button.addEventListener('mouseenter', this.open)
                this.$refs.button.addEventListener('mouseleave', this.close)
            }
        },
        methods: {
            toggle() {
                if (!this.isOpen) {             //轮子中不能阻止冒泡!!!
                    this.open()
                    document.addEventListener('click', this.documentListener)
                } else if (this.isOpen) {
                    this.close()
                }
            },
            documentListener: function (e) {
                if (!this.$refs.button.contains(e.target)
                    && !this.$refs.content.contains(e.target)) {
                    this.close()
                }
            },
            open() {
                this.isOpen = true
                this.$nextTick(() => {    //处理渲染导致的异步
                    document.body.appendChild(this.$refs.content)
                    this.setPosition()
                })

            },
            close() {
                this.isOpen = false
                if (this.trigger === 'click') {
                    document.removeEventListener('click', this.documentListener)
                }
            },
            setPosition() {
                let {width, height, top, left} = this.$refs.button.getBoundingClientRect()
                let coordinate = {
                    top: {
                        top: top + scrollY + 'px',
                        left: left + scrollX + 'px'
                    },
                    bottom: {
                        top: top + scrollY + height + 'px',
                        left: left + scrollX + 'px'
                    },
                    left: {
                        top: top + scrollY + 'px',
                        left: left + scrollX + 'px'
                    },
                    right: {
                        top: top + scrollY + 'px',
                        left: left + scrollX + width + 'px'
                    },
                }

                this.$refs.content.style.top = coordinate[this.position].top
                this.$refs.content.style.left = coordinate[this.position].left

            }
        },
    }
</script>

<style scoped lang="scss">
    $border-color: #333;
    .pop {
        display: inline-block;
        vertical-align: middle;

        .button {
            display: inline-block;
        }
    }

    .pop-content {
        border: 1px solid $border-color;
        border-radius: 4px;
        background: white;
        display: inline-block;
        position: absolute;
        max-width: 15.2em;
        font-size: 14px;
        padding: 0.5em 0.5em;
        word-break: break-all;

        &::before {
            content: '';
            border: 10px solid transparent;
            position: absolute;
        }

        &::after {
            content: '';
            border: 10px solid transparent;
            position: absolute;
        }

        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;
            filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.5));

            &::before {
                top: 100%;
                border-top-color: $border-color;
                border-bottom: none;
            }

            &::after {
                top: calc(100% - 1px);
                border-top-color: white;
                border-bottom: none;
            }
        }

        &.position-bottom {
            margin-top: 10px;
            filter: drop-shadow(-1px 1px 3px rgba(0, 0, 0, 0.5));

            &::before {
                top: 0%;
                transform: translateY(-100%);
                border-bottom-color: $border-color;
                border-top: none;
            }

            &::after {
                top: calc(0% + 1px);
                transform: translateY(-100%);
                border-bottom-color: white;
                border-top: none;
            }
        }

        &.position-left {
            margin: 0 -10px;
            filter: drop-shadow(1px -1px 3px rgba(0, 0, 0, 0.5));
            transform: translateX(-100%);

            &::before {
                top: 0.5em;
                left: 100%;
                border-left-color: $border-color;
                border-right: none;
            }

            &::after {
                top: 0.5em;
                left: calc(100% - 1px);
                border-left-color: white;
                border-right: none;
            }
        }

        &.position-right {
            margin: 0 10px;
            filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.5));

            &::before {
                top: 0.5em;
                left: 0;
                transform: translateX(-100%);
                border-right-color: $border-color;
                border-left: none;
            }

            &::after {
                top: 0.5em;
                left: calc(0% + 1px);
                transform: translateX(-100%);
                border-right-color: white;
                border-left: none;

            }
        }
    }
</style>
