
<template>
  <Icon :iconName="'keyframe-align-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyframeAlignVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyframe-align-vertical'
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
