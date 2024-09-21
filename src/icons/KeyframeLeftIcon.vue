
<template>
  <Icon :iconName="'keyframe-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyframeLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyframe-left'
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
