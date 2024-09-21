
<template>
  <Icon :iconName="'checkmark-circle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CheckmarkCircle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'checkmark-circle-01'
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
