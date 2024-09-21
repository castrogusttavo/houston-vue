
<template>
  <Icon :iconName="'file-shredder'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileShredderIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-shredder'
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
