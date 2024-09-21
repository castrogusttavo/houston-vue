
<template>
  <Icon :iconName="'car-parking-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CarParking01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'car-parking-01'
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
