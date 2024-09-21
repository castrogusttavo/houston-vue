
<template>
  <Icon :iconName="'programming-flag'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ProgrammingFlagIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'programming-flag'
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
