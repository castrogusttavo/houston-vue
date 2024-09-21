
<template>
  <Icon :iconName="'tap-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tap01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tap-01'
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
