
<template>
  <Icon :iconName="'baseball-bat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BaseballBatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'baseball-bat'
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
