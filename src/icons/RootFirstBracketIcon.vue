
<template>
  <Icon :iconName="'root-1st-bracket'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RootFirstBracketIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'root-1st-bracket'
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
