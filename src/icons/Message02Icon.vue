
<template>
  <Icon :iconName="'message-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Message02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-02'
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
