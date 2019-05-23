<template>
  <svg class="g-icon brazen">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg.js'
export default {
  name:'GuluIcon',
  props:['name']
}
</script>

  <style>
    .g-icon{
      height: 1em;
      width: 1em;
    }
  </style>
