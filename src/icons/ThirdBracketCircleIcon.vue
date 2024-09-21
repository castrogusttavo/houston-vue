
<template>
  <Icon :iconName="'3rd-bracket-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThirdBracketCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: '3rd-bracket-circle'
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
