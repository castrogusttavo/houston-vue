
<template>
  <Icon :iconName="'car-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Car02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'car-02'
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
