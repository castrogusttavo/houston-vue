
<template>
  <Icon :iconName="'computer-video'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComputerVideoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'computer-video'
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
