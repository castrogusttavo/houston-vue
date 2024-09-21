
<template>
  <Icon :iconName="'gpu'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GpuIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gpu'
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
