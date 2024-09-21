
<template>
  <Icon :iconName="'coffee-beans'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CoffeeBeansIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'coffee-beans'
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
