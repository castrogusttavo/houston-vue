
<template>
  <Icon :iconName="'floppy-disk'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FloppyDiskIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'floppy-disk'
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
