
<template>
  <Icon :iconName="'laurel-wreath-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaurelWreath02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laurel-wreath-02'
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
