
<template>
  <Icon :iconName="'user-account'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserAccountIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-account'
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
