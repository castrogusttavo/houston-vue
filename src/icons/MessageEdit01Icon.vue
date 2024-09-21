
<template>
  <Icon :iconName="'message-edit-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageEdit01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-edit-01'
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
