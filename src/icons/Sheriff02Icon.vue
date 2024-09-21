
<template>
  <Icon :iconName="'sheriff-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sheriff02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sheriff-02'
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
