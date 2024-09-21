
<template>
  <Icon :iconName="'file-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-add'
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
