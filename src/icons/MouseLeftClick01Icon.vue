
<template>
  <Icon :iconName="'mouse-left-click-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MouseLeftClick01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-left-click-01'
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
