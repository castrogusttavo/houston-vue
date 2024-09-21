
<template>
  <Icon :iconName="'plus-minus-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlusMinus02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plus-minus-02'
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
