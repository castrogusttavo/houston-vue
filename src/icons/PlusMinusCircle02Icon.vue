
<template>
  <Icon :iconName="'plus-minus-circle-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlusMinusCircle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plus-minus-circle-02'
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
