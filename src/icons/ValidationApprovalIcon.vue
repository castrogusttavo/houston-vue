
<template>
  <Icon :iconName="'validation-approval'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ValidationApprovalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'validation-approval'
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
