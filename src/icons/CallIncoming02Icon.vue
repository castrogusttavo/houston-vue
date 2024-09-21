
<template>
  <Icon :iconName="'call-incoming-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallIncoming02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-incoming-02'
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
