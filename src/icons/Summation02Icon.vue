
<template>
  <Icon :iconName="'summation-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Summation02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'summation-02'
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
