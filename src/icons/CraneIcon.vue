
<template>
  <Icon :iconName="'crane'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CraneIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'crane'
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
