
<template>
  <Icon :iconName="'1st-bracket'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FirstBracketIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: '1st-bracket'
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
