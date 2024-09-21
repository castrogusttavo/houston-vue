
<template>
  <Icon :iconName="'atomic-power'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AtomicPowerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'atomic-power'
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
