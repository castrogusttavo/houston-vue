
<template>
  <Icon :iconName="'maps-circle-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MapsCircle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maps-circle-02'
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
