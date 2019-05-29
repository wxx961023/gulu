<template>
    <div class="collapse-wrapper">
        <d-collapse :selected.sync="currentSelected">
            <d-collapse-item title="标题1" name="1">第一个内容 <br><br><br><br><br><br></d-collapse-item>
            <d-collapse-item title="标题2" name="2">第二个内容 <br><br><br><br><br><br></d-collapse-item>
            <d-collapse-item title="标题3" name="3">第三个内容 <br><br><br><br><br><br></d-collapse-item>
        </d-collapse>
        <br>
        <d-collapse :selected.sync="currentSelected" arrow>
            <d-collapse-item title="标题1" name="1">第一个内容 <br><br><br><br><br><br></d-collapse-item>
            <d-collapse-item title="标题2" name="2">第二个内容 <br><br><br><br><br><br></d-collapse-item>
            <d-collapse-item title="标题3" name="3">第三个内容 <br><br><br><br><br><br></d-collapse-item>
        </d-collapse>
        <br>
        <d-collapse :selected.sync="currentSelected" arrow single>
            <d-collapse-item title="标题1" name="1">第一个内容 <br><br><br><br><br><br></d-collapse-item>
            <d-collapse-item title="标题2" name="2">第二个内容 <br><br><br><br><br><br></d-collapse-item>
            <d-collapse-item title="标题3" name="3">第三个内容 <br><br><br><br><br><br></d-collapse-item>
        </d-collapse>
    </div>
</template>

<script>
    import Collapse from '../../../src/Collapse'
    import CollapseItem from '../../../src/Collapse-item'

    export default {
        name: "collapse-demo",
        components: {
            'd-collapse': Collapse,
            'd-collapse-item': CollapseItem
        },
        data(){
            return{
                currentSelected:['1']
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
