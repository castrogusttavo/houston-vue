
<template>
  <Icon :iconName="'laptop-charging'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaptopChargingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laptop-charging'
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
