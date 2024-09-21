
<template>
  <Icon :iconName="'stamp-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Stamp01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stamp-01'
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
