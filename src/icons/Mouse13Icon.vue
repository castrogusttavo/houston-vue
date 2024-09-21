
<template>
  <Icon :iconName="'mouse-13'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse13Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-13'
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
