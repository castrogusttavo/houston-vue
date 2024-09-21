
<template>
  <Icon :iconName="'message-cancel-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageCancel02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-cancel-02'
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
