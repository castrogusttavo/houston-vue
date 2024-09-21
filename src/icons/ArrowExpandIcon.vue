
<template>
  <Icon :iconName="'arrow-expand'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowExpandIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-expand'
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
