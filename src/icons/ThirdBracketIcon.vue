
<template>
  <Icon :iconName="'3rd-bracket'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThirdBracketIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: '3rd-bracket'
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
