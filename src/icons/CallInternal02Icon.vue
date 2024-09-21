
<template>
  <Icon :iconName="'call-internal-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallInternal02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-internal-02'
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
