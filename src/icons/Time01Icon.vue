
<template>
  <Icon :iconName="'time-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Time01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'time-01'
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
