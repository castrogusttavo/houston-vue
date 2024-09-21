
<template>
  <Icon :iconName="'restaurant-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Restaurant02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'restaurant-02'
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
