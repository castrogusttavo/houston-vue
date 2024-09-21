
<template>
  <Icon :iconName="'call-received-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallReceived02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-received-02'
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
