
<template>
  <Icon :iconName="'airplane-take-off-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AirplaneTakeOff02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'airplane-take-off-02'
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
