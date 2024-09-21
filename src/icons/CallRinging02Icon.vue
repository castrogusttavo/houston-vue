
<template>
  <Icon :iconName="'call-ringing-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallRinging02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-ringing-02'
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
