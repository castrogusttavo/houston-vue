
<template>
  <Icon :iconName="'clean'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CleanIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'clean'
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
