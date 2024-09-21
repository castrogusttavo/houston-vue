
<template>
  <Icon :iconName="'mouse-left-click-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MouseLeftClick03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-left-click-03'
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
