
<template>
  <Icon :iconName="'libraries'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LibrariesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'libraries'
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
