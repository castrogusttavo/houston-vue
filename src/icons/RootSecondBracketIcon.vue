
<template>
  <Icon :iconName="'root-2nd-bracket'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RootSecondBracketIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'root-2nd-bracket'
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
