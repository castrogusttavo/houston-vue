
<template>
  <Icon :iconName="'user-status'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserStatusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-status'
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
