
<template>
  <Icon :iconName="'ice-cream-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IceCream03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ice-cream-03'
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
