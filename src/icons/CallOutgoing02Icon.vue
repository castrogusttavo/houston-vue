
<template>
  <Icon :iconName="'call-outgoing-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallOutgoing02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-outgoing-02'
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
