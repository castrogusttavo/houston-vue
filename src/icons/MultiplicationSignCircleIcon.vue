
<template>
  <Icon :iconName="'multiplication-sign-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MultiplicationSignCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'multiplication-sign-circle'
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
