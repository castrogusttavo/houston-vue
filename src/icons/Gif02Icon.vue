
<template>
  <Icon :iconName="'gif-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Gif02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gif-02'
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
