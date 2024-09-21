
<template>
  <Icon :iconName="'snail'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SnailIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'snail'
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
