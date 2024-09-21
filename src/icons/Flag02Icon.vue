
<template>
  <Icon :iconName="'flag-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Flag02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flag-02'
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
