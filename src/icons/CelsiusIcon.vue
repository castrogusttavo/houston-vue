
<template>
  <Icon :iconName="'celsius'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CelsiusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'celsius'
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
