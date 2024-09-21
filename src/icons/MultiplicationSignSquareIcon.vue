
<template>
  <Icon :iconName="'multiplication-sign-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MultiplicationSignSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'multiplication-sign-square'
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
