
<template>
  <Icon :iconName="'layout-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Layout06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-06'
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
