
<template>
  <Icon :iconName="'pumpkin'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PumpkinIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pumpkin'
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
