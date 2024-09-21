
<template>
  <Icon :iconName="'resize-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Resize01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'resize-01'
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
