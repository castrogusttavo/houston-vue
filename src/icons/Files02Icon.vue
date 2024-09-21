
<template>
  <Icon :iconName="'files-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Files02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'files-02'
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
