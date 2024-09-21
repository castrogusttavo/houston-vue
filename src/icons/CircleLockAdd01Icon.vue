
<template>
  <Icon :iconName="'circle-lock-add-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleLockAdd01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-lock-add-01'
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
