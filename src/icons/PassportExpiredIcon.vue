
<template>
  <Icon :iconName="'passport-expired'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PassportExpiredIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'passport-expired'
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
