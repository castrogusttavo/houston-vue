
<template>
  <Icon :iconName="'minus-plus-circle-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MinusPlusCircle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'minus-plus-circle-02'
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
