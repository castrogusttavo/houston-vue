
<template>
  <Icon :iconName="'layout-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Layout01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-01'
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
