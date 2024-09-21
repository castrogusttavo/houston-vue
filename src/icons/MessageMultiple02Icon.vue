
<template>
  <Icon :iconName="'message-multiple-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageMultiple02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-multiple-02'
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
