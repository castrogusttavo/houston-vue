
<template>
  <Icon :iconName="'ice-cream-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IceCream04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ice-cream-04'
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
