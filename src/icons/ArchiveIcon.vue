
<template>
  <Icon :iconName="'archive'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArchiveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'archive'
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
