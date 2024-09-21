
<template>
  <Icon :iconName="'restaurant-table'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RestaurantTableIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'restaurant-table'
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
