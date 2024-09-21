
<template>
  <Icon :iconName="'hand-bag-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HandBag02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hand-bag-02'
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
