
<template>
  <Icon :iconName="'car-parking-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CarParking02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'car-parking-02'
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
