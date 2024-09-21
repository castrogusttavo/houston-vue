
<template>
  <Icon :iconName="'dish-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Dish02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dish-02'
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
