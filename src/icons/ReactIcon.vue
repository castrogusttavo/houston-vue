
<template>
  <Icon :iconName="'react'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ReactIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'react'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
