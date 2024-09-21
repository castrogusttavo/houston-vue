
<template>
  <Icon :iconName="'map-pinpoint-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MapPinpoint02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'map-pinpoint-02'
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
