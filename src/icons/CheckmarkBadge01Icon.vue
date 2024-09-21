
<template>
  <Icon :iconName="'checkmark-badge-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CheckmarkBadge01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'checkmark-badge-01'
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
