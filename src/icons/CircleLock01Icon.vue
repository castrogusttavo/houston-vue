
<template>
  <Icon :iconName="'circle-lock-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleLock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-lock-01'
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
