
<template>
  <Icon :iconName="'pickup-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Pickup02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pickup-02'
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
