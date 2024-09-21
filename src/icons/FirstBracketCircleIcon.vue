
<template>
  <Icon :iconName="'1st-bracket-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FirstBracketCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: '1st-bracket-circle'
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
