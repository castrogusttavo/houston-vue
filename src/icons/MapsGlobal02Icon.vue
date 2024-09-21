
<template>
  <Icon :iconName="'maps-global-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MapsGlobal02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maps-global-02'
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
