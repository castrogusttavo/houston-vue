
<template>
  <Icon :iconName="'user-lock-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserLock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-lock-01'
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
