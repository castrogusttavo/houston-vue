
<template>
  <Icon :iconName="'file-script'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileScriptIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-script'
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
