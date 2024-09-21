
<template>
  <Icon :iconName="'keyframe-top'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyframeTopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyframe-top'
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
