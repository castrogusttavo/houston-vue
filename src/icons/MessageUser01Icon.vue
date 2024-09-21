
<template>
  <Icon :iconName="'message-user-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageUser01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-user-01'
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
