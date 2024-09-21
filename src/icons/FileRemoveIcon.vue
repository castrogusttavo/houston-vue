
<template>
  <Icon :iconName="'file-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-remove'
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
