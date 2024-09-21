
<template>
  <Icon :iconName="'invoice-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Invoice02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'invoice-02'
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
