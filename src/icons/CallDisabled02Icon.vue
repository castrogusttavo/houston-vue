
<template>
  <Icon :iconName="'call-disabled-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallDisabled02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-disabled-02'
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
