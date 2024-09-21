
<template>
  <Icon :iconName="'webflow-ellipse'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WebflowEllipseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'webflow-ellipse'
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
