
<template>
  <Icon :iconName="'stop'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stop'
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
