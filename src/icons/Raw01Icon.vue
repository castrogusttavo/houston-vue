
<template>
  <Icon :iconName="'raw-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Raw01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'raw-01'
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
