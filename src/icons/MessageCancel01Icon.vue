
<template>
  <Icon :iconName="'message-cancel-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageCancel01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-cancel-01'
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
