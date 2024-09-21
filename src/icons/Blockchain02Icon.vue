
<template>
  <Icon :iconName="'blockchain-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Blockchain02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blockchain-02'
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
