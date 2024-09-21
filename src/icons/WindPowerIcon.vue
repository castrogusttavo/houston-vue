
<template>
  <Icon :iconName="'wind-power'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WindPowerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wind-power'
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
