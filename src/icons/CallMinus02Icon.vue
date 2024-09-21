
<template>
  <Icon :iconName="'call-minus-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallMinus02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-minus-02'
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
