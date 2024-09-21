
<template>
  <Icon :iconName="'call-paused'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallPausedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-paused'
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
