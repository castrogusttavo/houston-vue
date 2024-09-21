
<template>
  <Icon :iconName="'route-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Route03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'route-03'
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
