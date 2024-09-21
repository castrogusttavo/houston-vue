
<template>
  <Icon :iconName="'computer-video-call'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComputerVideoCallIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'computer-video-call'
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
