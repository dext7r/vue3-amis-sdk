<script setup>
import 'amis/sdk/sdk.js';
import 'amis/lib/themes/default.css';
import VueAmisSdk from './components/VueAmisSdk.vue'
const amisjson = {
  type: 'page',
  title: '表单页面',
  body: {
    type: 'form',
    mode: 'horizontal',
    api: '/saveForm',
    body: [
      {
        label: 'Name',
        type: 'input-text',
        name: 'name'
      },
      {
        label: 'Email',
        type: 'input-email',
        name: 'email'
      }
    ]
  }
}
</script>

<template>
  <VueAmisSdk :amisjson="amisjson" />
</template>