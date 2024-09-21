
<template>
  <Icon :iconName="'clock-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Clock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'clock-01'
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
