
<template>
  <Icon :iconName="'global-editing'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GlobalEditingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'global-editing'
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
