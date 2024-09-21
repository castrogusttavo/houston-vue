
<template>
  <Icon :iconName="'archive-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Archive01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'archive-01'
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
