
<template>
  <Icon :iconName="'keyframe-align-center'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyframeAlignCenterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyframe-align-center'
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
