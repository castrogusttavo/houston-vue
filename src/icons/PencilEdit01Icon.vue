
<template>
  <Icon :iconName="'pencil-edit-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PencilEdit01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pencil-edit-01'
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
