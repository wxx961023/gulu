<template>
    <div class="toast" :class="positionClass">
        <div class="text" v-html="$slots.default"></div>
        <div class="close" @click="closeClick" v-if="closeButton.text">
            <div class="closeText">{{closeButton.text}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Toast",

        props: {
            duration: {
                type: Number,
                default: 3
            },
            position: {
                type: String,
                default: 'middle'
            },
            closeButton: {
                type: Object,    //default需要用函数return对象
                default: function () {
                    return {
                        text: '',
                        callback: {}
                    }
                }
            }
        },
        computed: {
            positionClass() {
                return `position-${this.position}`
            }
        },
        methods: {
            closeClick() {
                this.disappear()
                if (this.closeButton.text && typeof this.closeButton.callback === "function") {
                    this.closeButton.callback(this)  //可以把toast实例传参给callback
                }
            },
            disappear() {
                this.$el.remove()
                this.$destroy()
            }
        },
        mounted() {
            if (this.duration >0) {
                setTimeout(() => {
                    this.disappear()
                }, this.duration * 1000)
            }
        }
    }
</script>

<style scoped lang="scss">
    $toast-font-size: 14px;
    $toast-background: #333;
    $toast-color: #ddd;
    @mixin debug($color:red) {
        border: 1px solid $color;
    }

    .text {
        height: 100%;
        margin: 0.5em 0.5em;
    }

    .close {
        border-left: 1px solid #999999;
        padding: 0.5em 0.5em;
        cursor: pointer;
        display: flex;
        align-items: center;

        .closeText {
            white-space: nowrap;
        }
    }

    .toast {
        line-height: 1.8;
        max-width: 25em; //直接挂在到body中，父元素是body
        font-size: $toast-font-size;
        background: $toast-background;
        color: $toast-color;
        display: flex;
        position: absolute;
        left: 50%;
        border-radius: 4px;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);

        &.position-top {
            top: 0%;
            transform: translate(-50%, 0%);
            animation: slide-down 0.5s;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
            animation: fade-in 0.5s;

        }

        &.position-bottom {
            bottom: 0;
            transform: translate(-50%, 0%);
            animation: slide-up 0.5s;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

    }

    @keyframes slide-down {
        0% {
            opacity: 0;
            transform: translate(-50%, -100%)
        }
        100% {
            opacity: 1;
            transform: translate(-50%, 0%)
        }
    }

    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translate(-50%, 100%)
        }
        100% {
            opacity: 1;
            transform: translate(-50%, 0%)
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }


</style>
