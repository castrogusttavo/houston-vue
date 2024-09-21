
<template>
  <Icon :iconName="'magnet-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Magnet02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'magnet-02'
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
