
<template>
  <Icon :iconName="'keyframe-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyframeAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyframe-add'
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
