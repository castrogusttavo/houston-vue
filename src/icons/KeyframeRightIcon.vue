
<template>
  <Icon :iconName="'keyframe-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyframeRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyframe-right'
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
