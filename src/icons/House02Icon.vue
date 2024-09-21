
<template>
  <Icon :iconName="'house-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'House02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'house-02'
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
