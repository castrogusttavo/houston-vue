
<template>
  <Icon :iconName="'maps-location-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MapsLocation02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maps-location-02'
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
