
<template>
  <Icon :iconName="'mouse-16'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse16Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-16'
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
