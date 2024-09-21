
<template>
  <Icon :iconName="'minus-sign-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MinusSignSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'minus-sign-square'
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
