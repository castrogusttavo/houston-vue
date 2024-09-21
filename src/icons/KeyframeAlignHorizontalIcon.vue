
<template>
  <Icon :iconName="'keyframe-align-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyframeAlignHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyframe-align-horizontal'
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
