
<template>
  <Icon :iconName="'gps-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Gps02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gps-02'
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
