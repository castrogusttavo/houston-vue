
<template>
  <Icon :iconName="'ev-charging'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EvChargingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ev-charging'
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
