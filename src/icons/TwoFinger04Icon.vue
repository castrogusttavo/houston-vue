
<template>
  <Icon :iconName="'two-finger-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TwoFinger04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'two-finger-04'
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
