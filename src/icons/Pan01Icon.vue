
<template>
  <Icon :iconName="'pan-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Pan01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pan-01'
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
