
<template>
  <Icon :iconName="'video-replay'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VideoReplayIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'video-replay'
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
