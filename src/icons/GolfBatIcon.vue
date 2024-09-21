
<template>
  <Icon :iconName="'golf-bat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GolfBatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'golf-bat'
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
