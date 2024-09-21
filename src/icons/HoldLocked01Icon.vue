
<template>
  <Icon :iconName="'hold-locked-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HoldLocked01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hold-locked-01'
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
