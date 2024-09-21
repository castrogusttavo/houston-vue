
<template>
  <Icon :iconName="'scooter-electric'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ScooterElectricIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'scooter-electric'
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
