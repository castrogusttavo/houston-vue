
<template>
  <Icon :iconName="'estimate-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Estimate02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'estimate-02'
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
