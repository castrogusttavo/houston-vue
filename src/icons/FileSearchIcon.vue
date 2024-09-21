
<template>
  <Icon :iconName="'file-search'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileSearchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-search'
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
