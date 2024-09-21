
<template>
  <Icon :iconName="'phone-off-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PhoneOff02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'phone-off-02'
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
