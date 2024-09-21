
<template>
  <Icon :iconName="'message-unlock-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageUnlock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-unlock-01'
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
