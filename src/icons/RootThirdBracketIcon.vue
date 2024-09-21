
<template>
  <Icon :iconName="'root-3rd-bracket'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RootThirdBracketIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'root-3rd-bracket'
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
