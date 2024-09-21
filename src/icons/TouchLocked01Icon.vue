
<template>
  <Icon :iconName="'touch-locked-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TouchLocked01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touch-locked-01'
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
