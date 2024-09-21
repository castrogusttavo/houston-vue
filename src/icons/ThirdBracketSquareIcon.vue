
<template>
  <Icon :iconName="'3rd-bracket-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThirdBracketSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: '3rd-bracket-square'
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
