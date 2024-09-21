
<template>
  <Icon :iconName="'user-switch'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserSwitchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-switch'
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
