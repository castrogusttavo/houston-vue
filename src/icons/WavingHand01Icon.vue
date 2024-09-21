
<template>
  <Icon :iconName="'waving-hand-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WavingHand01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'waving-hand-01'
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
