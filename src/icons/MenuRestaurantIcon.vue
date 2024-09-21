
<template>
  <Icon :iconName="'menu-restaurant'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MenuRestaurantIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'menu-restaurant'
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
