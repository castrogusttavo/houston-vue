
<template>
  <Icon :iconName="'solid-line-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SolidLine02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'solid-line-02'
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
