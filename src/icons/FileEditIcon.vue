
<template>
  <Icon :iconName="'file-edit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileEditIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-edit'
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
