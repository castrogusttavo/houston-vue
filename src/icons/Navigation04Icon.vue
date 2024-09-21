
<template>
  <Icon :iconName="'navigation-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Navigation04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'navigation-04'
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
