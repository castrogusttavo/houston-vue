
<template>
  <Icon :iconName="'2nd-bracket-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SecondBracketCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: '2nd-bracket-circle'
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
