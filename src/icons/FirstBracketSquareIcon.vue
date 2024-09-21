
<template>
  <Icon :iconName="'1st-bracket-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FirstBracketSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: '1st-bracket-square'
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
