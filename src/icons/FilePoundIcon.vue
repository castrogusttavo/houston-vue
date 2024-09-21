
<template>
  <Icon :iconName="'file-pound'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FilePoundIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-pound'
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
