
<template>
  <Icon :iconName="'unlink-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Unlink06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'unlink-06'
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
