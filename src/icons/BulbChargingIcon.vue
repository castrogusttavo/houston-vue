
<template>
  <Icon :iconName="'bulb-charging'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BulbChargingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bulb-charging'
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
