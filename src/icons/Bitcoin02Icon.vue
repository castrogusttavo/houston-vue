
<template>
  <Icon :iconName="'bitcoin-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bitcoin02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-02'
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
