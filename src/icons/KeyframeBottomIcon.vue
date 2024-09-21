
<template>
  <Icon :iconName="'keyframe-bottom'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyframeBottomIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyframe-bottom'
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
