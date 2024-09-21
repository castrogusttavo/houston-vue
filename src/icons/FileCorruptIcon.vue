
<template>
  <Icon :iconName="'file-corrupt'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileCorruptIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-corrupt'
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
