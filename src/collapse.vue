<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "Collapse",
        data() {
            return {
                eventBus: new Vue(),
                selectedCopy: JSON.parse(JSON.stringify(this.selected))    //深拷贝避免直接操作props
            }
        },
        props: {
            //由父组件中的数组来控制子元素的渲染
            selected: {
                type: Array,
            },
            single: {
                type: Boolean,
                default: false
            },
            arrow: {
                type: Boolean,
                default: false
            }
        },
        provide() {
            return {eventBus: this.eventBus}
        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selectedCopy,this.arrow)

            this.eventBus.$on('addSelected', (name) => {
                if (this.single) {
                    this.selectedCopy = [name]
                } else {
                    this.selectedCopy.push(name)
                }
                this.eventBus.$emit('update:selected', this.selectedCopy,this.arrow)
                this.$emit('update:selected', this.selectedCopy)   //将数据双向绑定

            })
            this.eventBus.$on('minusSelected', (name) => {
                let index = this.selectedCopy.indexOf(name)
                this.selectedCopy.splice(index, 1)
                this.eventBus.$emit('update:selected', this.selectedCopy,this.arrow)
                this.$emit('update:selected', this.selectedCopy)
            })
        }
    }
</script>

<style scoped lang="scss">
    .collapse {
        width: 60%;
        margin: 0 auto;
        border: 1px solid #999;
        border-radius: 4px;
        border-bottom: none;
    }
</style>
