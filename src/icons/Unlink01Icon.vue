
<template>
  <Icon :iconName="'unlink-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Unlink01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'unlink-01'
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
