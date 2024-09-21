
<template>
  <Icon :iconName="'crazy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CrazyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'crazy'
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
