
<template>
  <Icon :iconName="'navigation-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Navigation03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'navigation-03'
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
