
<template>
  <Icon :iconName="'super-mario'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SuperMarioIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'super-mario'
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
