
<template>
  <Icon :iconName="'computer-cloud'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComputerCloudIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'computer-cloud'
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
