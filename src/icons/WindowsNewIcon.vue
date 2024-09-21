
<template>
  <Icon :iconName="'windows-new'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WindowsNewIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'windows-new'
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
