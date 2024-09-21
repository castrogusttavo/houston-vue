
<template>
  <Icon :iconName="'notebook'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NotebookIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notebook'
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
