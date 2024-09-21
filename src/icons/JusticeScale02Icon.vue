
<template>
  <Icon :iconName="'justice-scale-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'JusticeScale02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'justice-scale-02'
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
