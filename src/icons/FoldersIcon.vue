
<template>
  <Icon :iconName="'folders'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FoldersIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folders'
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
