<script setup>
import { onMounted, defineProps } from 'vue'

const props = defineProps({
  amisjson: {
    type: Object,
    required: true
  }
})


onMounted(() => {
  var amis = amisRequire('amis/embed');
  let amisScoped = amis.embed('#box', props.amisjson);
})
</script>

<template>
  <div id="box"></div>
</template>