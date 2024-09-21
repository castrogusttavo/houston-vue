
<template>
  <Icon :iconName="'message-programming'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageProgrammingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-programming'
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
