
<template>
  <Icon :iconName="'checkmark-circle-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CheckmarkCircle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'checkmark-circle-02'
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
