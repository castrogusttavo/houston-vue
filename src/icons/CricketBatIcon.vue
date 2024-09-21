
<template>
  <Icon :iconName="'cricket-bat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CricketBatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cricket-bat'
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
