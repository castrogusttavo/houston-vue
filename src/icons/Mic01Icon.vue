
<template>
  <Icon :iconName="'mic-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mic01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mic-01'
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
