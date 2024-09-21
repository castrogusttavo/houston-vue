
<template>
  <Icon :iconName="'two-finger-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TwoFinger03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'two-finger-03'
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
