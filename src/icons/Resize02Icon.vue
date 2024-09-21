
<template>
  <Icon :iconName="'resize-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Resize02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'resize-02'
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
