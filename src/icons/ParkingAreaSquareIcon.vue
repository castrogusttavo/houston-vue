
<template>
  <Icon :iconName="'parking-area-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ParkingAreaSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'parking-area-square'
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
