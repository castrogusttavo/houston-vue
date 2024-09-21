
<template>
  <Icon :iconName="'medal-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Medal06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medal-06'
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
