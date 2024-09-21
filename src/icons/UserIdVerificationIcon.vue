
<template>
  <Icon :iconName="'user-id-verification'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserIdVerificationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-id-verification'
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
