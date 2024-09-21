
<template>
  <Icon :iconName="'webflow-rectangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WebflowRectangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'webflow-rectangle'
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
