
<template>
  <Icon :iconName="'parking-area-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ParkingAreaCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'parking-area-circle'
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
