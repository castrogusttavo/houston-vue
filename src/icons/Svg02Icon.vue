
<template>
  <Icon :iconName="'svg-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Svg02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'svg-02'
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
