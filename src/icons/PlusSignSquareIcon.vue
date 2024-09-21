
<template>
  <Icon :iconName="'plus-sign-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlusSignSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plus-sign-square'
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
