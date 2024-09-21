
<template>
  <Icon :iconName="'keyframe-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyframeRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyframe-remove'
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
