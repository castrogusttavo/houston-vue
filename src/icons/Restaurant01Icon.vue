
<template>
  <Icon :iconName="'restaurant-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Restaurant01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'restaurant-01'
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
