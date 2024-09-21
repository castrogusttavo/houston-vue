
<template>
  <Icon :iconName="'keyframe'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyframeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyframe'
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
