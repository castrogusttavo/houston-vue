
<template>
  <Icon :iconName="'minus-sign-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MinusSignCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'minus-sign-circle'
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
