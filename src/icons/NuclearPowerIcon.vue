
<template>
  <Icon :iconName="'nuclear-power'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NuclearPowerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'nuclear-power'
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
