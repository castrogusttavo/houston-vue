
<template>
  <Icon :iconName="'loom'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LoomIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'loom'
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
